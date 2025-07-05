import { render } from "@react-email/render";
import { useState } from "react";
import ConfirmationEmail from "./emails/ContactEmail";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // success | error | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const emailHTML = render(ConfirmationEmail({ to }));
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: form.email, // Or dynamically set if needed
          subject: `New Contact from ${form.name}`,
          html: emailHTML,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
        console.error(data.error);
      }
    } catch (err) {
      setStatus("error");
      console.error("Email failed to send:", err);
    }
  };

  return (
    <section id="contact" className="panel py-32 px-4 relative futuristic-bg">
      <div className="max-w-4xl mx-auto text-center scroll-fade">
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

          <button className="neuro-button w-full md:w-auto" onClick={sendEmail}>
            <i className="ph-light ph-paper-plane-tilt mr-2"></i>
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
            <div className="text-gray-700 font-light">Dubai UAE</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-gray-300 text-center">
        <p className="text-gray-500 font-light">
          © 2025 Juus AI. All rights reserved. Built with ❤️ for the future of
          automation.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
