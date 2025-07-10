import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import MissionSection from "@/components/MissionSection";
import ContactSection from "@/components/ContactSection";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Spline from "@splinetool/react-spline";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useGSAP(() => {
    const panels = gsap.utils.toArray<HTMLElement>(".panel");

    panels.forEach((panel, i) => {
      if (panel.classList.contains("workflow")) {
        gsap.set(".card", {
          transformStyle: "preserve-3d",
          transformPerspective: 1920,
          transformOrigin: "center top",
          y: (index) => {
            return 30 * index;
          },
        });

        gsap.set(".card", {
          transformStyle: "preserve-3d",
          // transformPerspective: 1920,
          transformOrigin: "center top",
          y: (index) => {
            return 30 * index;
          },
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".workflow",
            pin: true,
            scrub: 1,
            start: "top top",
            end: "+=2000",
          },
        });
        const cards = document.querySelectorAll(".card");
        const stagger = 1;
        const scaleMax = gsap.utils.mapRange(1, cards.length - 1, 0.8, 1);

        tl.from(".card", {
          scale: 1,
          y: () => window.innerHeight,
          stagger: {
            each: 1,
          },
          duration: 1,
        });

        tl.to(
          ".card",
          {
            rotationX: -20,
            scale: (index) => {
              return scaleMax(index);
            },
            stagger: {
              each: stagger,
            },
          },
          stagger
        );
      } else {
        ScrollTrigger.create({
          trigger: panel,
          start: () =>
            panel.offsetHeight < window.innerHeight
              ? "top top"
              : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
          // pin: true,
          // pinSpacing: false,
        });
      }
    });

    gsap.utils.toArray<HTMLElement>(".text-highlight").forEach((highlight) => {
      const underline = highlight.querySelector(".underline");

      gsap.fromTo(
        underline,
        { scaleX: 0, transformOrigin: "left" },
        {
          scaleX: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: highlight,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  });

  useEffect(() => {
    // const handleScroll = () => {
    // Animate elements on scroll
    // const elements = document.querySelectorAll(".scroll-fade");
    // elements.forEach((element) => {
    //   const rect = element.getBoundingClientRect();
    //   const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

    //   if (isVisible) {
    //     element.classList.add("visible");
    //   }
    // });

    const sections = ["featured", "hero", "features", "workflow", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            setActiveSection(id!);
            console.log(id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();

    // window.addEventListener("scroll", handleScroll);
    // handleScroll(); // Initial check

    // return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} />

      <main className="relative bg-slate-500">
        <FeaturedSection />
        <Spline
          className="md:block hidden fixed inset-0 z-[1]"
          scene="https://prod.spline.design/ozCkMCdN32fKu7UE/scene.splinecode"
        />
        <Spline
          className="md:hidden fixed inset-0 z-[1]"
          scene="https://prod.spline.design/4xbiRSumaxpFUzf2/scene.splinecode"
        />
        <HeroSection />
        {/* <TestimonialsSection /> */}
        <FeaturesSection />
        <HowItWorksSection />
        {/* <MissionSection /> */}
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
