import { Experience } from '@/types';
import Badge from '@/components/ui/Badge';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="border-l-2 border-border pl-6 pb-8">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">
          {experience.position}
        </h3>
        <p className="text-base font-medium text-foreground mt-1">
          {experience.company}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted">
          <span>{experience.startDate} - {experience.endDate}</span>
          {experience.location && (
            <>
              <span>•</span>
              <span>{experience.location}</span>
            </>
          )}
        </div>
      </div>

      <p className="mb-4 text-sm text-muted leading-relaxed">
        {experience.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
    </div>
  );
}
