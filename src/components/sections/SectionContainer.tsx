import { ReactNode } from 'react';

interface SectionContainerProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function SectionContainer({
  id,
  title,
  subtitle,
  children,
  className = '',
}: SectionContainerProps) {
  return (
    <section id={id} className={`py-16 md:py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="max-w-2xl text-base text-muted">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
