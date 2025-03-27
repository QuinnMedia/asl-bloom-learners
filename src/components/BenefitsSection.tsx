
import React from 'react';
import ScrollReveal from './ScrollReveal';
import { cn } from '@/lib/utils';
import Button from './Button';

const benefits = [
  {
    icon: (
      <svg className="w-12 h-12 text-asl-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Native Deaf Signers',
    description: 'Learn authentic ASL while connecting with the culture. All content is checked and supervised by PhD Deaf Linguist.',
    color: 'bg-asl-blue/10',
  },
  {
    icon: (
      <svg className="w-12 h-12 text-asl-peach" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
      </svg>
    ),
    title: 'Focus on Sentences',
    description: 'We teach complete phrases rather than just individual signs, helping you communicate effectively faster.',
    color: 'bg-asl-peach/10',
  },
  {
    icon: (
      <svg className="w-12 h-12 text-asl-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: 'Built-in Dictionary',
    description: 'Quickly find any sign and create personalized collections to practice and master the ones you need.',
    color: 'bg-asl-mint/10',
  },
  {
    icon: (
      <svg className="w-12 h-12 text-asl-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Diverse Signers',
    description: 'Gain insights into regional variations and personal signing styles from a variety of instructors.',
    color: 'bg-asl-blue/10',
  },
  {
    icon: (
      <svg className="w-12 h-12 text-asl-peach" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Adjustable Speed',
    description: 'Master fingerspelling with natural pacing and an option to slow it down for better understanding.',
    color: 'bg-asl-peach/10',
  },
  {
    icon: (
      <svg className="w-12 h-12 text-asl-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
      </svg>
    ),
    title: 'Flexible Learning',
    description: "Study wherever, whenever—it's learning on your terms, fitting into your busy schedule.",
    color: 'bg-asl-mint/10',
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 wave-pattern opacity-10 -z-10"></div>
      <div className="absolute top-0 right-[20%] w-[30%] h-[30%] bg-asl-mint/5 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-[20%] w-[30%] h-[30%] bg-asl-blue/5 blur-3xl rounded-full -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 bg-asl-blue/10 text-asl-blue rounded-full text-sm font-medium mb-4">
              Our Features
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What You'll Get with ASL Bloom
            </h2>
            <p className="text-lg text-gray-600">
              Our app is designed to provide an effective, authentic, and engaging learning experience.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} delay={index * 100} animation="fade-in">
              <div className={cn(
                "glass-card rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
                "border border-gray-100"
              )}>
                <div className={cn(
                  "rounded-2xl w-16 h-16 flex items-center justify-center mb-5",
                  benefit.color
                )}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal animation="fade-in" delay={600}>
          <div className="mt-16 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg max-w-3xl mx-auto border border-gray-100">
              <svg className="text-asl-dark-peach h-12 w-12 mx-auto mb-4 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                "I've only been on it for a couple weeks but I've already learned a lot! The game design is spectacular, and I can redo signs if I need to, which is helpful. This app is great for beginners."
              </p>
              <div className="flex items-center justify-center">
                <div className="h-10 w-10 rounded-full bg-asl-gray flex items-center justify-center">
                  <svg className="h-5 w-5 text-asl-dark-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 016 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="ml-3 text-left">
                  <div className="font-medium text-gray-900">Alex T.</div>
                  <div className="text-sm text-asl-blue">ASL Student</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-in" delay={800}>
          <div className="mt-16 text-center">
            <Button 
              size="lg" 
              variant="peach"
              className="hover:scale-105 transition-transform"
            >
              Start Signing Now
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BenefitsSection;
