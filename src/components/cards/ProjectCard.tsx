import { Project } from '@/types';
import Badge from '@/components/ui/Badge';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-border bg-card-bg p-6 transition-colors hover:border-foreground/20">
      <div className="mb-4">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-foreground">
            {project.title}
          </h3>
          {project.featured && (
            <span className="text-xs font-medium text-muted">
              Featured
            </span>
          )}
        </div>
      </div>

      <p className="mb-4 text-sm text-muted leading-relaxed">
        {project.description}
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Badge key={tech}>
            {tech}
          </Badge>
        ))}
      </div>

      <div className="flex gap-4 text-sm">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
          >
            View Code →
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  );
}
