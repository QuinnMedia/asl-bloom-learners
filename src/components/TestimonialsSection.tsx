
import React from 'react';
import ScrollReveal from './ScrollReveal';
import { cn } from '@/lib/utils';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-asl-blue/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-asl-peach/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute inset-0 wave-pattern opacity-10 -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1.5 bg-asl-blue/10 text-asl-blue rounded-full text-sm font-medium mb-4">
                Why Choose ASL Bloom
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted by Learners Worldwide
              </h2>
            </div>
            
            <div className="relative">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl border border-gray-200/50">
                <svg className="text-asl-blue h-12 w-12 mb-4 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-xl md:text-2xl text-gray-700 mb-8 relative z-10">
                  "Great for those of us starting without any experience. It's great that the very first lessons are everyday greetings and simple introductions."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-asl-gray flex items-center justify-center">
                    <svg className="h-6 w-6 text-asl-dark-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">Jamie R.</div>
                    <div className="text-sm text-asl-blue">ASL Beginner</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <div className="aspect-w-16 aspect-h-9 bg-asl-gray">
                  <div className="flex items-center justify-center w-full h-full">
                    <div className="text-center p-6">
                      <svg className="mx-auto h-20 w-20 text-asl-dark-gray/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <p className="mt-4 text-asl-dark-gray">Video demonstration of the app with real people</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center mt-6 text-gray-500 text-sm">
                Video showing the app in use with real Deaf signers - a feature our users have specifically requested
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
