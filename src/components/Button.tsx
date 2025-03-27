
import React from 'react';
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'subtle' | 'peach' | 'mint';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', icon, iconPosition = 'left', children, ...props }, ref) => {
    const variants = {
      primary: 'bg-asl-peach text-gray-800 hover:bg-asl-peach/90 shadow-md hover:shadow-lg',
      secondary: 'bg-asl-blue text-gray-800 border border-asl-blue hover:bg-asl-blue/90 shadow-sm hover:shadow-md',
      outline: 'bg-transparent border border-asl-peach text-gray-800 hover:bg-asl-peach/10',
      subtle: 'bg-asl-gray text-asl-dark-gray hover:bg-asl-gray/80',
      peach: 'bg-asl-dark-peach text-white hover:bg-asl-dark-peach/90 shadow-md hover:shadow-lg',
      mint: 'bg-asl-mint text-asl-dark-gray hover:bg-asl-mint/90 shadow-md hover:shadow-lg',
    };
    
    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-11 px-4',
      lg: 'h-14 px-6 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-asl-blue/50 focus:ring-offset-2",
          variants[variant],
          sizes[size],
          icon && iconPosition === 'left' && 'pl-10',
          icon && iconPosition === 'right' && 'pr-10',
          className
        )}
        {...props}
      >
        {icon && iconPosition === 'left' && (
          <span className="absolute left-3.5">{icon}</span>
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <span className="absolute right-3.5">{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
