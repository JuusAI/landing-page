import { createTransport } from "nodemailer";

const email_signature = `<table style="font-family: Arial, sans-serif; font-size: 14px; color: #333;" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td style="padding-right: 15px;"><img id="a89e996f-bd82-4f13-a6ba-42b2970927f4" class="aspect-ratio" style="max-width: 100%;" src="https://am1.myprofessionalmail.com/appsuite/api/image/snippet/image?id=1&amp;uid=a89e996f-bd82-4f13-a6ba-42b2970927f4" alt="" width="140" height="140" data-pending="true" data-id="upload-image-3206"></td>
<td>
<p style="margin: 0; font-weight: bold; font-size: 16px;">John Doe</p>
<p style="margin: 2px 0;">Automation Consultant</p>
<p style="margin: 2px 0;">JUUS AI</p>
<p style="margin: 6px 0;">📧 <a style="color: #0073e6;" href="mailto:hello@juus.ai">hello@juus.ai</a></p>
<p style="margin: 6px 0;">🌐 <a style="color: #0073e6;" href="https://www.juus.ai">www.juus.ai</a></p>
<p style="margin: 6px 0;">📅 <a style="color: #0073e6;" href="https://yourcalendarlink.com">Schedule a Call</a></p>
<p style="margin: 8px 0;"><a style="text-decoration: none; color: #0073e6;" href="https://instagram.com/juus.ai"> <img style="vertical-align: middle; margin-right: 4px;" src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" width="18">Follow us on Instagram</a></p>
</td>
</tr>
</tbody>
</table>`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { subject, html } = req.body;

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
    await transporter.sendMail(
      {
        from: '"Juus AI" <hello@juus.ai>',
        to: "hello@juus.ai",
        subject,
        html: `${html} <br /> ${email_signature}`,
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
