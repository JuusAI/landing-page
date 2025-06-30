import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const HowItWorksSection = () => {
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);

  // useGSAP(() => {
  //   cardRefs.current.forEach((card, index) => {
  //     // const tl = gsap.timeline({
  //     //   // paused: true,
  //     //   scrollTrigger: {
  //     //     trigger: sectionRef.current,
  //     //     start: "top top",
  //     //     end: "+=100%",
  //     //     scrub: 1,
  //     //     pin: true,
  //     //     markers: false, // Enable for debugging
  //     //   },
  //     // });

  //     gsap.to(card, {
  //       scale: 4,
  //       duration: 5,
  //     });

  //     gsap.to(card, {
  //       scale: 1,
  //       delay: 5,
  //       duration: 5,
  //     });
  //     // tl.to(card.querySelector(".glass-card"), {
  //     //   scale: 1.1,
  //     //   y: 0,
  //     //   boxShadow: "0 10px 50px rgba(0, 0, 0, 0.3)",
  //     //   duration: 1,
  //     //   ease: "power2.out",
  //     // });
  //   });
  // });

  const steps = [
    {
      icon: "ph-light ph-gear-six",
      title: "Automation",
      description:
        "Set up intelligent automation workflows that handle repetitive tasks, freeing up your time for strategic decisions.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop&crop=center",
    },
    {
      icon: "ph-light ph-robot",
      title: "AI Assistant Setup",
      description:
        "Configure your personal AI assistant with custom knowledge and capabilities tailored to your business needs.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center",
    },
    {
      icon: "ph-light ph-trending-up",
      title: "Automate Trading",
      description:
        "Deploy sophisticated trading algorithms that make data-driven decisions and optimize your investment portfolio.",
      image:
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop&crop=center",
    },
  ];

  return (
    <section
      id="workflow"
      ref={sectionRef}
      className="panel min-h-screen pt-32 px-4 relative futuristic-bg"
    >
      <div className="max-w-7xl mx-auto scroll-fade">
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-600 rounded-full text-sm font-light tracking-tight border border-yellow-500/30">
              What We Do
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-6 text-gray-900">
            Our <span className="text-gradient">Workflow</span>
          </h2>
          <p className="text-xl font-light text-gray-600 max-w-2xl mx-auto">
            Three simple steps to revolutionize your business with AI automation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              ref={(el) => (cardRefs.current[index] = el)}
              className="glass-card relative p-8 hover:bg-white/15 transition-all duration-500 group scroll-fade"
              // style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className={`${step.icon} text-2xl text-white`}></i>
              </div>

              {/* Content */}
              <div className="mb-4">
                <span className="text-sm font-light text-blue-600 tracking-wider uppercase">
                  Step {index + 1}
                </span>
              </div>

              <h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-tight">
                {step.title}
              </h3>

              <p className="text-gray-600 font-light leading-relaxed">
                {step.description}
              </p>

              {/* Arrow for flow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-gray-300">
                  <i className="ph-light ph-arrow-right text-2xl"></i>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
