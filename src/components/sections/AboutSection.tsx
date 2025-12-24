import infosysLogo from '@/assets/infosys-logo.jpeg';

const stats = [
  { value: '2012', label: 'Founded' },
  { value: '200+', label: 'Team Members' },
  { value: '35', label: 'Countries Served' },
  { value: '500M+', label: 'Users Impacted' },
];

const AboutSection = () => {
  return (
    <section 
      id="about"
      className="section-panel bg-hero flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="content-reveal text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              About Us
            </p>
            <h2 className="content-reveal text-hero-foreground text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
              Driven by Innovation,
              <span className="block">Powered by Expertise</span>
            </h2>
            <p className="content-reveal text-hero-foreground/70 text-lg leading-relaxed mb-6">
              At Infosys, we believe in the transformative power of technology. 
              For over a decade, we have been at the forefront of digital innovation, 
              helping businesses navigate the complexities of the modern tech landscape.
            </p>
            <p className="content-reveal text-hero-foreground/70 text-lg leading-relaxed mb-8">
              Our team of passionate engineers, designers, and strategists work 
              collaboratively to deliver solutions that not only meet but exceed expectations.
            </p>

            <div className="content-reveal grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-hero-foreground/10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-heading font-bold text-primary">{stat.value}</p>
                  <p className="text-hero-foreground/50 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="content-reveal relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-3xl" />
            <div className="relative bg-hero-foreground/5 backdrop-blur-sm rounded-3xl p-12 border border-hero-foreground/10">
              <img 
                src={infosysLogo}
                alt="Infosys"
                className="w-48 h-48 object-contain mx-auto mb-8"
              />
              <blockquote className="text-center">
                <p className="text-hero-foreground text-xl font-heading italic leading-relaxed mb-4">
                  "Technology is best when it brings people together."
                </p>
                <footer className="text-hero-foreground/50 text-sm">
                  Our Core Philosophy
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
