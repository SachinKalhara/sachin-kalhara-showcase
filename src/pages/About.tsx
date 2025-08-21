import { Calendar, Code, Palette, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const skills = [
    'Adobe Illustrator',
    'Photoshop',
    'Premiere Pro',
    'UI/UX Design',
    'Web Development',
    'React',
    'TypeScript',
    'Python',
    'Java',
    'C Programming',
    'Figma',
    'Node.js'
  ];

  const timeline = [
    {
      year: '2023 - Present',
      title: 'Senior UI/UX Designer',
      company: 'Creative Digital Agency',
      description: 'Leading design projects for major clients, creating innovative user experiences and managing design teams.',
      icon: Palette
    },
    {
      year: '2021 - 2023',
      title: 'Full Stack Developer',
      company: 'Tech Solutions Inc.',
      description: 'Developed responsive web applications using modern frameworks and collaborated with cross-functional teams.',
      icon: Code
    },
    {
      year: '2020 - 2021',
      title: 'Junior Designer',
      company: 'StartUp Studio',
      description: 'Started my professional journey creating digital designs and learning industry best practices.',
      icon: Award
    },
    {
      year: '2018 - 2020',
      title: 'Computer Science Degree',
      company: 'University of Technology',
      description: 'Graduated with honors, specializing in software engineering and user interface design.',
      icon: Calendar
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-hero font-bold mb-6 text-gradient">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Passionate about creating beautiful and functional digital experiences
          </p>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-hero font-bold mb-6">Hello, I'm Sachin</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                  architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
            
            <Card className="shadow-medium animate-scale-in bg-card-gradient">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gradient">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Age</span>
                    <span className="font-medium">25 years old</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-medium">San Francisco, CA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience</span>
                    <span className="font-medium">3+ years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email</span>
                    <span className="font-medium">sachin@example.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-hero font-bold mb-4">Skills & Technologies</h2>
            <p className="text-xl text-muted-foreground">
              Tools and technologies I work with on a daily basis
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center animate-slide-up">
            {skills.map((skill, index) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="px-4 py-2 text-sm font-medium transition-bounce hover:scale-105 hover:shadow-soft"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-hero font-bold mb-4">My Journey</h2>
            <p className="text-xl text-muted-foreground">
              A timeline of my professional growth and achievements
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border" />
            
            <div className="space-y-8">
              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div 
                    key={index} 
                    className={`relative flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } animate-slide-up`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Timeline Icon */}
                    <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-medium z-10">
                      <IconComponent className="h-4 w-4 text-primary-foreground" />
                    </div>
                    
                    {/* Content */}
                    <div className={`ml-12 md:ml-0 ${isEven ? 'md:pr-8' : 'md:pl-8'} md:w-1/2`}>
                      <Card className="shadow-soft bg-card-gradient">
                        <CardHeader>
                          <div className="text-sm text-primary font-semibold">{item.year}</div>
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                          <div className="text-accent font-medium">{item.company}</div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;