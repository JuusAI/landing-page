
const MissionSection = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center scroll-fade">
        <div className="mb-12">
          <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-light tracking-tight border border-purple-500/30">
            Our Mission
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-8 leading-tight">
          Democratizing <span className="text-gradient">AI Automation</span>
          <br />
          for Everyone
        </h2>

        <div className="glass-card p-8 md:p-12 mb-12">
          <p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed mb-8">
            We believe that powerful AI automation shouldn't be limited to tech giants. 
            Every business, regardless of size, deserves access to intelligent automation 
            that can transform their operations and unlock their full potential.
          </p>
          
          <p className="text-lg font-light text-white/60 leading-relaxed">
            That's why we built Juus AI - to make enterprise-grade AI automation 
            accessible, affordable, and easy to implement. We're not just building software; 
            we're empowering the next generation of businesses to compete and thrive 
            in an AI-driven world.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-light text-gradient mb-2">10M+</div>
            <div className="text-white/60 font-light">Tasks Automated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-gradient mb-2">99.9%</div>
            <div className="text-white/60 font-light">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-gradient mb-2">24/7</div>
            <div className="text-white/60 font-light">AI Support</div>
          </div>
        </div>

        <button className="neuro-button">
          <i className="ph-light ph-heart mr-2"></i>
          Join Our Mission
        </button>
      </div>
    </section>
  );
};

export default MissionSection;
