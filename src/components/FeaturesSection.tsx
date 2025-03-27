
import React from 'react';
import ScrollReveal from './ScrollReveal';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: (
      <svg className="w-12 h-12 text-asl-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Beginner Friendly',
    description: 'Gain confidence with lessons designed to be fun and approachable.',
    color: 'bg-asl-blue/10',
  },
  {
    icon: (
      <svg className="w-12 h-12 text-asl-peach" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Authentic Learning',
    description: 'Learn from native Deaf teachers for an immersive experience.',
    color: 'bg-asl-peach/10',
  },
  {
    icon: (
      <svg className="w-12 h-12 text-asl-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'International Reach',
    description: 'Join a global community in 10+ countries, from Brazil to Pakistan.',
    color: 'bg-asl-mint/10',
  },
  {
    icon: (
      <svg className="w-12 h-12 text-asl-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Gamified Learning',
    description: 'Earn points, unlock levels, and stay motivated with gamelike features.',
    color: 'bg-asl-blue/10',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-asl-gray/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-asl-blue/5 blur-3xl -z-10"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-asl-peach/5 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 bg-asl-blue/10 text-asl-blue rounded-full text-sm font-medium mb-4">
              Why Choose ASL Bloom
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              When you choose ASL Bloom, you're choosing:
            </h2>
            <p className="text-lg text-gray-600">
              Our app offers a comprehensive approach to learning American Sign Language with a focus on authenticity and engagement.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 100} animation="fade-in">
              <div className={cn(
                "glass-card rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
                "border border-gray-100"
              )}>
                <div className={cn(
                  "rounded-2xl w-16 h-16 flex items-center justify-center mb-5",
                  feature.color
                )}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
