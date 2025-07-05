// api/send-email.js
import { render } from "@react-email/render";
import { Resend } from "resend";
import ContactEmail from "../emails/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { to, subject, html } = req.body;

  try {
    const emailHTML = render(ContactEmail({ to }));
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to,
      subject,
      emailHTML,
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
