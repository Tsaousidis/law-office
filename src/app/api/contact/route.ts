import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email(),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(2000),
});

const CONTACT_RECEIVER = "info@papadopouloslaw.gr";
const CONTACT_SENDER = "Δικηγορικό Γραφείο Παπαδόπουλος <onboarding@resend.dev>";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "invalid_input", issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json({ error: "server_not_configured" }, { status: 500 });
  }

  const { name, email, phone, message } = parsed.data;
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: CONTACT_SENDER,
    to: CONTACT_RECEIVER,
    replyTo: email,
    subject: `Νέο μήνυμα επικοινωνίας από ${name}`,
    text: [
      `Όνομα: ${name}`,
      `Email: ${email}`,
      phone ? `Τηλέφωνο: ${phone}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
