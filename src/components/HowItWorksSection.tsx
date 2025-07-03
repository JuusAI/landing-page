import { useGSAP } from "@gsap/react";
import Spline from "@splinetool/react-spline";
import gsap from "gsap";
import { useRef } from "react";

const HowItWorksSection = () => {
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);

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
      icon: "ph-light ph-align-bottom",
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
      className="panel workflow min-h-screen pt-32 px-4 relative futuristic-bg snap-align-none snap-normal snap-none"
    >
      {/* <div className="progress-container relative flex flex-col align-middle text-center">
        <div className="progress-point text-black my-auto" data-step="1">
          1
        </div>
        <i className="ph-light ph-arrow-down text-2xl"></i>
        <div className="progress-point" data-step="2">
          2
        </div>
        <i className="ph-light ph-arrow-down text-2xl"></i>
        <div className="progress-point" data-step="3">
          3
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto scroll-fade">
        <div className="text-center">
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

        <div className="sticky-container">
          <div className="sticky-offset"></div>
          <div className="cards-layout">
            {steps.map((step, index) => (
              <div
                key={step.title}
                ref={(el) => (cardRefs.current[index] = el)}
                className="card glass-card relative group grid grid-cols-2"
                // style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-xl m-10">
                  {/* <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  /> */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div> */}
                  {/* <Spline scene="https://prod.spline.design/a04VHbUmsEqMIi6D/scene.splinecode" /> */}
                </div>

                {/* Content */}
                <div className="flex flex-col m-5 justify-center">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-5">
                    <i className={`${step.icon} text-2xl text-white`}></i>
                  </div>

                  <span className="text-lg font-light text-blue-600 tracking-wider uppercase mb-5">
                    Step {index + 1}
                  </span>

                  <h3 className="text-3xl font-medium text-gray-900 mb-4 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-xl text-gray-600 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for flow */}
                {/* {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-gray-300">
                    <i className="ph-light ph-arrow-right text-2xl"></i>
                  </div>
                )} */}
              </div>
            ))}
            {/* <div className="card">4</div>
            <div className="card">5</div>
            <div className="card">6</div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
