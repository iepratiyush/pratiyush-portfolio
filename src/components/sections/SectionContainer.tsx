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
    <section id={id} className={`relative overflow-hidden py-20 md:py-24 ${className}`}>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 via-accent/20 to-accent-alt/20 opacity-0 blur-2xl transition-opacity duration-500 hover:opacity-100"></div>
            <h2 className="relative mb-4 text-4xl font-black text-primary md:text-5xl lg:text-6xl">
              {title}
            </h2>
          </div>
          {subtitle && (
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
