import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="hero"
      className="section-panel bg-hero flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="content-reveal text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-6">
          Software Development Excellence
        </p>
        
        <h1 className="content-reveal text-hero-foreground text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[1.1] mb-8">
          We Build Digital
          <span className="block text-gradient bg-gradient-to-r from-primary to-accent">
            Experiences
          </span>
        </h1>
        
        <p className="content-reveal text-hero-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-body leading-relaxed">
          Transform your vision into reality with cutting-edge technology solutions. 
          We craft scalable, innovative software that drives business growth.
        </p>
        
        <div className="content-reveal flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="xl">
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="heroOutline" size="xl">
            View Our Work
          </Button>
        </div>

        {/* Stats */}
        <div className="content-reveal grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-hero-foreground/10">
          <div>
            <p className="text-4xl md:text-5xl font-heading font-bold text-hero-foreground">150+</p>
            <p className="text-hero-foreground/50 text-sm mt-2">Projects Delivered</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-heading font-bold text-hero-foreground">98%</p>
            <p className="text-hero-foreground/50 text-sm mt-2">Client Satisfaction</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-heading font-bold text-hero-foreground">12+</p>
            <p className="text-hero-foreground/50 text-sm mt-2">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
