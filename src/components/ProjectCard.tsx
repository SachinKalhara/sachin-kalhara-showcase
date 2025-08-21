import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({ title, description, image, tags, demoUrl, githubUrl }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden transition-smooth hover:shadow-medium hover:-translate-y-1 bg-card-gradient">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden aspect-video">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-smooth group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-smooth" />
        </div>
      </CardHeader>
      
      <CardContent className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex gap-3">
        {demoUrl && (
          <Button asChild size="sm" className="flex-1">
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </a>
          </Button>
        )}
        {githubUrl && (
          <Button asChild variant="outline" size="sm" className="flex-1">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;