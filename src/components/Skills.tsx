
import { useState, useEffect, useRef } from 'react';
import { Code, Database, Shield, Palette, Server, Smartphone, Brain, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

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
    { name: 'VS Code', icon: '🔧' },
    { name: 'Git', icon: '📚' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Postman', icon: '🚀' },
    { name: 'Linux', icon: '🐧' },
    { name: 'Burp Suite', icon: '🔍' },
    { name: 'Wireshark', icon: '📡' },
    { name: 'Metasploit', icon: '⚡' }
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
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="glass p-4 rounded-xl text-center hover:scale-110 transition-transform duration-300 group"
              >
                <div className="text-2xl mb-2 group-hover:scale-125 transition-transform">
                  {tool.icon}
                </div>
                <div className="text-sm font-medium text-foreground/80">{tool.name}</div>
              </div>
            ))}
          </div>
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
            {['Kubernetes', 'Machine Learning', 'Blockchain', 'WebAssembly'].map((skill, index) => (
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
