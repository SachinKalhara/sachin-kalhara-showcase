import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProjectCard from '@/components/ProjectCard';
import heroImage from '@/assets/hero-bg.jpg';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const Home = () => {
  const featuredProjects = [
    {
      title: 'Portfolio Website Design',
      description: 'A modern, responsive portfolio website showcasing clean design principles and smooth user interactions.',
      image: project1,
      tags: ['UI/UX', 'React', 'TypeScript'],
      demoUrl: 'https://example.com/project1',
      githubUrl: 'https://github.com/sachinkalhara/portfolio'
    },
    {
      title: 'Mobile App UI',
      description: 'Intuitive mobile application interface designed for seamless user experience across all devices.',
      image: project2,
      tags: ['Mobile Design', 'Figma', 'Prototyping'],
      demoUrl: 'https://example.com/project2'
    },
    {
      title: 'E-commerce Web App',
      description: 'Complete e-commerce solution with modern design, secure payment integration, and admin dashboard.',
      image: project3,
      tags: ['E-commerce', 'Full Stack', 'Payment Integration'],
      demoUrl: 'https://example.com/project3',
      githubUrl: 'https://github.com/sachinkalhara/ecommerce'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Creative workspace" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-hero font-bold mb-6">
            <span className="block text-foreground">Sachin</span>
            <span className="block text-gradient">Kalhara</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            UI/UX Designer & Web Developer crafting beautiful digital experiences 
            with modern technologies and creative vision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button asChild size="lg" className="shadow-medium transition-bounce hover:scale-105">
              <Link to="/projects">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="shadow-medium transition-bounce hover:scale-105">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '25', label: 'Years Old' },
              { number: '50+', label: 'Projects Completed' },
              { number: '3+', label: 'Years Experience' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <Card key={index} className="text-center shadow-soft animate-scale-in bg-card-gradient">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-hero font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing my latest work in UI/UX design and web development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="shadow-medium transition-bounce hover:scale-105">
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-hero font-bold mb-4">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Design',
                skills: ['Adobe Illustrator', 'Photoshop', 'Figma', 'UI/UX Design']
              },
              {
                title: 'Development',
                skills: ['React', 'TypeScript', 'Node.js', 'Web Development']
              },
              {
                title: 'Programming',
                skills: ['JavaScript', 'Python', 'Java', 'C Programming']
              }
            ].map((category, index) => (
              <Card key={index} className="shadow-soft animate-scale-in bg-card-gradient" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gradient">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="text-muted-foreground">• {skill}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;