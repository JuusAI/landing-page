import { useGSAP } from "@gsap/react";
import Spline from "@splinetool/react-spline";
import gsap from "gsap";
import { useRef } from "react";

const HowItWorksSection = () => {
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);

  const steps = [
    {
      icon: [
        "ph-light ph-open-ai-logo",
        "ph-light ph-microsoft-excel-logo",
        "ph-light ph-globe",
        "ph-light ph-download",
        "ph-light ph-cloud",
      ],
      title: "Real Estate Intelligence Tracker with Bright Data & OpenAI",
      description:
        "The Real Estate Intelligence Tracker is a powerful automated workflow designed for real estate analysts, investors, proptech startups, and market researchers who need to collect and analyze structured data from real estate listings across the web at scale.",
      image: "../../public/workflow1.png",
    },
    {
      icon: [
        "ph-light ph-robot",
        "ph-light ph-facebook-logo",
        "ph-light ph-twitter-logo",
        "ph-light ph-linkedin-logo",
        "ph-light ph-timer",
      ],
      title: "Social Media Automation",
      description:
        "This workflow simplifies social media management by automating content scheduling, engagement tracking, analytics reporting, and cross-platform posting. This not only saves time but also ensures a more effective social media strategy",
      image: "../../public/workflow2.png",
    },
    {
      icon: [
        "ph-light ph-align-bottom",
        "ph-light ph-shuffle",
        "ph-light ph-cloud-check",
        "ph-light ph-check-fat",
        "ph-light ph-gauge",
      ],
      title: "Customer Data Synchronization",
      description:
        "This workflow manages customer data across multiple platforms, such as a CRM, a customer support system, and a central database, keeping everything updated manually is time-consuming and error-prone.",
      image: "../../public/workflow3.png",
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
            Our workflows to revolutionize your business with AI automation
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
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div> */}
                  {/* <Spline scene="https://prod.spline.design/a04VHbUmsEqMIi6D/scene.splinecode" /> */}
                </div>

                {/* Content */}
                <div className="flex flex-col m-5 justify-center">
                  {/* Icon */}
                  <span className="text-lg font-light text-blue-600 tracking-wider uppercase mb-5">
                    Workflow {index + 1}
                  </span>

                  <h3 className="text-3xl font-medium text-gray-900 mb-4 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-xl text-gray-600 font-light leading-relaxed mb-5">
                    {step.description}
                  </p>

                  <div className="flex gap-3">
                    {step.icon.map((icon) => (
                      <div
                        key={icon}
                        className="w-16 h-16 rounded-2xl flex items-center justify-center border"
                      >
                        <i className={`${icon} text-2xl text-black`}></i>
                      </div>
                    ))}
                  </div>
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
