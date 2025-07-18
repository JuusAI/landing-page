import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  const titleRef = useRef(null);
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const splineRef = useRef(null);

  useGSAP(
    () => {
      const title = titleRef.current;
      const section = sectionRef.current;
      const text = textRef.current;
      // const spline = splineRef.current;

      // gsap.fromTo(
      //   spline,
      //   { y: -550},
      //   {
      //     y: 0,
      //     duration: 1,
      //     ease: "power3.out",
      //     scrollTrigger: {
      //       trigger: section,
      //       start: "top 30%",
      //       toggleActions: "play reverse play reverse",
      //     },
      //   }
      // );

      gsap.fromTo(
        title,
        { y: 80 },
        {
          y: 0,
          opacity: 1,
          visibility: "visible",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        text,
        { opacity: 1 },
        {
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 30%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        "p",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          visibility: "visible",
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="panel min-h-screen flex flex-col items-center justify-center md:items-start relative overflow-hidden px-4 futuristic-bg z-0"
    >
      {/* Content */}
      <div ref={textRef}>
        <div className="hidden md:block md:absolute text-xl md:left-16 md:top-[20%] font-light text-gray-600">
          We empower enterprises across the globe to <br />
          harness the power of AI, delivering tangible results, <br />
          from reduced costs to increased efficiency.
        </div>
        <div className="md:hidden absolute text-xl left-3 mx-3 top-[20%] font-light text-gray-600">
          We empower enterprises across the globe to harness the power of AI,
          delivering tangible results, from reduced costs to increased
          efficiency.
        </div>
      </div>
      <div
        ref={titleRef}
        className="invisible relative z-10 text-left md:mx-16 mx-3 max-w-6xl animate-fade-in-up"
      >
        <div className="mb-6 text-center md:text-left">
          <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-600 rounded-full text-sm font-light tracking-tight border border-blue-500/30">
            AI Automation Platform
          </span>
        </div>
        <h1 className="md:block hidden text-3xl md:text-5xl lg:text-6xl font-light tracking-tighter mb-8 leading-tight text-gray-900">
          WE'RE A FULL SERVICE <br />
          <span className="text-gradient">AI AUTOMATION </span>COMPANY
        </h1>

        {/* Mobile Title */}
        <h1 className="md:hidden text-3xl lg:text-6xl font-light tracking-tighter mb-12 leading-tight text-gray-900 text-center">
          WE'RE A FULL SERVICE <br />
          <span className="text-gradient">AI AUTOMATION </span>COMPANY
        </h1>

        <p className="text-xl md:text-2xl font-light text-gray-600 mb-12 max-w-3xl text-center md:text-left">
          Let us help you optimize <br /> your{" "}
          <span className="text-highlight">
            operations
            <span className="underline shadow-[0_0_3px] bg-blue-600 shadow-blue-600" />
          </span>
          , boost{" "}
          <span className="text-highlight">
            productivity
            <span className="underline shadow-[0_0_3px] bg-blue-600 shadow-blue-600" />
          </span>
          ,
          <br /> and{" "}
          <span className="text-highlight">
            surpass competitors
            <span className="underline shadow-[0_0_3px] bg-blue-600 shadow-blue-600" />
          </span>{" "}
          with <br />
          intelligent AI tools
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <i className="ph-light ph-arrow-down text-gray-400 text-2xl"></i>
      </div>
    </section>
  );
};

export default HeroSection;
