import { Metadata } from 'next';
import SectionContainer from '@/components/sections/SectionContainer';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { publicationsData } from '@/data/publications';

export const metadata: Metadata = {
  title: 'Publications & Awards',
  description: 'My published work, research papers, and awards.',
};

export default function PublicationsPage() {
  return (
    <>
      <SectionContainer
        title="Publications & Awards"
        subtitle="My published work and recognitions"
        className="pt-24"
      >
        <div className="mx-auto max-w-3xl space-y-4">
          {publicationsData.map((pub) => (
            <div
              key={pub.id}
              className="border border-border bg-card-bg p-6 transition-colors hover:border-foreground/20"
            >
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <Badge>
                  {pub.type}
                </Badge>
                <span className="text-sm text-muted">
                  {new Date(pub.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                  })}
                </span>
              </div>

              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {pub.title}
              </h3>
              <p className="mb-4 text-sm text-muted">{pub.description}</p>

              {pub.url && (
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  View Publication →
                </a>
              )}
            </div>
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
