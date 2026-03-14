import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProjectCard from '@/components/ProjectCard';

interface BackendProject {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  technologies: string;
  githubLink?: string;
  demoLink?: string;
  createdAt: string;
}

interface TransformedProject {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: string;
}

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const { data: projects = [], isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const response = await fetch('http://localhost:8080/api/projects');
      if (!response.ok) throw new Error('Failed to fetch projects');
      return response.json();
    },
  });

  if (isLoading) return <div className="min-h-screen pt-20 flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen pt-20 flex items-center justify-center">Error loading projects</div>;

  const transformedProjects = projects.map(project => ({
    ...project,
    image: project.imageUrl || '/placeholder.svg',
    tags: project.technologies ? project.technologies.split(',').map(tag => tag.trim()).filter(Boolean) : [],
    demoUrl: project.demoLink,
    githubUrl: project.githubLink,
    category: project.technologies ? project.technologies.split(',')[0]?.trim() || 'Other' : 'Other'
  }));

  const categories = ['All', ...Array.from(new Set(transformedProjects.map(project => project.category)))];

  const filteredProjects = transformedProjects.filter((project: TransformedProject) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
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
                onChange={(e) => setSearchTerm((e.target as HTMLInputElement).value)}
                className="pl-10 shadow-soft"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category: string) => (
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
              Showing {filteredProjects.length} of {transformedProjects.length} projects
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
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="animate-scale-in"
                  style={{ animationDelay: `${Math.random() * 0.3}s` }}
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
            {Array.from(new Set(transformedProjects.flatMap(project => project.tags))).map((tag: string, index: number) => (
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