import { Code, Smartphone, Cloud, Database, Shield, Zap } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Tailored solutions built from the ground up to meet your unique business requirements.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud architecture and migration services for modern enterprises.',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Transform raw data into actionable insights with our data pipeline solutions.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Protect your digital assets with enterprise-grade security solutions.',
  },
  {
    icon: Zap,
    title: 'AI Integration',
    description: 'Leverage artificial intelligence to automate and optimize your operations.',
  },
];

const ServicesSection = () => {
  return (
    <section 
      id="services"
      className="section-panel bg-background flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="mb-16">
          <p className="content-reveal text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            What We Do
          </p>
          <h2 className="content-reveal text-foreground text-4xl md:text-6xl font-heading font-bold mb-6">
            Our Services
          </h2>
          <p className="content-reveal text-muted-foreground text-lg max-w-xl">
            Comprehensive technology solutions designed to accelerate your digital transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="content-reveal group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-foreground text-xl font-heading font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
