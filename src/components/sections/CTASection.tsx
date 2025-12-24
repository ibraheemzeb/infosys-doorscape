import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const CTASection = () => {
  return (
    <section 
      id="contact"
      className="section-panel bg-hero flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="content-reveal text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Get Started
            </p>
            <h2 className="content-reveal text-hero-foreground text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight">
              Ready to Transform
              <span className="block">Your Business?</span>
            </h2>
            <p className="content-reveal text-hero-foreground/70 text-lg leading-relaxed mb-10">
              Let us discuss how our expertise can help you achieve your digital goals. 
              Schedule a free consultation with our team.
            </p>
            
            <div className="content-reveal flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                View Pricing
              </Button>
            </div>
          </div>

          <div className="content-reveal space-y-6">
            <div className="p-6 rounded-2xl bg-hero-foreground/5 border border-hero-foreground/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-hero-foreground font-semibold mb-1">Email Us</p>
                  <p className="text-hero-foreground/60 text-sm">hello@infosys.co</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-hero-foreground/5 border border-hero-foreground/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-hero-foreground font-semibold mb-1">Call Us</p>
                  <p className="text-hero-foreground/60 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-hero-foreground/5 border border-hero-foreground/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-hero-foreground font-semibold mb-1">Visit Us</p>
                  <p className="text-hero-foreground/60 text-sm">123 Innovation Drive, Tech City, TC 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="content-reveal mt-20 pt-10 border-t border-hero-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-hero-foreground/50 text-sm">
              2024 Infosys.co. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-hero-foreground/50 text-sm hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-hero-foreground/50 text-sm hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
