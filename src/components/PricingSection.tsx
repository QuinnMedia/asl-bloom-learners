
import React from 'react';
import ScrollReveal from './ScrollReveal';
import Button from './Button';
import { cn } from '@/lib/utils';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-asl-gray/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-asl-blue/5 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-asl-peach/5 blur-3xl rounded-full -z-10"></div>

      <div className="container mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <ScrollReveal>
              <div className="inline-block px-4 py-1.5 bg-asl-blue/10 text-asl-blue rounded-full text-sm font-medium mb-4">
                Why Choose ASL Bloom
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Start Your Learning Journey
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Everyone deserves access to sign language education. That's why we offer:
              </p>
              
              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="bg-asl-blue/10 rounded-full p-2 flex-shrink-0">
                    <svg className="w-6 h-6 text-asl-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Free Intro Lessons: Start your journey with no commitment.</p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-asl-blue/10 rounded-full p-2 flex-shrink-0">
                    <svg className="w-6 h-6 text-asl-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Free Access to the Dictionary: Explore and create your own collections of signs.</p>
                </div>
              </div>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  variant="primary"
                  className="hover:scale-105 transition-transform"
                >
                  Download Now
                </Button>
                
                <div className="mt-6 flex gap-4 w-full">
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
              </div>
            </ScrollReveal>
          </div>
          
          <div className="md:col-span-7">
            <ScrollReveal animation="fade-in-left">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <div className="p-6 md:p-8 bg-gradient-to-r from-asl-blue to-asl-blue/80 text-white">
                  <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                    Why Choose ASL Bloom
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">ASL Bloom Advocate</h3>
                  <p className="opacity-90">Upgrade for exclusive benefits and support the Deaf community</p>
                </div>
                
                <div className="p-6 md:p-8">
                  <h4 className="text-xl font-medium mb-6">What is an Advocate?</h4>
                  
                  <div className="space-y-5">
                    <div className="flex items-start space-x-4">
                      <div className="bg-asl-blue/10 rounded-full p-2 flex-shrink-0">
                        <svg className="w-6 h-6 text-asl-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">Daily Dedication</h5>
                        <p className="text-gray-600">Advocates are more likely to dedicate time each day to learning, ensuring steady progress.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-asl-blue/10 rounded-full p-2 flex-shrink-0">
                        <svg className="w-6 h-6 text-asl-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">Higher Accuracy</h5>
                        <p className="text-gray-600">With tailored lessons and advanced modules, premium members achieve higher accuracy in tests.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-asl-blue/10 rounded-full p-2 flex-shrink-0">
                        <svg className="w-6 h-6 text-asl-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">Confidence Boost</h5>
                        <p className="text-gray-600">Our premium users report feeling more confident when signing, thanks to comprehensive practice and feedback.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-asl-blue/10 rounded-full p-2 flex-shrink-0">
                        <svg className="w-6 h-6 text-asl-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">Community Impact</h5>
                        <p className="text-gray-600">Your subscription helps provide free access to sign language education for underserved communities, making a real difference globally.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Button 
                      size="lg" 
                      variant="peach"
                      className="w-full hover:scale-[1.02] transition-transform"
                    >
                      Upgrade to Premium
                    </Button>
                    <p className="text-center text-sm text-gray-500 mt-4">
                      Unlock the full potential of your learning journey
                    </p>
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

export default PricingSection;
