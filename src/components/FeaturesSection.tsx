import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const FeaturesSection = () => {
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  const features = [
    {
      icon: "ph-light ph-lightning",
      title: "AI System Integration",
      description:
        "Let us seamlessly integrating AI into your existing enterprise systems to enhance productivity.",
    },
    {
      icon: "ph-light ph-shield-check",
      title: "Enterprise Security",
      description:
        "Bank-grade encryption and security protocols to keep your data safe and compliant with regulations.",
    },
    {
      icon: "ph-light ph-brain",
      title: "AI Workflow Automation",
      description:
        "Streamlining business processes through intelligent automation and AI that learns from your patterns and continuously improves its performance",
    },
  ];

  useGSAP(
    () => {
      gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      if (cardsRef.current.length) {
        gsap.fromTo(
          cardsRef.current,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.3,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="features"
      ref={sectionRef}
      className="panel min-h-screen pt-48 px-4 relative futuristic-bg-alt"
    >
      <div className="max-w-7xl mx-auto scroll-fade">
        <div className="mb-6 text-center md:text-left">
          <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-600 rounded-full text-sm font-light tracking-tight border border-purple-500/30">
            What We Offer
          </span>
        </div>
        <div ref={titleRef} className="md:flex text-center md:text-left mb-20">
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-6 text-gray-900">
            DISCOVER OUR <br />
            <span className="text-gradient">WORK</span>
          </h2>
          <p className="text-xl md:text-2xl font-light text-gray-600 max-w-2xl mx-auto md:mx-0 md:ml-24">
            We have delivered for clients across diverse industries and
            geographies, including those in the European Union, USA, Canada,
            Dubai, Monaco, UK, Germany, and Switzerland.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="glass-card p-8 text-center hover:bg-white/15 group"
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className={`${feature.icon} text-3xl text-white`}></i>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-tight">
                {feature.title}
              </h3>

              <p className="text-gray-600 font-light leading-relaxed">
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
