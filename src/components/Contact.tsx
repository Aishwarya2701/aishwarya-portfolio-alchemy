
import { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, MessageSquare, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:aishiyer2701@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'aishiyer2701@gmail.com',
      link: 'mailto:aishiyer2701@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: '@Aishwarya2701',
      link: 'https://github.com/Aishwarya2701',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: '@aishwaryaiyer777',
      link: 'https://www.linkedin.com/in/aishwaryaiyer777/',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Book,
      title: 'Blogs',
      value: 'aishwarya2701',
      link: 'https://dev.to/aishwarya2701',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Thane',
      link: '#',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Have a project in mind or just want to chat about technology? 
            I'd love to hear from you! Let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Get in Touch Section */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <Card className="glass border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <MessageSquare className="text-purple-400" size={24} />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-foreground/70 text-lg">
                  I'm always open to discussing new opportunities, collaborating on exciting projects, 
                  or just having a chat about technology and innovation.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 glass rounded-lg border border-white/10 hover:border-purple-400/30 transition-colors">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email Me</h4>
                      <a 
                        href="mailto:aishiyer2701@gmail.com" 
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        aishiyer2701@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 glass rounded-lg border border-white/10 hover:border-purple-400/30 transition-colors">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700">
                      <Linkedin size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Connect on LinkedIn</h4>
                      <a 
                        href="https://www.linkedin.com/in/aishwaryaiyer777/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        @aishwaryaiyer777
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                    <a href="mailto:aishiyer2701@gmail.com">
                      <Mail className="mr-2" size={18} />
                      Send Email
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-white/20 hover:border-purple-400/50">
                    <a href="https://www.linkedin.com/in/aishwaryaiyer777/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2" size={18} />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="glass border-white/10 hover:border-white/20 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} group-hover:scale-110 transition-transform`}>
                        <info.icon size={20} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{info.title}</h4>
                        <a
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                          className="text-foreground/70 hover:text-purple-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <Card className="glass border-white/10 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Ready to collaborate?
                </h3>
                <p className="text-foreground/70 mb-6">
                  Whether you have a project in mind, need technical consultation, 
                  or just want to discuss the latest in tech and security, 
                  I'm always excited to connect with like-minded individuals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                    <a href="#contact">
                      <Mail className="mr-2" size={18} />
                      Start a Conversation
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-white/20 hover:border-purple-400/50">
                    <a href="https://github.com/Aishwarya2701" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2" size={18} />
                      View My Work
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          </div>
        </div>
    </section>
  );
};

export default Contact;
