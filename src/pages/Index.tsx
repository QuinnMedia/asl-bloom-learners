
import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import IdentificationSection from '../components/IdentificationSection';
import BenefitsSection from '../components/BenefitsSection';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Smooth scroll for anchor links - respect reduced motion preference
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });
      });
    });

    // Lazy load images with blur effect
    const blurDivs = document.querySelectorAll('.blur-load');
    blurDivs.forEach(div => {
      const img = div.querySelector('img');
      
      if (img) {
        function loaded() {
          div.classList.add('loaded');
        }
        
        if (img.complete) {
          loaded();
        } else {
          img.addEventListener('load', loaded);
        }
      }
    });

    // Add skip to content link for accessibility
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-asl-dark-peach focus:shadow-lg';
    skipLink.textContent = 'Skip to content';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Cleanup function
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          e.preventDefault();
        });
      });
      if (document.body.contains(skipLink)) {
        document.body.removeChild(skipLink);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main-content">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <IdentificationSection />
        <BenefitsSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
