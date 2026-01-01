import { Metadata } from 'next';
import SectionContainer from '@/components/sections/SectionContainer';
import { publicationsData } from '@/data/publications';
import { Award, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Publications & Awards',
  description: 'My published work, research papers, and awards.',
};

export default function PublicationsPage() {
  const sortedPublications = [...publicationsData].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <>
      <SectionContainer
        title="Publications & Awards"
        subtitle={`Conference presentations and recognitions - ${sortedPublications.length} total`}
        className="pt-24"
      >
        <div className="mx-auto max-w-5xl">
          <div className="space-y-6">
            {sortedPublications.map((pub) => (
              <div
                key={pub.id}
                className="group border border-border bg-card-bg p-4 transition-all duration-200 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-md md:p-6"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-semibold text-foreground md:text-xl">
                            {pub.title}
                          </h3>
                        </div>
                        <div className="mb-3 flex flex-wrap gap-2">
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs font-medium ${
                              pub.type === 'conference'
                                ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                                : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                            }`}
                          >
                            {pub.type === 'conference' ? (
                              <FileText className="h-3.5 w-3.5" />
                            ) : (
                              <Award className="h-3.5 w-3.5" />
                            )}
                            {pub.type === 'conference' ? 'Conference' : 'Award'}
                          </span>
                          {pub.organization && (
                            <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                              {pub.organization}
                            </span>
                          )}
                          <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                            {new Date(pub.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                            })}
                          </span>
                        </div>
                        {pub.venue && (
                          <p className="mb-2 text-sm font-medium text-foreground">
                            {pub.venue}
                          </p>
                        )}
                        {pub.description && (
                          <p className="text-sm leading-relaxed text-muted">
                            {pub.description}
                          </p>
                        )}
                        {pub.url && (
                          <a
                            href={pub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-block text-sm text-foreground transition-colors hover:text-foreground/80"
                          >
                            View Publication →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
