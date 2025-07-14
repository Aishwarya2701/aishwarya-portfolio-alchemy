
import { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, Star, GitFork, Code, Database, Globe, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [githubRepos, setGithubRepos] = useState([]);
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
      title: 'SecureChat Application',
      description: 'End-to-end encrypted messaging app built with React and Node.js, featuring real-time communication and advanced security protocols.',
      image: '/api/placeholder/600/400',
      tags: ['React', 'Node.js', 'Socket.io', 'Encryption', 'TypeScript'],
      github: 'https://github.com/Aishwarya2701',
      demo: '#',
      featured: true,
      type: 'security'
    },
    {
      title: 'AI-Powered Portfolio Analyzer',
      description: 'Machine learning tool that analyzes investment portfolios and provides risk assessment with interactive visualizations.',
      image: '/api/placeholder/600/400',
      tags: ['Python', 'TensorFlow', 'React', 'D3.js', 'API Integration'],
      github: 'https://github.com/Aishwarya2701',
      demo: '#',
      featured: true,
      type: 'ai'
    },
    {
      title: 'Vulnerability Scanner',
      description: 'Automated web application security scanner that identifies common vulnerabilities and generates detailed reports.',
      image: '/api/placeholder/600/400',
      tags: ['Python', 'Security', 'Web Scraping', 'Automation'],
      github: 'https://github.com/Aishwarya2701',
      demo: '#',
      featured: true,
      type: 'security'
    }
  ];

  const getProjectIcon = (type: string) => {
    switch (type) {
      case 'security': return Shield;
      case 'ai': return Code;
      case 'web': return Globe;
      case 'data': return Database;
      default: return Code;
    }
  };

  const getTagColor = (tag: string) => {
    const colors = {
      'React': 'bg-blue-500/20 text-blue-400',
      'Python': 'bg-green-500/20 text-green-400',
      'TypeScript': 'bg-blue-600/20 text-blue-300',
      'Node.js': 'bg-green-600/20 text-green-300',
      'Security': 'bg-red-500/20 text-red-400',
      'AI': 'bg-purple-500/20 text-purple-400',
      'Machine Learning': 'bg-purple-600/20 text-purple-300',
      'TensorFlow': 'bg-orange-500/20 text-orange-400',
    };
    return colors[tag] || 'bg-gray-500/20 text-gray-400';
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A showcase of my recent work in web development, cybersecurity, and innovative solutions.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => {
            const IconComponent = getProjectIcon(project.type);
            return (
              <Card key={index} className={`glass border-white/10 hover:border-white/20 transition-all duration-500 group hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: `${index * 200}ms` }}>
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <div className="h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                      <IconComponent size={48} className="text-purple-400 opacity-50" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className={getTagColor(project.tags[0])}>
                        {project.type.toUpperCase()}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-3 text-xl group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 4).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className={`text-xs ${getTagColor(tag)}`}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" asChild className="flex-1 border-white/20 hover:border-purple-400/50">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={14} className="mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} className="mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
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
            <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
              Recent GitHub Activity
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {githubRepos.slice(0, 6).map((repo: any, index) => (
                <Card key={repo.id} className="glass border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-lg truncate mr-2">{repo.name}</h4>
                      <Badge variant="outline" className="text-xs">
                        {repo.language || 'N/A'}
                      </Badge>
                    </div>
                    
                    <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
                      {repo.description || 'No description available'}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-foreground/60">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Star size={12} />
                          {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork size={12} />
                          {repo.forks_count}
                        </span>
                      </div>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 transition-colors"
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
          <p className="text-foreground/70 mb-6">
            Want to see more of my work?
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
            <a href="https://github.com/Aishwarya2701" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" size={20} />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
