
import React, { useEffect, useState } from 'react';
import Button from './Button';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 py-4",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold bg-clip-text text-transparent gradient-blue mr-2">ASL</div>
          <div className="text-2xl font-bold bg-clip-text text-transparent gradient-peach">Bloom</div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-asl-dark-gray hover:text-asl-blue transition-colors">Features</a>
          <a href="#benefits" className="text-asl-dark-gray hover:text-asl-blue transition-colors">Benefits</a>
          <a href="#pricing" className="text-asl-dark-gray hover:text-asl-blue transition-colors">Pricing</a>
          <a href="#team" className="text-asl-dark-gray hover:text-asl-blue transition-colors">Our Team</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button 
            size="sm" 
            variant="primary"
            className="hover:scale-105 transition-transform"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
