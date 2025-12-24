import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'FinTech Platform',
    category: 'Web Application',
    description: 'Complete digital banking solution with real-time transactions',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format',
  },
  {
    id: 2,
    title: 'Healthcare App',
    category: 'Mobile Application',
    description: 'Patient management system with telemedicine capabilities',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&auto=format',
  },
  {
    id: 3,
    title: 'E-Commerce Suite',
    category: 'Full Stack',
    description: 'Scalable marketplace with AI-powered recommendations',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format',
  },
  {
    id: 4,
    title: 'IoT Dashboard',
    category: 'Data Visualization',
    description: 'Real-time monitoring for smart manufacturing',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format',
  },
];

const PortfolioSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section 
      id="portfolio"
      className="section-panel bg-secondary flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="content-reveal text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Our Work
            </p>
            <h2 className="content-reveal text-foreground text-4xl md:text-6xl font-heading font-bold">
              Featured Projects
            </h2>
          </div>
          <p className="content-reveal text-muted-foreground text-lg max-w-md">
            A selection of our most impactful digital solutions delivered to clients worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="content-reveal group relative overflow-hidden rounded-2xl bg-card aspect-[4/3] cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-primary-foreground/70 text-sm font-medium tracking-wide uppercase mb-2">
                  {project.category}
                </p>
                <h3 className="text-primary-foreground text-2xl font-heading font-semibold mb-2">
                  {project.title}
                </h3>
                <p className={`text-primary-foreground/80 text-sm transition-all duration-300 ${
                  hoveredId === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  {project.description}
                </p>
              </div>

              <div className={`absolute top-6 right-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center transition-all duration-300 ${
                hoveredId === project.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}>
                <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
