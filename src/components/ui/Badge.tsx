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
      'bg-secondary text-muted border border-border',
    primary:
      'bg-secondary text-foreground border border-border',
    success:
      'bg-secondary text-foreground border border-border',
    warning:
      'bg-secondary text-foreground border border-border',
  };

  return (
    <span
      className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-medium md:py-1 ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
