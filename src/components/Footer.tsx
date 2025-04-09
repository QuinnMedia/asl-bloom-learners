import React from 'react';
import { cn } from '@/lib/utils';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center mb-5">
              <img 
                src="/lovable-uploads/dcb53618-e82a-454e-ad32-4a8db2b44520.png" 
                alt="ASL Bloom Logo" 
                className="h-10 mr-2"
              />
            </div>
            <p className="text-gray-600 mb-6">
              Your fun, beginner friendly path to mastering American Sign Language.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-asl-gray flex items-center justify-center text-asl-dark-gray hover:bg-asl-blue hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636C20.514,6.135,21.699,4.943,22,3.999z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-asl-gray flex items-center justify-center text-asl-dark-gray hover:bg-asl-blue hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-asl-gray flex items-center justify-center text-asl-dark-gray hover:bg-asl-blue hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.375,3.25H7.625C5.066,3.25,3,5.316,3,7.875v8.25c0,2.559,2.066,4.625,4.625,4.625h8.75c2.559,0,4.625-2.066,4.625-4.625v-8.25C21,5.316,18.934,3.25,16.375,3.25z M19.25,16.125c0,1.59-1.285,2.875-2.875,2.875h-8.75c-1.59,0-2.875-1.285-2.875-2.875v-8.25c0-1.59,1.285-2.875,2.875-2.875h8.75c1.59,0,2.875,1.285,2.875,2.875V16.125z" />
                  <path d="M12,7.5c-2.485,0-4.5,2.015-4.5,4.5s2.015,4.5,4.5,4.5s4.5-2.015,4.5-4.5S14.485,7.5,12,7.5z M12,14.5c-1.381,0-2.5-1.119-2.5-2.5s1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5S13.381,14.5,12,14.5z" />
                  <circle cx="16.5" cy="7.5" r="1" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-asl-gray flex items-center justify-center text-asl-dark-gray hover:bg-asl-blue hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.3,8.559V9.007H19V8.559H18.3z M15.714,3H8.286C4.928,3,2.117,5.811,2.117,9.169v5.663c0,3.358,2.811,6.169,6.169,6.169h7.428c3.358,0,6.169-2.811,6.169-6.169V9.169C21.883,5.811,19.072,3,15.714,3z M8.681,17.303c-0.422,0-0.762-0.342-0.762-0.763v-5.579c0-0.422,0.34-0.765,0.762-0.765c0.422,0,0.766,0.344,0.766,0.765v5.579C9.447,16.961,9.103,17.303,8.681,17.303z M10.13,17.303c-0.422,0-0.766-0.342-0.766-0.763v-5.579c0-0.422,0.344-0.765,0.766-0.765c0.42,0,0.763,0.344,0.763,0.765v5.579C10.893,16.961,10.55,17.303,10.13,17.303z M11.086,19.236c-0.156,0-0.28-0.125-0.28-0.281v-7.354c0-0.156,0.125-0.281,0.28-0.281s0.28,0.125,0.28,0.281v7.354C11.366,19.111,11.242,19.236,11.086,19.236z M13.346,19.516c-0.055,0-0.109-0.008-0.162-0.025l-1.102-0.347c-0.149-0.046-0.23-0.207-0.185-0.356c0.047-0.149,0.208-0.229,0.357-0.184l1.102,0.347c0.149,0.046,0.23,0.207,0.184,0.356C13.578,19.44,13.465,19.516,13.346,19.516z M14.236,19.137l-0.31-0.327c-0.105-0.109-0.101-0.285,0.008-0.389c0.109-0.105,0.286-0.101,0.389,0.008l0.308,0.326c0.105,0.111,0.102,0.285-0.008,0.391C14.521,19.252,14.341,19.247,14.236,19.137z M14.829,18.003c-0.422,0-0.764-0.342-0.764-0.763v-5.579c0-0.422,0.342-0.765,0.764-0.765c0.42,0,0.763,0.344,0.763,0.765v5.579C15.592,17.661,15.249,18.003,14.829,18.003z M16.276,18.003c-0.422,0-0.765-0.342-0.765-0.763v-5.579c0-0.422,0.343-0.765,0.765-0.765c0.42,0,0.763,0.344,0.763,0.765v5.579C17.039,17.661,16.696,18.003,16.276,18.003z M19,8.257h-1.809V8.559V9.01v0.184h1.6c0.222,0,0.403-0.182,0.403-0.404c0-0.222-0.181-0.403-0.403-0.403h-0.018C18.8,8.333,18.838,8.257,19,8.257z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-asl-blue transition-colors">Home</a></li>
              <li><a href="#features" className="text-gray-600 hover:text-asl-blue transition-colors">Features</a></li>
              <li><a href="#benefits" className="text-gray-600 hover:text-asl-blue transition-colors">Benefits</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-asl-blue transition-colors">Pricing</a></li>
              <li><a href="#team" className="text-gray-600 hover:text-asl-blue transition-colors">Team</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-5">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-asl-blue transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-asl-blue transition-colors">Support</a></li>
              <li><a href="#" className="text-gray-600 hover:text-asl-blue transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-asl-blue transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-600 hover:text-asl-blue transition-colors">Dictionary</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-5">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-asl-blue mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-600">contact@aslbloom.com</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-asl-blue mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-asl-blue mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-600">123 Main Street<br />San Francisco, CA 94105</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ASL Bloom. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 text-sm hover:text-asl-blue transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-asl-blue transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 text-sm hover:text-asl-blue transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
