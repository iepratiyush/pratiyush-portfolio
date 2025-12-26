import { Project } from '@/types';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-card-border bg-card-bg/50 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
      <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-30"></div>

      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/0 via-accent/0 to-accent-alt/0 opacity-0 transition-opacity duration-500 group-hover:opacity-10"></div>

      <div className="relative z-10">
        <div className="mb-6 flex items-start justify-between">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30">
            <span className="text-3xl">💼</span>
          </div>
          {project.featured && (
            <div className="rounded-full bg-gradient-to-r from-accent to-accent-alt px-3 py-1 text-xs font-bold text-white">
              Featured
            </div>
          )}
        </div>

        <div className="mb-6">
          <h3 className="mb-3 text-2xl font-black text-foreground transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          <p className="text-base leading-relaxed text-muted">
            {project.description}
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="primary">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button
                variant="outline"
                size="sm"
                className="w-full transition-transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <span>→</span>
                  <span>Code</span>
                </span>
              </Button>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button
                variant="primary"
                size="sm"
                className="w-full transition-transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <span>🚀</span>
                  <span>Demo</span>
                </span>
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
