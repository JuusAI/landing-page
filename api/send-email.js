// // api/send-email.js
// import { Resend } from "resend";

import { createTransport } from "nodemailer";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   const { to, subject, html } = req.body;

//   try {
//     const data = await resend.emails.send({
//       from: "Team JUUS <hello@juus.ai>",
//       to,
//       subject,
//       html,
//     });

//     res.status(200).json({ success: true, data });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }

// Create a test account or replace with real credentials.
export default async function handler(req, res) {
  const { to, subject, html } = req.body;

  const transporter = createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.GODADDY_EMAIL,
      pass: process.env.GODADDY_PW,
    },
  });

  (async () => {
    const info = await transporter.sendMail(
      {
        from: '"Juus AI" <hello@juus.ai>',
        to,
        subject,
        html,
      },
      (error, info) => {
        if (error) {
          return console.log("Error sending email:", error);
        }
        console.log("Message sent:", info.messageId);
      }
    );
  })();
}
