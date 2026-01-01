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
    <section id={id} className={`py-20 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="max-w-2xl text-lg text-muted md:text-xl">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
