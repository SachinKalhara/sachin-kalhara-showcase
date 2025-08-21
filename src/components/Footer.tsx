import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/sachinkalhara',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://twitter.com/sachinkalhara',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/sachinkalhara',
    },
  ];

  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link 
              to="/" 
              className="text-2xl font-hero font-bold text-gradient"
            >
              Sachin Kalhara
            </Link>
            <p className="text-muted-foreground max-w-sm">
              UI/UX Designer & Web Developer crafting beautiful digital experiences 
              with modern technologies and creative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="sm"
                    asChild
                    className="transition-bounce hover:scale-110 hover:text-primary"
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
            <p className="text-sm text-muted-foreground">
              <a 
                href="mailto:sachin@example.com"
                className="hover:text-primary transition-smooth"
              >
                sachin@example.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Sachin Kalhara. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 sm:mt-0">
            Made with ❤️ using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;