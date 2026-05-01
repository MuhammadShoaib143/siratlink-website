import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import {
  carrierSetupDocumentCategories,
  isAllowedCarrierFile,
  maxCarrierUploadSizeBytes,
} from "@/lib/carrier-setup";
import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";

const maxCarrierUploadBundleBytes = 20 * 1024 * 1024;

const requiredFields = [
  ["fullName", "Full name"],
  ["companyName", "Company name"],
  ["phone", "Phone number"],
  ["email", "Email address"],
  ["mcNumber", "MC number"],
  ["dotNumber", "DOT number"],
  ["truckType", "Truck type"],
  ["numberOfTrucks", "Number of trucks"],
  ["preferredLanes", "Preferred lanes"],
  ["currentLocation", "Current location"],
] as const;

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";

  if (!contentType.includes("multipart/form-data")) {
    return NextResponse.json(
      {
        message: "Carrier setup requires multipart form data so company details and documents can be reviewed together.",
      },
      { status: 400 },
    );
  }

  const formData = await request.formData();

  const missingFields = requiredFields.filter(([key]) => !String(formData.get(key) ?? "").trim());

  if (missingFields.length) {
    return NextResponse.json(
      {
        message: `${missingFields[0][1]} is required before the carrier setup can be submitted.`,
      },
      { status: 422 },
    );
  }

  const allFiles = carrierSetupDocumentCategories.flatMap((category) =>
    formData
      .getAll(`documents.${category.id}`)
      .filter((entry): entry is File => entry instanceof File && entry.size > 0),
  );

  for (const file of allFiles) {
    if (!isAllowedCarrierFile({ fileName: file.name, mimeType: file.type })) {
      return NextResponse.json(
        {
          message: `${file.name} is not a supported upload type. Use PDF, JPG, PNG, DOC, or DOCX files only.`,
        },
        { status: 415 },
      );
    }

    if (file.size > maxCarrierUploadSizeBytes) {
      return NextResponse.json(
        {
          message: `${file.name} is larger than the 10 MB upload limit.`,
        },
        { status: 413 },
      );
    }
  }

  const totalUploadBytes = allFiles.reduce((total, file) => total + file.size, 0);

  if (totalUploadBytes > maxCarrierUploadBundleBytes) {
    return NextResponse.json(
      {
        message:
          "The total upload package is too large for secure email delivery. Please keep the combined document bundle under 20 MB.",
      },
      { status: 413 },
    );
  }

  const companyName = String(formData.get("companyName") ?? "").trim();
  const fullName = String(formData.get("fullName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const mcNumber = String(formData.get("mcNumber") ?? "").trim();
  const dotNumber = String(formData.get("dotNumber") ?? "").trim();
  const truckType = String(formData.get("truckType") ?? "").trim();
  const numberOfTrucks = String(formData.get("numberOfTrucks") ?? "").trim();
  const preferredLanes = String(formData.get("preferredLanes") ?? "").trim();
  const currentLocation = String(formData.get("currentLocation") ?? "").trim();
  const bestTimeToContact = String(formData.get("bestTimeToContact") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const smtpHost = process.env.SMTP_HOST?.trim();
  const smtpPort = Number(process.env.SMTP_PORT ?? "465");
  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPass = process.env.SMTP_PASS?.replace(/\s+/g, "");
  const smtpConfigured = !!(smtpHost && smtpPort && smtpUser && smtpPass);
  const secureForwardUrl = process.env.CARRIER_SETUP_WEBHOOK_URL;

  if (!smtpConfigured && !secureForwardUrl) {
    return NextResponse.json(
      {
        message:
          "Secure document delivery is not connected on this deployment yet. Add SMTP credentials or a protected webhook before collecting live carrier onboarding files.",
      },
      { status: 503 },
    );
  }

  const categoryBreakdown = carrierSetupDocumentCategories
    .map((category) => {
      const count = formData
        .getAll(`documents.${category.id}`)
        .filter((entry): entry is File => entry instanceof File && entry.size > 0).length;

      return count ? `${category.label}: ${count}` : null;
    })
    .filter(Boolean);

  if (smtpConfigured) {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const attachments = await Promise.all(
      allFiles.map(async (file) => ({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
        contentType: file.type || undefined,
      })),
    );

    const subject = `Carrier Setup Review - ${companyName}${mcNumber ? ` - MC ${mcNumber}` : ""}`;
    const text = [
      "A new carrier setup package was submitted through the SiratLink website.",
      "",
      `Full Name: ${fullName}`,
      `Company Name: ${companyName}`,
      `Phone Number: ${phone}`,
      `Email Address: ${email}`,
      `MC Number: ${mcNumber}`,
      `DOT Number: ${dotNumber}`,
      `Truck Type: ${truckType}`,
      `Number of Trucks: ${numberOfTrucks}`,
      `Preferred Lanes: ${preferredLanes}`,
      `Current Location: ${currentLocation}`,
      `Best Time to Contact: ${bestTimeToContact || "Flexible"}`,
      "",
      "Document categories included:",
      ...(categoryBreakdown.length ? categoryBreakdown.map((entry) => `- ${entry}`) : ["- No documents uploaded with this request"]),
      "",
      "Additional Notes:",
      message || "No additional notes provided.",
    ].join("\n");

    try {
      await transporter.sendMail({
        from: process.env.SMTP_FROM || smtpUser,
        to: process.env.CARRIER_SETUP_TO || siteConfig.email,
        cc: process.env.CARRIER_SETUP_CC || undefined,
        replyTo: email || undefined,
        subject,
        text,
        attachments,
      });

      return NextResponse.json({
        message:
          "Thank you. Your carrier setup information has been submitted. Our team will review your documents and contact you with the next steps.",
      });
    } catch (error) {
      console.error("Carrier setup SMTP delivery failed", error);

      return NextResponse.json(
        {
          message:
            "Carrier setup could not be delivered right now. Please verify the email connection settings and try again, or contact SiratLink directly for setup support.",
        },
        { status: 502 },
      );
    }
  }

  const outbound = new FormData();

  requiredFields.forEach(([key]) => {
    outbound.append(key, String(formData.get(key) ?? ""));
  });

  ["bestTimeToContact", "message"].forEach((key) => {
    const value = String(formData.get(key) ?? "");
    if (value.trim()) {
      outbound.append(key, value);
    }
  });

  carrierSetupDocumentCategories.forEach((category) => {
    const files = formData.getAll(`documents.${category.id}`).filter((entry): entry is File => entry instanceof File && entry.size > 0);

    files.forEach((file) => {
      outbound.append(`documents.${category.id}`, file, file.name);
    });
  });

  const upstream = await fetch(secureForwardUrl!, {
    method: "POST",
    body: outbound,
  });

  if (!upstream.ok) {
    return NextResponse.json(
      {
        message:
          "The secure onboarding destination could not accept this carrier setup right now. Please try again after the intake connection is verified.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message:
      "Thank you. Your carrier setup information has been submitted. Our team will review your documents and contact you with the next steps.",
  });
}
