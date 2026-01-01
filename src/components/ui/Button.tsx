import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary:
      'bg-primary text-white hover:bg-primary-hover focus:ring-primary',
    secondary:
      'bg-secondary text-foreground hover:bg-border focus:ring-secondary',
    outline:
      'border border-border text-foreground hover:bg-secondary focus:ring-primary',
  };

  const sizeStyles = {
    sm: 'px-3 py-2 text-sm rounded min-h-[40px]',
    md: 'px-4 py-2.5 text-sm rounded min-h-[44px]',
    lg: 'px-6 py-3 text-base rounded min-h-[48px]',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
