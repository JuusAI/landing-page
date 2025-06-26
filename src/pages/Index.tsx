
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedSection from '@/components/FeaturedSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FeaturesSection from '@/components/FeaturesSection';
import MissionSection from '@/components/MissionSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Animate elements on scroll
      const elements = document.querySelectorAll('.scroll-fade');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900">
      <Navigation />
      
      <main className="relative">
        <HeroSection scrollY={scrollY} />
        <FeaturedSection />
        <TestimonialsSection />
        <HowItWorksSection />
        <FeaturesSection />
        <MissionSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
