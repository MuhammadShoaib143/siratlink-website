import { NextResponse } from "next/server";

import {
  carrierSetupDocumentCategories,
  isAllowedCarrierFile,
  maxCarrierUploadSizeBytes,
} from "@/lib/carrier-setup";

export const runtime = "nodejs";

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

const requiredDocumentIds = carrierSetupDocumentCategories
  .filter((category) => category.required)
  .map((category) => category.id);

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

  const requiredDocumentsMissing = requiredDocumentIds.filter((categoryId) => {
    const documents = formData.getAll(`documents.${categoryId}`);
    return !documents.some((entry) => entry instanceof File && entry.size > 0);
  });

  if (requiredDocumentsMissing.length) {
    const label =
      carrierSetupDocumentCategories.find((category) => category.id === requiredDocumentsMissing[0])?.label ??
      "A required document";

    return NextResponse.json(
      {
        message: `${label} is required before the carrier setup can be submitted.`,
      },
      { status: 422 },
    );
  }

  const allFiles = carrierSetupDocumentCategories.flatMap((category) =>
    formData
      .getAll(`documents.${category.id}`)
      .filter((entry): entry is File => entry instanceof File && entry.size > 0),
  );

  if (!allFiles.length) {
    return NextResponse.json(
      {
        message: "Upload at least one onboarding document before submitting the carrier setup.",
      },
      { status: 422 },
    );
  }

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

  const secureForwardUrl = process.env.CARRIER_SETUP_WEBHOOK_URL;

  if (!secureForwardUrl) {
    return NextResponse.json(
      {
        message:
          "Secure document delivery is not connected on this deployment yet. Connect a protected API, CRM, or storage workflow before collecting live carrier onboarding files.",
      },
      { status: 503 },
    );
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

  const upstream = await fetch(secureForwardUrl, {
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
