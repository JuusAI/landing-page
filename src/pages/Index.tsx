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

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const containerRef = useRef();

  useGSAP(() => {
    const panels = gsap.utils.toArray<HTMLElement>(".panel");

    panels.forEach(
      (panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: () =>
            panel.offsetHeight < window.innerHeight
              ? "top top"
              : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
          pin: true,
          pinSpacing: false,
        });
      },
      {
        scope: containerRef,
      }
    );
  });

  useEffect(() => {
    const handleScroll = () => {
      // Animate elements on scroll
      const elements = document.querySelectorAll(".scroll-fade");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
          element.classList.add("visible");
        }
      });

      const sections = ["featured", "hero", "features", "contact"];
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute("id");
              setActiveSection(id!);
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
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} />

      <main className="relative bg-slate-500">
        <FeaturedSection />
        <HeroSection />
        {/* <TestimonialsSection /> */}
        {/* <HowItWorksSection /> */}
        <FeaturesSection />
        {/* <MissionSection /> */}
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
