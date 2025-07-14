
import { useState, useEffect, useRef } from 'react';
import { Code, Shield, Lightbulb, Heart, Award, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Crafting seamless experiences from frontend to backend',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Focus',
      description: 'Building secure applications with security-first mindset',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Driven',
      description: 'Always exploring new technologies and creative solutions',
      color: 'from-yellow-500 to-green-500'
    },
    {
      icon: Heart,
      title: 'User-Centric Design',
      description: 'Creating intuitive interfaces that users love',
      color: 'from-pink-500 to-purple-500'
    }
  ];

  const timeline = [
    {
      year: '2024-25',
      title: 'Cybersecurity Intern at Vistra',
      description: 'Proposed an out-of-band collaboration model, streamlining communication across 3+ IT divisions',
      icon: Shield
    },
    {
      year: '2024',
      title: 'Full Stack Developer Intern at Jio Pvt. Ltd.',
      description: 'Engineered responsive UIs using React, Tailwind, and Expo, improving usability for 10,000+ users',
      icon: Code
    },
    {
      year: '2022-26',
      title: 'B.Tech in IT (Hons. Cybersecurity)',
      description: 'Currently pursuing degree at Fr. C. Rodrigues Institute of Technology with 8.85 CGPA',
      icon: Award
    },
    {
      year: '2022',
      title: 'Senior Secondary Completion',
      description: 'Completed from New Horizons Scholars School with 69.6%',
      icon: Lightbulb
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            I'm a passionate developer who loves creating innovative solutions that make a difference. 
            My journey spans across full-stack development, cybersecurity, and creative problem-solving.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">My Story</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Currently pursuing B.Tech in Information Technology (Hons. in Cybersecurity) at Fr. C. Rodrigues Institute of Technology. 
                I'm skilled in threat detection, vulnerability assessment, and incident response, with experience in secure full-stack development.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                I'm passionate about bridging the gap between development and security, creating solutions that are both innovative and secure. 
                Familiar with ISO 27001, NIST, and GDPR compliance frameworks.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-6 rounded-xl text-center">
                <div className="text-3xl font-bold gradient-text mb-2">8.85</div>
                <div className="text-sm text-foreground/70">Current CGPA</div>
              </div>
              <div className="glass p-6 rounded-xl text-center">
                <div className="text-3xl font-bold gradient-text mb-2">3+</div>
                <div className="text-sm text-foreground/70">Major Projects</div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className={`space-y-4 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {highlights.map((item, index) => (
              <Card key={index} className="glass border-white/10 hover:border-white/20 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color} group-hover:scale-110 transition-transform`}>
                      <item.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                      <p className="text-foreground/70 text-sm">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className={`transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">My Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="glass p-6 rounded-xl hover:scale-105 transition-transform">
                      <div className="text-sm text-purple-400 font-mono mb-2">{item.year}</div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-foreground/70">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <item.icon size={20} className="text-white" />
                    </div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
