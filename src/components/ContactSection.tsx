
const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-4 relative futuristic-bg section-stack section-overlap">
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
          Join thousands of businesses already using Juus AI to automate their operations 
          and scale faster than ever before.
        </p>

        <div className="glass-card p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 bg-white/10 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 font-light focus:outline-none focus:border-blue-500/50 transition-colors duration-200"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 bg-white/10 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 font-light focus:outline-none focus:border-blue-500/50 transition-colors duration-200"
              />
            </div>
          </div>
          
          <div className="mb-8">
            <input
              type="text"
              placeholder="Company Name"
              className="w-full px-6 py-4 bg-white/10 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 font-light focus:outline-none focus:border-blue-500/50 transition-colors duration-200"
            />
          </div>
          
          <div className="mb-8">
            <textarea
              placeholder="Tell us about your automation needs..."
              rows={4}
              className="w-full px-6 py-4 bg-white/10 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 font-light focus:outline-none focus:border-blue-500/50 transition-colors duration-200 resize-none"
            />
          </div>

          <button className="neuro-button w-full md:w-auto">
            <i className="ph-light ph-paper-plane-tilt mr-2"></i>
            Start Your AI Journey
          </button>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="glass-card p-6">
            <i className="ph-light ph-envelope text-2xl text-blue-600 mb-3 block"></i>
            <div className="text-gray-700 font-light">hello@juus.ai</div>
          </div>
          <div className="glass-card p-6">
            <i className="ph-light ph-phone text-2xl text-purple-600 mb-3 block"></i>
            <div className="text-gray-700 font-light">+1 (555) 123-4567</div>
          </div>
          <div className="glass-card p-6">
            <i className="ph-light ph-map-pin text-2xl text-green-600 mb-3 block"></i>
            <div className="text-gray-700 font-light">San Francisco, CA</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-gray-300 text-center">
        <p className="text-gray-500 font-light">
          © 2024 Juus AI. All rights reserved. Built with ❤️ for the future of automation.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
