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
      className="md:block hidden panel min-h-[50vh] py-20 px-4 relative futuristic-bg-alt"
    >
      <div ref={titleRef} className="max-w-7xl mx-auto scroll-fade">
        <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start items-center text-center md:text-left my-16">
          <h1 className="text-5xl md:text-3xl lg:text-5xl font-light tracking-tighter mb-8 leading-tight text-gray-900">
            Grow <span className="text-gradient">Smarter and Scale</span>
            <br />
            faster with <span className="text-gradient">AI</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-600 mb-12 mx-auto md:mx-0 md:ml-24 max-w-3xl leading-relaxed">
            We specialize in creating custom workflow automation <br />
            and personalized AI solutions for businesses and individuals <br />
            within 14 days
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="#contact" className="glow-on-hover">
            <i className="ph-light ph-rocket-launch mr-2"></i>
            Get In Touch
          </a>
          <a href="#hero" className="transparent-button">
            {/* <i className="ph-light ph-rocket-launch mr-2"></i> */}
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
