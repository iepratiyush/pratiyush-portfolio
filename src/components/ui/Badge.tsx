import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning';
  className?: string;
}

export default function Badge({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) {
  const variantStyles = {
    default:
      'bg-secondary text-foreground border border-border hover:border-primary transition-colors',
    primary:
      'bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/20 hover:border-primary/40 transition-all',
    success:
      'bg-green-100 text-green-700 border border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800',
    warning:
      'bg-yellow-100 text-yellow-700 border border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
