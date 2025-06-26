
interface HeroSectionProps {
  scrollY: number;
}

const HeroSection = ({ scrollY }: HeroSectionProps) => {
  const parallaxOffset = scrollY * 0.5;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 futuristic-bg section-stack">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2"
          style={{ transform: `translate(-50%, -50%) translateY(${parallaxOffset}px)` }}
        >
          <img 
            src="/lovable-uploads/e0148784-1b21-4a5b-93e7-37b87d2117df.png"
            alt="AI Neural Network Visualization"
            className="w-full h-full object-contain animate-pulse"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto animate-fade-in-up">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-600 rounded-full text-sm font-light tracking-tight border border-blue-500/30">
            AI Automation Platform
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter mb-8 leading-tight text-gray-900">
          <span className="text-gradient">Automate</span> Your Business
          <br />
          With <span className="text-gradient">Intelligent AI</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-light text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Transform your workflow with cutting-edge AI automation. 
          Set up your AI assistant, automate trading, and scale your business effortlessly.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="neuro-button">
            <i className="ph-light ph-rocket-launch mr-2"></i>
            Get Started Free
          </button>
          <button className="px-8 py-4 text-gray-600 hover:text-gray-900 font-light tracking-tight transition-colors duration-200 flex items-center">
            <i className="ph-light ph-play-circle mr-2 text-2xl"></i>
            Watch Demo
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <i className="ph-light ph-arrow-down text-gray-400 text-2xl"></i>
      </div>
    </section>
  );
};

export default HeroSection;
