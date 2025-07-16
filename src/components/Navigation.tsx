
import { useState, useEffect } from 'react';
import { Menu, X, Github, Mail, FileText, Download } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass-dark py-2' : 'py-4'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <a href="#hero" className="text-2xl font-bold gradient-text hover:scale-105 transition-transform">
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <div className="flex items-center space-x-4 ml-6">
              <a
                href="https://github.com/Aishwarya2701"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass rounded-full hover:scale-110 transition-transform"
              >
                <Github size={20} />
              </a>
              <a
                href="#contact"
                className="p-2 glass rounded-full hover:scale-110 transition-transform"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1jP97m8H-62vtzo5Z4jMRsdc5Fzm5SZd0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass rounded-full hover:scale-110 transition-transform"
                title="Download Resume"
              >
                <Download size={20} />
              </a>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 glass rounded-lg"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 glass-dark rounded-lg p-4 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-foreground/80 hover:text-foreground transition-colors border-b border-white/10 last:border-b-0"
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-white/10">
              <a
                href="https://github.com/Aishwarya2701"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass rounded-full hover:scale-110 transition-transform"
              >
                <Github size={20} />
              </a>
              <a
                href="#contact"
                className="p-2 glass rounded-full hover:scale-110 transition-transform"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1jP97m8H-62vtzo5Z4jMRsdc5Fzm5SZd0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass rounded-full hover:scale-110 transition-transform"
                title="Download Resume"
              >
                <Download size={20} />
              </a>
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
