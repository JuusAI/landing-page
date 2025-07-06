import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const FeaturedSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const title = titleRef.current;

    gsap.fromTo(
      title,
      { y: 300 },
      {
        y: -150,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom", // when section top hits bottom of viewport
          end: "bottom top 50%", // until section bottom hits top of viewport
          scrub: true, // enables parallax effect synced to scroll
        },
      }
    );
  });

  return (
    <section
      id="featured"
      ref={sectionRef}
      className="relative md:h-[50vh] h-[60vh] md:py-20 py-1 px-4 futuristic-bg-alt z-10"
    >
      <div ref={titleRef} className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start items-center text-center md:text-left md:mt-16 mt-10 mb-3 md:mb-12">
          <h1 className="md:block hidden text-5xl md:text-3xl lg:text-5xl font-light tracking-tighter md:mb-8 leading-tight text-gray-900">
            Grow <span className="text-gradient">Smarter and Scale</span>
            <br />
            Faster with <span className="text-gradient">AI</span>
          </h1>
          <h1 className="md:hidden text-5xl md:text-3xl lg:text-5xl font-light tracking-tighter md:mb-8 leading-tight text-gray-900">
            Grow <span className="text-gradient">Smarter </span>
            <br />
            and Scale <span className="text-gradient">Faster</span> with
            <span className="text-gradient"> AI</span>
          </h1>
          <p className="md:block hidden md:text-2xl font-light text-gray-600 md:mb-12 mx-auto md:mx-0 md:ml-24 max-w-3xl leading-relaxed">
            We specialize in creating custom workflow automation <br />
            and personalized AI solutions for businesses and individuals <br />
            within 14 days
          </p>
          <p className="md:hidden text-xl font-light text-gray-600 mx-auto max-w-3xl leading-relaxed mb-3">
            We specialize in creating custom workflow automation and
            personalized AI solutions for businesses and individuals within 14
            days
          </p>
        </div>

        <div className="flex flex-row gap-6 justify-center items-center">
          <a href="#contact" className="glow-on-hover">
            <i className="ph-light ph-rocket-launch mr-2"></i>
            Get In Touch
          </a>
          <a href="#hero" className="transparent-button hidden sm:block">
            {/* <i className="ph-light ph-rocket-launch mr-2"></i> */}
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
