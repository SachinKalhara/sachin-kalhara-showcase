import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sachin@example.com',
      href: 'mailto:sachin@example.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/sachinkalhara',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://twitter.com/sachinkalhara',
      color: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/sachinkalhara',
      color: 'hover:text-gray-600'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-hero font-bold mb-6 text-gradient">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Let's discuss your next project or just say hello
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <Card className="shadow-medium bg-card-gradient">
                <CardHeader>
                  <CardTitle className="text-2xl font-hero">Send me a message</CardTitle>
                  <p className="text-muted-foreground">
                    I'd love to hear from you. Send me a message and I'll respond as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="shadow-soft"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="shadow-soft"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="shadow-soft resize-none"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full shadow-medium transition-bounce hover:scale-105"
                    >
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div>
                <h2 className="text-3xl font-hero font-bold mb-6">Let's connect</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you're looking for a designer for your next project, have a question about my work, 
                  or just want to say hi, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Card 
                      key={index} 
                      className="shadow-soft transition-bounce hover:scale-105 bg-card-gradient"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{item.title}</h3>
                            {item.href === '#' ? (
                              <p className="text-muted-foreground">{item.value}</p>
                            ) : (
                              <a 
                                href={item.href}
                                className="text-muted-foreground hover:text-primary transition-smooth"
                              >
                                {item.value}
                              </a>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Social Links */}
              <Card className="shadow-soft bg-card-gradient">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Follow me</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => {
                      const IconComponent = social.icon;
                      return (
                        <Button
                          key={social.name}
                          variant="ghost"
                          size="sm"
                          asChild
                          className={`transition-bounce hover:scale-110 ${social.color}`}
                        >
                          <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                          >
                            <IconComponent className="h-5 w-5" />
                          </a>
                        </Button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Chat CTA */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-scale-in">
            <Coffee className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-hero font-bold mb-4">Let's grab coffee!</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              I'm always excited to meet new people and discuss interesting projects. 
              If you're in the San Francisco area, let's meet up for coffee and chat about design, 
              technology, or anything creative.
            </p>
            <Button size="lg" className="shadow-medium transition-bounce hover:scale-105">
              <Coffee className="mr-2 h-5 w-5" />
              Schedule a Coffee Chat
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;