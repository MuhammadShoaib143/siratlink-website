import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";

const requiredFields = [
  ["name", "Name"],
  ["company", "Company name"],
  ["email", "Email address"],
  ["phone", "Phone number"],
  ["service", "Service needed"],
  ["message", "Message"],
] as const;

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  trucks?: string;
  service?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";

    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        {
          message: "Contact requests must be submitted as secure JSON form data.",
        },
        { status: 400 },
      );
    }

    const payload = (await request.json()) as ContactPayload;

    const sanitized = {
      name: String(payload.name ?? "").trim(),
      company: String(payload.company ?? "").trim(),
      email: String(payload.email ?? "").trim(),
      phone: String(payload.phone ?? "").trim(),
      trucks: String(payload.trucks ?? "").trim(),
      service: String(payload.service ?? "").trim(),
      message: String(payload.message ?? "").trim(),
    };

    const missingFields = requiredFields.filter(([key]) => !sanitized[key].trim());

    if (missingFields.length) {
      return NextResponse.json(
        {
          message: `${missingFields[0][1]} is required before the inquiry can be delivered.`,
        },
        { status: 422 },
      );
    }

    const smtpHost = process.env.SMTP_HOST?.trim();
    const smtpPort = Number(process.env.SMTP_PORT ?? "465");
    const smtpUser = process.env.SMTP_USER?.trim();
    const smtpPass = process.env.SMTP_PASS?.replace(/\s+/g, "");
    const smtpConfigured = !!(smtpHost && smtpPort && smtpUser && smtpPass);

    if (!smtpConfigured) {
      return NextResponse.json(
        {
          message:
            "Secure contact delivery is not connected on this deployment yet. Add SMTP credentials before collecting live inquiries.",
        },
        { status: 503 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const subject = `Consultation Request - ${sanitized.service}${sanitized.company ? ` - ${sanitized.company}` : sanitized.name ? ` - ${sanitized.name}` : ""}`;
    const text = [
      "A new consultation inquiry was submitted through the SiratLink website.",
      "",
      `Name: ${sanitized.name}`,
      `Company Name: ${sanitized.company}`,
      `Email Address: ${sanitized.email}`,
      `Phone Number: ${sanitized.phone}`,
      `Number of Trucks: ${sanitized.trucks || "Not provided"}`,
      `Service Needed: ${sanitized.service}`,
      "",
      "Message:",
      sanitized.message,
    ].join("\n");

    try {
      await transporter.sendMail({
        from: process.env.SMTP_FROM || smtpUser,
        to: process.env.CONTACT_FORM_TO?.trim() || smtpUser || siteConfig.email,
        cc: process.env.CONTACT_FORM_CC || undefined,
        replyTo: sanitized.email,
        subject,
        text,
      });

      return NextResponse.json({
        message:
          "Thank you. Your inquiry has been delivered successfully. The SiratLink team will review it and respond with the best next step.",
      });
    } catch (error) {
      console.error("Contact form SMTP delivery failed", error);

      return NextResponse.json(
        {
          message:
            "Your inquiry could not be delivered right now. Please verify the email connection settings and try again, or contact SiratLink directly.",
        },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Contact request crashed before response", error);

    return NextResponse.json(
      {
        message:
          "Your inquiry could not be processed right now. Please try again in a moment or contact SiratLink directly by phone or email.",
      },
      { status: 500 },
    );
  }
}
