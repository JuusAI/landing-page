// api/send-email.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { subject, html } = req.body;

  try {
    const data = await resend.emails.send({
      from: "Team JUUS <hello@team.juus.ai>",
      to: "juusaiteam@gmail.com",
      subject,
      html,
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
