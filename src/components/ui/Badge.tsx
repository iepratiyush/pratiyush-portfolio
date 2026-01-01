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
      'bg-primary/10 text-primary border border-primary/30 font-semibold',
    success:
      'bg-secondary text-foreground border border-border',
    warning:
      'bg-secondary text-foreground border border-border',
  };

  return (
    <span
      className={`inline-flex min-h-[32px] items-center break-words rounded px-3 py-1.5 text-xs font-medium md:py-1 ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
