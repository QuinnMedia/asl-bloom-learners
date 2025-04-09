
import React from 'react';
import ScrollReveal from './ScrollReveal';
import { cn } from '@/lib/utils';

const identificationPoints = [
  {
    title: "You've always wanted to learn ASL but didn't know where to start.",
    icon: (
      <svg className="w-6 h-6 text-asl-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "In-person classes are challenging because you can't get there, or find the time!",
    icon: (
      <svg className="w-6 h-6 text-asl-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "You want to practice consistently, and have the tools in your pocket.",
    icon: (
      <svg className="w-6 h-6 text-asl-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "You feel overwhelmed by face-to-face lessons and want something simple yet effective.",
    icon: (
      <svg className="w-6 h-6 text-asl-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "You need a tool that works around your busy schedule, making learning accessible anytime, anywhere.",
    icon: (
      <svg className="w-6 h-6 text-asl-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const IdentificationSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-asl-gray/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-asl-peach/5 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-asl-blue/5 blur-3xl rounded-full -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <ScrollReveal animation="fade-in-right">
              <div className="relative">
                <div className="absolute -top-5 -left-5 w-full h-full bg-asl-mint/20 rounded-3xl transform rotate-2"></div>
                <div className="absolute -bottom-5 -right-5 w-full h-full bg-asl-blue/20 rounded-3xl transform -rotate-2"></div>
                <div className="relative glass-card rounded-3xl overflow-hidden shadow-xl p-1">
                  <img 
                    src="/lovable-uploads/bfc5894b-e82e-41bf-ab47-6c6e4124518c.png" 
                    alt="ASL Bloom app interface showing vocabulary categories and learning progress" 
                    className="w-full h-full object-contain rounded-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="md:col-span-7 space-y-8">
            <ScrollReveal>
              <div className="inline-block px-4 py-1.5 bg-asl-blue/10 text-black rounded-full text-sm font-medium mb-4">
                Is This You?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                We built ASL Bloom for you
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                If you relate to any of these situations, ASL Bloom was designed with your needs in mind:
              </p>
            </ScrollReveal>
            
            <div className="space-y-5">
              {identificationPoints.map((point, index) => (
                <ScrollReveal key={index} delay={index * 100} animation="fade-in-left">
                  <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-asl-blue/10 rounded-full p-2 flex-shrink-0">
                      {point.icon}
                    </div>
                    <p className="text-gray-700">{point.title}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentificationSection;
