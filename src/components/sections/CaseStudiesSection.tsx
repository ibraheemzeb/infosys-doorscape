import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    client: 'Global Bank Corp',
    industry: 'Financial Services',
    result: '40% increase in digital transactions',
    description: 'Modernized legacy banking infrastructure with cloud-native solutions.',
  },
  {
    id: 2,
    client: 'MedTech Solutions',
    industry: 'Healthcare',
    result: '3M+ patients served annually',
    description: 'Built HIPAA-compliant telemedicine platform from scratch.',
  },
  {
    id: 3,
    client: 'RetailMax',
    industry: 'E-Commerce',
    result: '250% revenue growth in 2 years',
    description: 'Developed AI-powered recommendation engine and inventory system.',
  },
];

const CaseStudiesSection = () => {
  return (
    <section 
      id="cases"
      className="section-panel bg-background flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="mb-16">
          <p className="content-reveal text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Success Stories
          </p>
          <h2 className="content-reveal text-foreground text-4xl md:text-6xl font-heading font-bold mb-6">
            Case Studies
          </h2>
          <p className="content-reveal text-muted-foreground text-lg max-w-xl">
            Real results for real businesses. Discover how we have helped industry leaders achieve their goals.
          </p>
        </div>

        <div className="space-y-6">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="content-reveal group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg cursor-pointer">
                <div className="flex-1 mb-6 md:mb-0">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-primary font-heading font-bold text-lg">
                      {study.client}
                    </span>
                    <span className="text-muted-foreground text-sm px-3 py-1 bg-muted rounded-full">
                      {study.industry}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm max-w-md">
                    {study.description}
                  </p>
                </div>
                
                <div className="flex items-center gap-8">
                  <div className="text-right">
                    <p className="text-2xl font-heading font-bold text-foreground">
                      {study.result}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-border group-hover:border-primary group-hover:bg-primary flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
