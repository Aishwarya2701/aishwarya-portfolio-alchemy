
import { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, Star, GitFork, Code, Database, Globe, Shield, Calendar, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [githubRepos, setGithubRepos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
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

  // Fetch GitHub repositories
  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Aishwarya2701/repos?sort=updated&per_page=6');
        const data = await response.json();
        setGithubRepos(data);
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
      }
    };

    fetchGitHubRepos();
  }, []);

  // Featured projects (hand-picked)
  const featuredProjects = [
    {
      title: 'CyberNexus - AI Cybersecurity SOC Dashboard',
      description: 'Developed an AI-powered SOC dashboard that accelerated incident triage by 40%. Features real-time threat analysis, integrated phishing simulation and deepfake alerts, boosting threat coverage.',
      tags: ['ReactJS', 'NodeJS', 'MongoDB', 'Python', 'OpenAI API'],
      github: 'https://github.com/Aishwarya2701',
      featured: true,
      type: 'security',
      status: 'Production',
      team: '4 members',
      duration: '6 months'
    },
    {
      title: 'EcoSense - Smart IoT-Based Air Quality Monitoring System',
      description: 'Created a real-time AQI monitoring platform with live sensor data and alerts. Built web/mobile dashboards and gamified user actions via QR points. Used blockchain to ensure secure logging of 1000+ environmental records.',
      tags: ['IoT', 'Python', 'Flask', 'JavaScript', 'Blockchain'],
      github: 'https://github.com/Aishwarya2701',
      featured: true,
      type: 'iot',
      status: 'Live',
      team: '3 members',
      duration: '4 months'
    },
    {
      title: 'Kosmos - Metacommerce E-Commerce Platform',
      description: 'Designed a 3D shopping experience platform merging physical and digital shopping. Secured transactions through encryption and custom backend logic. Increased user engagement by 50% during beta testing.',
      tags: ['ReactJS', '3D JS', 'NodeJS'],
      github: 'https://github.com/Aishwarya2701',
      featured: true,
      type: 'web',
      status: 'Beta',
      team: '5 members',
      duration: '8 months'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: featuredProjects.length },
    { id: 'security', label: 'Security', count: featuredProjects.filter(p => p.type === 'security').length },
    { id: 'iot', label: 'IoT', count: featuredProjects.filter(p => p.type === 'iot').length },
    { id: 'web', label: 'Web Dev', count: featuredProjects.filter(p => p.type === 'web').length },
  ];

  const getProjectIcon = (type: string) => {
    switch (type) {
      case 'security': return Shield;
      case 'iot': return Database;
      case 'web': return Globe;
      case 'ai': return Code;
      default: return Code;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Live': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Beta': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const filteredProjects = selectedCategory === 'all' 
    ? featuredProjects 
    : featuredProjects.filter(project => project.type === selectedCategory);

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Project Portfolio
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Showcasing innovative solutions across cybersecurity, IoT, and web development
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-wrap gap-2 p-1 glass rounded-lg border border-white/10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                    : 'text-foreground/70 hover:text-foreground hover:bg-white/5'
                }`}
              >
                {category.label}
                <span className="ml-2 opacity-60">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => {
            const IconComponent = getProjectIcon(project.type);
            return (
              <Card key={index} className={`glass border-white/10 hover:border-white/20 transition-all duration-500 group overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: `${index * 200}ms` }}>
                {/* Project Header */}
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20">
                        <IconComponent size={24} className="text-purple-400" />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-purple-400 transition-colors">
                          {project.title}
                        </CardTitle>
                        <Badge className={`mt-1 ${getStatusColor(project.status)}`}>
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-foreground/70 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 rounded-lg bg-black/20 border border-white/5">
                    <div className="flex items-center gap-2 text-sm">
                      <Users size={16} className="text-purple-400" />
                      <span className="text-foreground/70">Team: {project.team}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar size={16} className="text-blue-400" />
                      <span className="text-foreground/70">Duration: {project.duration}</span>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Action Button */}
                  <Button 
                    size="sm" 
                    variant="outline" 
                    asChild 
                    className="w-full border-white/20 hover:border-purple-400/50 hover:bg-purple-500/10 transition-all duration-300 group"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2 group-hover:scale-110 transition-transform" />
                      View Source Code
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* GitHub Repositories */}
        {githubRepos.length > 0 && (
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold gradient-text mb-4">
                Recent GitHub Activity
              </h3>
              <p className="text-foreground/70">
                Latest contributions and open source work
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {githubRepos.slice(0, 6).map((repo: any, index) => (
                <Card key={repo.id} className="glass border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-lg truncate mr-2 group-hover:text-purple-400 transition-colors">
                        {repo.name}
                      </h4>
                      <Badge variant="outline" className="text-xs border-white/20">
                        {repo.language || 'N/A'}
                      </Badge>
                    </div>
                    
                    <p className="text-foreground/70 text-sm mb-4 line-clamp-3">
                      {repo.description || 'No description available'}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-foreground/60">
                        <span className="flex items-center gap-1">
                          <Star size={12} className="text-yellow-400" />
                          {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork size={12} className="text-blue-400" />
                          {repo.forks_count}
                        </span>
                      </div>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 transition-colors hover:scale-110 transform duration-200"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="glass p-8 rounded-xl border border-white/10 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold mb-4 gradient-text">
              Interested in Collaboration?
            </h4>
            <p className="text-foreground/70 mb-6">
              I'm always open to discussing new projects and opportunities. Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                <a href="https://github.com/Aishwarya2701" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2" size={20} />
                  View All Projects
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 hover:border-purple-400/50">
                <a href="#contact">
                  <ExternalLink className="mr-2" size={20} />
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
