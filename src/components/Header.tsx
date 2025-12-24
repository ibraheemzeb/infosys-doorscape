import { Link } from 'react-router-dom';
import infosysLogo from '@/assets/infosys-logo.jpeg';

interface HeaderProps {
  variant?: 'light' | 'dark';
}

const Header = ({ variant = 'dark' }: HeaderProps) => {
  const isLight = variant === 'light';
  
  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Case Studies', href: '#cases' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src={infosysLogo} 
            alt="Infosys" 
            className="w-10 h-10 object-contain"
          />
          <span className={`font-heading font-semibold text-lg ${
            isLight ? 'text-foreground' : 'text-hero-foreground'
          }`}>
            infosys.co
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                isLight 
                  ? 'text-foreground/70 hover:text-primary' 
                  : 'text-hero-foreground/70 hover:text-hero-foreground'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className={`hidden md:inline-flex text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 ${
            isLight
              ? 'bg-primary text-primary-foreground hover:shadow-glow'
              : 'bg-hero-foreground/10 text-hero-foreground border border-hero-foreground/20 hover:bg-hero-foreground/20'
          }`}
        >
          Get in Touch
        </a>
      </nav>
    </header>
  );
};

export default Header;
