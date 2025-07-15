import { useState } from "react";
import ConfirmationEmail from "./emails/ContactEmail";
import { renderToString } from "react-dom/server";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { toast, Toaster } from "sonner";
import { PopupWidget } from "react-calendly";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async () => {
    if (!form.name || !form.email || !form.message) {
      toast.warning("Error", {
        description: "Please fill in all required fields.",
        position: "bottom-right",
      });
      return;
    }

    try {
      setSubmitting(true);
      const emailHTML = renderToString(
        ConfirmationEmail({
          name: form.name,
        })
      );

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: form.email, // Or dynamically set if needed
          subject: `New Contact from ${form.name}`,
          html: emailHTML,
        }),
      });

      await sendInfo();

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setSubmitting(false);
        toast.success("Success", {
          description: "Your message has been sent!",
          position: "bottom-right",
        });
        setForm({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
        setSubmitting(false);
        toast.warning("Error", {
          description: "Something went wrong. Try again.",
          position: "bottom-right",
        });
        console.error(data.error);
      }
    } catch (err) {
      setStatus("error");
      setSubmitting(false);
      toast.warning("Error", {
        description: "Something went wrong. Try again.",
        position: "bottom-right",
      });
      console.error("Email failed to send:", err);
    }
  };

  const sendInfo = async () => {
    try {
      const res = await fetch("/api/send-info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: `New Contact from ${form.name}`,
          html: `
  <html>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; background-color: #f3f4f6; padding: 40px;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px 40px; border-radius: 12px; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.07);">
        <h2 style="color: #111827; margin-bottom: 24px;">🚀 New Contact Submission</h2>

        <p style="font-size: 16px; margin-bottom: 8px;"><strong>Name:</strong> ${form.name}</p>
        <p style="font-size: 16px; margin-bottom: 8px;"><strong>Email:</strong> ${form.email}</p>
        <p style="font-size: 16px; margin-bottom: 8px;"><strong>Company:</strong> ${form.company || "Not provided"}</p>
        <p style="font-size: 16px; margin-bottom: 8px;"><strong>Message:</strong></p>
        <p style="font-size: 16px; background-color: #f9fafb; padding: 16px; border-radius: 8px; white-space: pre-wrap; border: 1px solid #e5e7eb;">
          ${form.message || "No message submitted."}
        </p>

        <hr style="margin: 32px 0; border: none; border-top: 1px solid #e5e7eb;" />
        <p style="font-size: 14px; color: #6b7280;">This message was sent via the Juus AI contact form.</p>
      </div>
    </body>
  </html>
`,
        }),
      });
    } catch (err) {
      setStatus("error");
      setSubmitting(false);
      toast.warning("Error", {
        description: "Something went wrong. Try again.",
        position: "bottom-right",
      });
      console.error("Email failed to send:", err);
    }
  };

  return (
    <section
      id="contact"
      className="panel pt-24 md:py-32 px-4 relative futuristic-bg"
    >
      <Toaster position="bottom-right" richColors />
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <span className="inline-block px-4 py-2 bg-green-500/20 text-green-600 rounded-full text-sm font-light tracking-tight border border-green-500/30">
            Get In Touch
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-8 leading-tight text-gray-900">
          Ready to <span className="text-gradient">Transform</span>
          <br />
          Your Business?
        </h2>

        <p className="text-xl font-light text-gray-600 mb-12 max-w-2xl mx-auto">
          Join hundreds of businesses already using Juus AI to automate their
          operations and scale faster than ever before.
        </p>

        <div className="glass-card p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-6 py-4 bg-white/10 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 font-light focus:outline-none focus:border-blue-500/50 transition-colors duration-200"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-6 py-4 bg-white/10 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 font-light focus:outline-none focus:border-blue-500/50 transition-colors duration-200"
              />
            </div>
          </div>

          <div className="mb-8">
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full px-6 py-4 bg-white/10 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 font-light focus:outline-none focus:border-blue-500/50 transition-colors duration-200"
            />
          </div>

          <div className="mb-8">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your automation needs..."
              rows={4}
              className="w-full px-6 py-4 bg-white/10 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 font-light focus:outline-none focus:border-blue-500/50 transition-colors duration-200 resize-none"
            />
          </div>

          <button
            className="neuro-button w-full md:w-auto flex gap-3 mx-auto items-center"
            onClick={sendEmail}
          >
            {submitting ? (
              <Loader2 className="animate-spin w-5 h-5" />
            ) : (
              <i className="ph-light ph-paper-plane-tilt"></i>
            )}
            Start Your AI Journey
          </button>

          {status === "success" && (
            <p className="mt-4 text-green-600">Your message has been sent!</p>
          )}
          {status === "error" && (
            <p className="mt-4 text-red-600">
              Something went wrong. Try again.
            </p>
          )}
        </div>

        <PopupWidget
          url="https://calendly.com/juusaiteam/30min"
          rootElement={document.getElementById("root")}
          text="Schedule a call with us now!"
          textColor="#fff"
          color="#2563eb"
        />

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <a href="mailto:hello@juus.ai">
            <div className="glass-card p-6">
              <i className="ph-light ph-envelope text-2xl text-blue-600 mb-3 block"></i>
              <div className="text-gray-700 font-light">hello@juus.ai</div>
            </div>
          </a>
          <a href="https://www.instagram.com/juus.ai" target="_">
            <div className="glass-card p-6">
              <i className="ph-light ph-instagram-logo text-2xl text-purple-600 mb-3 block"></i>
              <div className="text-gray-700 font-light">@juus.ai</div>
            </div>
          </a>
          <div className="glass-card p-6">
            <i className="ph-light ph-map-pin text-2xl text-green-600 mb-3 block"></i>
            <div className="text-gray-700 font-light flex justify-center gap-1">
              Switzerland
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/emoji/48/switzerland-emoji.png"
                alt="switzerland-emoji"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="md:mt-20 py-8 border-t border-gray-300 text-center">
        <p className="text-gray-500 font-light">
          © 2025 Juus AI. All rights reserved. Built with ❤️ for the future of
          automation.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
