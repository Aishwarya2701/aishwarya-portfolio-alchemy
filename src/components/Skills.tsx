
import { useState, useEffect, useRef } from 'react';
import { Code, Database, Shield, Palette, Server, Smartphone, Brain, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<{[key: string]: number}>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: 'Technical Skills',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'ReactJS', level: 85 },
        { name: 'NodeJS', level: 80 },
        { name: 'MongoDB', level: 78 }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      skills: [
        { name: 'Cyber Forensics', level: 85 },
        { name: 'GRC', level: 80 },
        { name: 'Risk Assessment', level: 82 },
        { name: 'Linux', level: 88 }
      ]
    },
    {
      title: 'Database & Tools',
      icon: Database,
      color: 'from-purple-500 to-violet-500',
      skills: [
        { name: 'SQL', level: 82 },
        { name: 'MongoDB', level: 78 },
        { name: 'Blockchain', level: 75 },
        { name: 'Git', level: 85 }
      ]
    },
    {
      title: 'Soft Skills',
      icon: Brain,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Analytical Thinking', level: 90 },
        { name: 'Attention to Detail', level: 88 },
        { name: 'Team Collaboration', level: 85 },
        { name: 'Problem Solving', level: 92 }
      ]
    }
  ];

  const tools = [
    // Programming Languages
    { name: 'Python', icon: '🐍', category: 'Languages' },
    { name: 'JavaScript', icon: '🟨', category: 'Languages' },
    { name: 'TypeScript', icon: '🔷', category: 'Languages' },
    { name: 'Java', icon: '☕', category: 'Languages' },
    { name: 'C++', icon: '⚡', category: 'Languages' },
    { name: 'Solidity', icon: '💎', category: 'Languages' },
    
    // Frontend Technologies
    { name: 'React', icon: '⚛️', category: 'Frontend' },
    { name: 'Next.js', icon: '🚀', category: 'Frontend' },
    { name: 'Vue.js', icon: '💚', category: 'Frontend' },
    { name: 'HTML5', icon: '🌐', category: 'Frontend' },
    { name: 'CSS3', icon: '🎨', category: 'Frontend' },
    { name: 'Tailwind', icon: '💨', category: 'Frontend' },
    
    // Backend Technologies
    { name: 'Node.js', icon: '🟢', category: 'Backend' },
    { name: 'Express.js', icon: '🚂', category: 'Backend' },
    { name: 'Django', icon: '🎯', category: 'Backend' },
    { name: 'Flask', icon: '🌶️', category: 'Backend' },
    { name: 'FastAPI', icon: '⚡', category: 'Backend' },
    
    // Databases
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
    { name: 'MySQL', icon: '🗄️', category: 'Database' },
    { name: 'Redis', icon: '🔴', category: 'Database' },
    
    // DevOps & Tools
    { name: 'Docker', icon: '🐳', category: 'DevOps' },
    { name: 'Kubernetes', icon: '☸️', category: 'DevOps' },
    { name: 'AWS', icon: '☁️', category: 'DevOps' },
    { name: 'Git', icon: '📚', category: 'DevOps' },
    { name: 'Linux', icon: '🐧', category: 'DevOps' },
    { name: 'Nginx', icon: '🌐', category: 'DevOps' },
    
    // Security Tools
    { name: 'Burp Suite', icon: '🔍', category: 'Security' },
    { name: 'Wireshark', icon: '📡', category: 'Security' },
    { name: 'Metasploit', icon: '💥', category: 'Security' },
    { name: 'Nmap', icon: '🗺️', category: 'Security' },
    { name: 'OWASP ZAP', icon: '⚡', category: 'Security' },
    { name: 'Kali Linux', icon: '🦴', category: 'Security' },
    
    // Development Tools
    { name: 'VS Code', icon: '🔧', category: 'Tools' },
    { name: 'Postman', icon: '📮', category: 'Tools' },
    { name: 'Figma', icon: '🎨', category: 'Tools' },
    { name: 'Jira', icon: '📋', category: 'Tools' },
    { name: 'Slack', icon: '💬', category: 'Tools' },
    
    // Emerging Tech
    { name: 'Blockchain', icon: '⛓️', category: 'Emerging' },
    { name: 'Web3', icon: '🌐', category: 'Emerging' },
    { name: 'IoT', icon: '📡', category: 'Emerging' },
    { name: 'AI/ML', icon: '🤖', category: 'Emerging' }
  ];

  const certifications = [
    {
      title: 'Cisco Certified Ethical Hacker',
      issuer: 'Cisco',
      year: '2024',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'TryHackMe - Top 5%',
      issuer: 'TryHackMe Platform',
      year: '2024',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Hackathon 3.0 - Top 10 Finalist',
      issuer: 'Data Meghe COE',
      year: '2024',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  // Animate progress bars when visible
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const newValues: {[key: string]: number} = {};
        skillCategories.forEach(category => {
          category.skills.forEach(skill => {
            newValues[skill.name] = skill.level;
          });
        });
        setAnimatedValues(newValues);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, tools, and certifications that drive my development journey.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`glass border-white/10 hover:border-white/20 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: `${index * 200}ms` }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                    <category.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground/80 font-medium">{skill.name}</span>
                        <span className="text-sm text-foreground/60">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={animatedValues[skill.name] || 0} 
                        className="h-2 bg-white/10"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            Tools & Technologies
          </h3>
          <p className="text-center text-foreground/70 mb-8">
            Swipe or use arrows to explore my technology stack
          </p>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {tools.map((tool, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3 md:basis-1/5 lg:basis-1/6">
                  <div className="glass p-4 rounded-xl text-center hover:scale-110 transition-transform duration-300 group h-full">
                    <div className="text-2xl mb-2 group-hover:scale-125 transition-transform">
                      {tool.icon}
                    </div>
                    <div className="text-sm font-medium text-foreground/80 mb-1">{tool.name}</div>
                    <div className="text-xs text-foreground/50 capitalize">{tool.category}</div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="glass border-white/20 hover:border-white/40 text-foreground hover:text-foreground" />
            <CarouselNext className="glass border-white/20 hover:border-white/40 text-foreground hover:text-foreground" />
          </Carousel>
        </div>

        {/* Certifications */}
        <div className={`transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="glass border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Shield size={24} className="text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{cert.title}</h4>
                  <p className="text-foreground/70 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-foreground/50 text-xs">{cert.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Goals */}
        <div className={`mt-16 text-center glass p-8 rounded-2xl transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl font-bold mb-4 gradient-text">Currently Learning</h3>
          <p className="text-foreground/70 mb-4">
            I'm always expanding my skillset. Currently diving deeper into:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['VAPT', 'Machine Learning', 'Blockchain', 'IoT', 'GRC'].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full text-sm border border-white/10 hover:border-white/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
