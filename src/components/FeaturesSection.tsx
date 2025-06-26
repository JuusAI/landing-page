
const FeaturesSection = () => {
  const features = [
    {
      icon: 'ph-light ph-lightning',
      title: 'Lightning Fast',
      description: 'Process thousands of tasks in seconds with our optimized AI algorithms and cloud infrastructure.'
    },
    {
      icon: 'ph-light ph-shield-check',
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and security protocols to keep your data safe and compliant with regulations.'
    },
    {
      icon: 'ph-light ph-brain',
      title: 'Smart Learning',
      description: 'AI that learns from your patterns and continuously improves its performance and accuracy over time.'
    }
  ];

  return (
    <section id="features" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto scroll-fade">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-6">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl font-light text-white/60 max-w-2xl mx-auto">
            Everything you need to automate, optimize, and scale your business operations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card p-8 text-center hover:bg-white/10 transition-all duration-500 group scroll-fade"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className={`${feature.icon} text-3xl text-white`}></i>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-medium text-white mb-4 tracking-tight">
                {feature.title}
              </h3>
              
              <p className="text-white/60 font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="neuro-button">
            <i className="ph-light ph-star mr-2"></i>
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
