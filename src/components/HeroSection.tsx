
import React from 'react';
import Button from './Button';
import ScrollReveal from './ScrollReveal';
import { cn } from '@/lib/utils';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full wave-pattern opacity-30 -z-10"></div>
      <div className="absolute top-1/3 right-[5%] w-64 h-64 rounded-full bg-asl-blue/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-[10%] w-72 h-72 rounded-full bg-asl-peach/5 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-8">
            <ScrollReveal animation="fade-in">
              <div className="inline-block px-4 py-1.5 bg-asl-blue/10 text-asl-blue rounded-full text-sm font-medium mb-4">
                American Sign Language for Everyone
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in" delay={200}>
              <h1 className="font-bold tracking-tight text-gray-900">
                Learn ASL with Confidence Today
                <span className="block text-asl-blue">with Deaf native Signers</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in" delay={400}>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                Support Sign Language to Bloom — Your fun, beginner friendly path to mastering American Sign Language while building connections and making an impact.
              </p>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in" delay={600}>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button 
                  size="lg" 
                  variant="primary"
                  className="hover:scale-105 transition-transform"
                >
                  Get Started
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="hover:scale-105 transition-transform"
                >
                  Learn More
                </Button>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in" delay={800}>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#" className="flex items-center hover:opacity-80 transition-opacity">
                  <div className="w-32 h-10 bg-black rounded-lg flex items-center justify-center text-white text-xs px-2">
                    <div className="mr-2">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                        <path d="M17.707,12.293c-0.391-0.391-1.023-0.391-1.414,0l-4,4c-0.391,0.391-0.391,1.023,0,1.414s1.023,0.391,1.414,0L17,14.414l3.293,3.293c0.391,0.391,1.023,0.391,1.414,0s0.391-1.023,0-1.414L17.707,12.293z"></path>
                        <path d="M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10s10-4.477,10-10S17.523,2,12,2z M12,20c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S16.418,20,12,20z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-[0.6rem] leading-tight">Download on the</div>
                      <div className="font-semibold leading-tight">App Store</div>
                    </div>
                  </div>
                </a>
                
                <a href="#" className="flex items-center hover:opacity-80 transition-opacity">
                  <div className="w-32 h-10 bg-black rounded-lg flex items-center justify-center text-white text-xs px-2">
                    <div className="mr-2">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                        <path d="M3,20.5V3.5C3,2.672,3.672,2,4.5,2S6,2.672,6,3.5v17c0,0.828-0.672,1.5-1.5,1.5S3,21.328,3,20.5z"></path>
                        <path d="M16.5,12L9,3v18L16.5,12z"></path>
                        <path d="M9,3v18l11-9L9,3z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-[0.6rem] leading-tight">GET IT ON</div>
                      <div className="font-semibold leading-tight">Google Play</div>
                    </div>
                  </div>
                </a>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="md:col-span-5">
            <ScrollReveal animation="fade-in-left" delay={300}>
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-full h-full bg-asl-peach/20 rounded-3xl transform rotate-3"></div>
                <div className="absolute -bottom-8 -right-8 w-full h-full bg-asl-blue/20 rounded-3xl transform -rotate-3"></div>
                <div className="relative bg-white shadow-xl rounded-3xl p-6 z-10">
                  <div className="aspect-[9/16] bg-asl-gray rounded-xl overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="ASL Bloom App" 
                      className="w-full h-full object-cover blur-load"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
