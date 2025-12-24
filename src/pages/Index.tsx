import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '@/components/Header';
import DoorReveal from '@/components/DoorReveal';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import AboutSection from '@/components/sections/AboutSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import CTASection from '@/components/sections/CTASection';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panels = panelsRef.current;
    if (!panels) return;

    const sections = gsap.utils.toArray<HTMLElement>('.section-panel');
    
    // Create horizontal scroll
    const scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: panels,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (sections.length - 1),
          duration: { min: 0.2, max: 0.6 },
          ease: 'power1.inOut',
        },
        end: () => '+=' + (panels.offsetWidth - window.innerWidth),
      },
    });

    // Animate content within each section
    sections.forEach((section) => {
      const content = section.querySelectorAll('.content-reveal');
      
      gsap.fromTo(
        content,
        { 
          opacity: 0, 
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: 'left 80%',
            end: 'left 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Header variant="dark" />
      
      {/* Door reveal intro */}
      <DoorReveal />
      
      {/* Horizontal scroll sections */}
      <div ref={containerRef} className="relative">
        <div 
          ref={panelsRef} 
          className="flex"
          style={{ width: `${6 * 100}vw` }}
        >
          <HeroSection />
          <ServicesSection />
          <PortfolioSection />
          <AboutSection />
          <CaseStudiesSection />
          <CTASection />
        </div>
      </div>
    </div>
  );
};

export default Index;
