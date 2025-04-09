import React, { useEffect, useState } from 'react';
import Button from './Button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#benefits", label: "Benefits" },
    { href: "#pricing", label: "Pricing" },
    { href: "#team", label: "Our Team" }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 py-4",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo with uploaded image */}
        <a href="#" className="flex items-center no-underline" aria-label="ASL Bloom Home">
          <img 
            src="/lovable-uploads/dcb53618-e82a-454e-ad32-4a8db2b44520.png" 
            alt="ASL Bloom Logo" 
            className="h-10 mr-2"
          />
        </a>
        
        {/* Desktop Navigation - Clear, concise labels */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-asl-dark-gray hover:text-asl-blue transition-colors no-underline font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        {/* Action button - Clear call to action */}
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            size="sm" 
            variant="peach" 
            className="hover:scale-105 transition-transform"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile menu button - Obvious toggle */}
        <button 
          className="md:hidden p-2 text-asl-dark-gray hover:text-asl-blue" 
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - Full-width, easy to tap targets */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute left-0 right-0 top-full border-t">
          <nav className="container mx-auto py-4 px-6 flex flex-col">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="py-3 text-asl-dark-gray hover:text-asl-blue text-lg no-underline font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 pb-2">
              <Button 
                variant="peach" 
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
