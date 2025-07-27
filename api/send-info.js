import { createTransport } from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { subject, html } = req.body;

  const transporter = createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.GODADDY_EMAIL,
      pass: process.env.GODADDY_PW,
    },
  });

  (async () => {
    await transporter.sendMail(
      {
        from: '"Juus AI" <hello@juus.ai>',
        to: "hello@juus.ai",
        subject,
        html,
      },
      (error, info) => {
        if (error) {
          res.status(500).json({ error: error.message });
        }
        res.status(200).json({ success: true, info });
      }
    );
  })();
}
