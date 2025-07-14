
import { useState, useEffect } from 'react';
import { ArrowDown, Github, Mail, FileText, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const floatingElements = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className="absolute opacity-20"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${3 + Math.random() * 4}s`,
      }}
    >
      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full animate-pulse"></div>
    </div>
  ));

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Greeting */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 animate-bounce-slow">
            <Sparkles size={16} className="text-yellow-400" />
            <span className="text-sm font-medium">Hello, I'm</span>
          </div>

          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-slide-down">
            <span className="gradient-text">Aishwarya</span>
          </h1>

          {/* Role */}
          <div className="text-xl md:text-2xl text-foreground/80 mb-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <span className="font-mono text-purple-400">&lt;</span>
            B.E (Hons.) Cybersecurity Student & Full Stack Developer
            <span className="font-mono text-purple-400">/&gt;</span>
          </div>

          {/* Description */}
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '1s' }}>
            Highly motivated cybersecurity student with hands-on experience in secure full-stack development, 
            threat detection, vulnerability assessment, and incident response. Eager to contribute to real-world security initiatives.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '1.5s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FileText className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glass border-white/20 hover:border-purple-400/50 group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in" style={{ animationDelay: '2s' }}>
            <a
              href="https://github.com/Aishwarya2701"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:scale-110 transition-all duration-300 hover:glow group"
            >
              <Github size={24} className="group-hover:rotate-12 transition-transform" />
            </a>
            <a
              href="#contact"
              className="p-3 glass rounded-full hover:scale-110 transition-all duration-300 hover:glow group"
            >
              <Mail size={24} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
