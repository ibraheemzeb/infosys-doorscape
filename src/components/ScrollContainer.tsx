import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollContainerProps {
  children: ReactNode;
}

const ScrollContainer = ({ children }: ScrollContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const panels = panelsRef.current;
    
    if (!container || !panels) return;

    const sections = gsap.utils.toArray<HTMLElement>('.section-panel');
    
    // Horizontal scroll
    const scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => '+=' + panels.offsetWidth,
      },
    });

    // Animate content within each section
    sections.forEach((section, index) => {
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
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: 'left center',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <div ref={panelsRef} className="flex">
        {children}
      </div>
    </div>
  );
};

export default ScrollContainer;
