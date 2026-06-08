import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  organization?: string;
  phone?: string;
  email?: string;
  opportunityType?: string;
  message?: string;
  // Honeypot field - bots fill this, humans don't
  website?: string;
};

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;

    // Honeypot check
    if (body.website && body.website.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const message = (body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (message.length > 5000 || name.length > 200) {
      return NextResponse.json(
        { ok: false, error: "Submission too long." },
        { status: 400 }
      );
    }

    const organization = (body.organization || "").trim();
    const phone = (body.phone || "").trim();
    const opportunityType = (body.opportunityType || "").trim();

    const recipient =
      process.env.CONTACT_TO_EMAIL || "Mikal.sanchez@brotherslegacyblueprint.com";
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || smtpUser;

    const htmlBody = `
      <h2>New Opportunity Inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Organization:</strong> ${escapeHtml(organization || "—")}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Opportunity Type:</strong> ${escapeHtml(opportunityType || "—")}</p>
      <hr/>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
    `.trim();

    const textBody = [
      `New Opportunity Inquiry`,
      ``,
      `Name: ${name}`,
      `Organization: ${organization || "—"}`,
      `Phone: ${phone || "—"}`,
      `Email: ${email}`,
      `Opportunity Type: ${opportunityType || "—"}`,
      ``,
      `Message:`,
      message,
    ].join("\n");

    // If SMTP is configured, send via Gmail/Workspace. Otherwise log and accept
    // (so the form still works during initial deploy before env vars are set).
    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: Number(process.env.SMTP_PORT || 465),
        secure: (process.env.SMTP_SECURE || "true") === "true",
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      try {
        await transporter.sendMail({
          from: `"BLB Website" <${smtpFrom}>`,
          to: recipient,
          replyTo: email,
          subject: `New BLB Inquiry — ${opportunityType || "General"} (${name})`,
          text: textBody,
          html: htmlBody,
        });
      } catch (err) {
        console.error("SMTP send error:", err);
        return NextResponse.json(
          { ok: false, error: "Email service error. Please try again." },
          { status: 502 }
        );
      }
    } else {
      console.log("[contact] SMTP not configured. Submission:", {
        name,
        email,
        organization,
        phone,
        opportunityType,
        message,
      });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
