import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import infosysLogo from '@/assets/infosys-logo.jpeg';

gsap.registerPlugin(ScrollTrigger);

interface DoorRevealProps {
  onComplete?: () => void;
}

const DoorReveal = ({ onComplete }: DoorRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftDoorRef = useRef<HTMLDivElement>(null);
  const rightDoorRef = useRef<HTMLDivElement>(null);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const leftDoor = leftDoorRef.current;
    const rightDoor = rightDoorRef.current;

    if (!container || !leftDoor || !rightDoor) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '+=100%',
        scrub: 1,
        pin: true,
        onLeave: () => {
          setIsComplete(true);
          onComplete?.();
        },
      },
    });

    tl.to(leftDoor, {
      rotateY: -105,
      duration: 1,
      ease: 'power2.inOut',
    }, 0);

    tl.to(rightDoor, {
      rotateY: 105,
      duration: 1,
      ease: 'power2.inOut',
    }, 0);

    tl.to('.door-handle-left', {
      opacity: 0,
      duration: 0.3,
    }, 0);

    tl.to('.door-handle-right', {
      opacity: 0,
      duration: 0.3,
    }, 0);

    tl.to('.door-logo', {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
    }, 0);

    tl.to('.scroll-indicator', {
      opacity: 0,
      y: 20,
      duration: 0.3,
    }, 0);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="relative w-screen h-screen overflow-hidden perspective-1000 bg-hero"
    >
      {/* Background content preview */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <p className="text-hero-foreground/40 text-xl font-heading tracking-widest uppercase">
            Welcome to
          </p>
          <h1 className="text-hero-foreground text-6xl md:text-8xl font-heading font-bold mt-4">
            Infosys
          </h1>
          <p className="text-hero-foreground/60 text-lg mt-4 font-body">
            Driven by Expertise
          </p>
        </div>
      </div>

      {/* Door container */}
      <div className="absolute inset-0 flex preserve-3d">
        {/* Left Door */}
        <div
          ref={leftDoorRef}
          className="w-1/2 h-full origin-left preserve-3d backface-hidden"
          style={{ 
            background: 'linear-gradient(135deg, hsl(220, 20%, 12%) 0%, hsl(220, 25%, 8%) 100%)',
            boxShadow: 'inset -20px 0 60px rgba(0,0,0,0.5)',
          }}
        >
          {/* Door panel details */}
          <div className="absolute inset-4 border border-hero-foreground/10 rounded-sm" />
          <div className="absolute inset-8 border border-hero-foreground/5 rounded-sm" />
          
          {/* Door handle */}
          <div className="door-handle-left absolute right-8 top-1/2 -translate-y-1/2">
            <div className="w-3 h-24 bg-gradient-to-b from-hero-foreground/30 to-hero-foreground/10 rounded-full" />
          </div>
        </div>

        {/* Right Door */}
        <div
          ref={rightDoorRef}
          className="w-1/2 h-full origin-right preserve-3d backface-hidden"
          style={{ 
            background: 'linear-gradient(225deg, hsl(220, 20%, 12%) 0%, hsl(220, 25%, 8%) 100%)',
            boxShadow: 'inset 20px 0 60px rgba(0,0,0,0.5)',
          }}
        >
          {/* Door panel details */}
          <div className="absolute inset-4 border border-hero-foreground/10 rounded-sm" />
          <div className="absolute inset-8 border border-hero-foreground/5 rounded-sm" />
          
          {/* Door handle */}
          <div className="door-handle-right absolute left-8 top-1/2 -translate-y-1/2">
            <div className="w-3 h-24 bg-gradient-to-b from-hero-foreground/30 to-hero-foreground/10 rounded-full" />
          </div>
        </div>
      </div>

      {/* Center logo overlay */}
      <div className="door-logo absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-2xl overflow-hidden bg-card shadow-lg mb-6">
            <img 
              src={infosysLogo} 
              alt="Infosys" 
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-hero-foreground/80 text-sm font-heading tracking-[0.3em] uppercase">
            Scroll to Enter
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <div className="w-6 h-10 border-2 border-hero-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default DoorReveal;
