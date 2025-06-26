
import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechFlow',
      company: 'TechFlow Inc.',
      testimonial: 'Juus AI transformed our entire workflow. The automation capabilities are incredible and the setup was surprisingly simple.',
      result: '300% increase in productivity',
      avatar: 'SC'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Founder',
      company: 'InvestPro',
      testimonial: 'The trading automation feature alone has revolutionized how we handle investments. Consistent returns without the stress.',
      result: '45% better ROI',
      avatar: 'MR'
    },
    {
      name: 'Emily Watson',
      role: 'Operations Director',
      company: 'CloudSync',
      testimonial: 'Our AI assistant handles 80% of customer inquiries now. Our team can focus on strategic initiatives instead of repetitive tasks.',
      result: '80% task automation',
      avatar: 'EW'
    },
    {
      name: 'David Kim',
      role: 'CTO',
      company: 'DataDriven',
      testimonial: 'The level of customization and intelligence in Juus AI is unmatched. It adapts to our unique business needs perfectly.',
      result: '60% cost reduction',
      avatar: 'DK'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-32 px-4 relative futuristic-bg section-stack section-overlap">
      <div className="max-w-7xl mx-auto scroll-fade">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-6 text-gray-900">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-xl font-light text-gray-600 max-w-2xl mx-auto">
            See how businesses are transforming with Juus AI automation
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <i className="ph-light ph-quotes text-6xl text-blue-400"></i>
            </div>

            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-lg mr-6">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-1">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-gray-600 font-light">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>

              <blockquote className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed mb-8">
                "{testimonials[currentIndex].testimonial}"
              </blockquote>

              <div className="inline-block px-6 py-3 bg-green-500/20 text-green-600 rounded-full border border-green-500/30">
                <i className="ph-light ph-trend-up mr-2"></i>
                {testimonials[currentIndex].result}
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-500 scale-125' 
                    : 'bg-gray-400 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
