import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const FeaturesSection = () => {
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);

  const features = [
    {
      icon: "ph-light ph-lightning",
      title: "Lightning Fast",
      description:
        "Process thousands of tasks in seconds with our optimized AI algorithms and cloud infrastructure.",
    },
    {
      icon: "ph-light ph-shield-check",
      title: "Enterprise Security",
      description:
        "Bank-grade encryption and security protocols to keep your data safe and compliant with regulations.",
    },
    {
      icon: "ph-light ph-brain",
      title: "Smart Learning",
      description:
        "AI that learns from your patterns and continuously improves its performance and accuracy over time.",
    },
  ];

  useGSAP(() => {
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
  });

  return (
    <section
      id="features"
      ref={sectionRef}
      className="panel min-h-screen py-48 px-4 relative futuristic-bg"
    >
      <div className="max-w-7xl mx-auto scroll-fade">
        <div className="mb-6 text-center md:text-left">
          <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-600 rounded-full text-sm font-light tracking-tight border border-purple-500/30">
            What We Offer
          </span>
        </div>
        <div className="md:flex text-center md:text-left mb-20">
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-6 text-gray-900">
            DISCOVER OUR <br />
            <span className="text-gradient">SERVICES</span>
          </h2>
          <p className="text-xl font-light text-gray-600 max-w-2xl mx-auto md:mx-0 md:ml-24">
            We deliver complete AI automation <br /> services under one roof.
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
