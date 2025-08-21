import { CalendarDays, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

const BlogCard = ({ title, excerpt, image, date, readTime, category }: BlogCardProps) => {
  return (
    <Card className="group overflow-hidden transition-smooth hover:shadow-medium hover:-translate-y-1 bg-card-gradient">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden aspect-[16/9]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-smooth group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-smooth" />
          <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
            {category}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <CalendarDays className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{readTime} read</span>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth line-clamp-2">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed line-clamp-3">
          {excerpt}
        </p>
        
        <Button variant="ghost" className="p-0 h-auto font-semibold text-primary hover:text-accent">
          Read More →
        </Button>
      </CardContent>
    </Card>
  );
};

export default BlogCard;