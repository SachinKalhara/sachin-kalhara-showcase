import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProjectCard from '@/components/ProjectCard';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      title: 'Portfolio Website Design',
      description: 'A modern, responsive portfolio website built with React and TypeScript. Features smooth animations, dark mode support, and optimized performance. The design emphasizes clean aesthetics while maintaining excellent user experience across all devices.',
      image: project1,
      tags: ['UI/UX', 'React', 'TypeScript', 'Responsive'],
      category: 'Web Design',
      demoUrl: 'https://example.com/portfolio',
      githubUrl: 'https://github.com/sachinkalhara/portfolio'
    },
    {
      title: 'Mobile App UI Design',
      description: 'Comprehensive mobile application interface designed for both iOS and Android platforms. Includes user research, wireframing, prototyping, and final UI implementation with attention to platform-specific design guidelines.',
      image: project2,
      tags: ['Mobile Design', 'Figma', 'Prototyping', 'User Research'],
      category: 'Mobile Design',
      demoUrl: 'https://example.com/mobile-app'
    },
    {
      title: 'E-commerce Web Application',
      description: 'Full-stack e-commerce solution with modern design, secure payment integration, inventory management, and admin dashboard. Built with React, Node.js, and MongoDB with Stripe payment processing.',
      image: project3,
      tags: ['Full Stack', 'E-commerce', 'Payment Integration', 'Admin Dashboard'],
      category: 'Web Development',
      demoUrl: 'https://example.com/ecommerce',
      githubUrl: 'https://github.com/sachinkalhara/ecommerce'
    },
    {
      title: 'Brand Identity Design',
      description: 'Complete brand identity package including logo design, color palette, typography system, and brand guidelines. Created for a tech startup focusing on sustainable solutions and modern aesthetics.',
      image: project1,
      tags: ['Branding', 'Logo Design', 'Adobe Illustrator', 'Brand Guidelines'],
      category: 'Branding',
      demoUrl: 'https://example.com/brand-identity'
    },
    {
      title: 'SaaS Dashboard Design',
      description: 'Enterprise-level dashboard interface for a SaaS platform. Features complex data visualization, user management, analytics reporting, and customizable widgets with focus on usability and scalability.',
      image: project2,
      tags: ['SaaS', 'Dashboard', 'Data Visualization', 'Enterprise'],
      category: 'Web Design',
      demoUrl: 'https://example.com/saas-dashboard',
      githubUrl: 'https://github.com/sachinkalhara/saas-dashboard'
    },
    {
      title: 'Mobile Game UI Design',
      description: 'Engaging user interface design for a mobile gaming application. Includes game menus, HUD elements, character selection screens, and in-game UI components optimized for touch interactions.',
      image: project3,
      tags: ['Game UI', 'Mobile Gaming', 'Character Design', 'Interactive Design'],
      category: 'Mobile Design',
      demoUrl: 'https://example.com/game-ui'
    }
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-hero font-bold mb-6 text-gradient">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A collection of my latest work in design and development
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 shadow-soft"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-bounce hover:scale-105"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground mb-4">
                No projects found matching your criteria
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={index} 
                  className="animate-scale-in" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Skills Used Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-hero font-bold mb-4">Technologies Used</h2>
            <p className="text-muted-foreground">
              Skills and tools showcased across these projects
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {Array.from(new Set(projects.flatMap(project => project.tags))).map((tag, index) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="px-4 py-2 text-sm font-medium transition-bounce hover:scale-105 hover:shadow-soft animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;