import { Metadata } from 'next';
import SectionContainer from '@/components/sections/SectionContainer';
import { projectsData } from '@/data/projects';
import { ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Browse my portfolio of projects at Texas Instruments.',
};

export default function ProjectsPage() {
  const sortedProjects = [...projectsData].sort((a, b) => {
    const getEndDate = (duration: string) => {
      if (duration.includes('Present')) return new Date();
      const parts = duration.split(' - ');
      return new Date(parts[1]);
    };
    return getEndDate(b.duration).getTime() - getEndDate(a.duration).getTime();
  });

  return (
    <>
      <SectionContainer
        title="Projects"
        subtitle={`Enterprise and personal projects - ${sortedProjects.length} total`}
        className="pt-24"
      >
        <div className="mx-auto max-w-5xl">
          <div className="space-y-6">
            {sortedProjects.map((project) => (
              <div
                key={project.id}
                className="group border border-border bg-card-bg p-4 transition-all duration-200 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-md md:p-6"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="mb-2 text-lg font-semibold text-foreground md:text-xl">
                          {project.link ? (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group inline-flex items-center gap-1.5 transition-colors hover:text-primary"
                            >
                              {project.title}
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          ) : (
                            project.title
                          )}
                        </h3>
                        <div className="mb-3 flex flex-wrap items-center gap-2 text-sm">
                          <span className="font-medium text-foreground">
                            {project.role}
                          </span>
                          <span className="text-muted">•</span>
                          <span className="text-muted">{project.duration}</span>
                        </div>
                        <div className="mb-4">
                          <span className="inline-block rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                            {project.organization}
                          </span>
                        </div>
                        <p className="mb-4 text-base leading-relaxed text-muted md:text-sm">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
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
