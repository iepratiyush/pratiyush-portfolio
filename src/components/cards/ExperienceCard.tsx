import { Experience } from '@/types';
import Badge from '@/components/ui/Badge';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="border-l-2 border-border pl-4 pb-6 md:pl-6 md:pb-8">
      <div className="mb-3 md:mb-4">
        <h3 className="text-base font-semibold text-foreground md:text-lg">
          {experience.position}
        </h3>
        <p className="text-sm font-medium text-foreground mt-1 md:text-base">
          {experience.company}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted md:gap-3 md:text-sm">
          <span>{experience.startDate} - {experience.endDate}</span>
          {experience.location && (
            <>
              <span>•</span>
              <span>{experience.location}</span>
            </>
          )}
        </div>
      </div>

      {experience.description && (
        <div
          className="mb-3 text-xs text-muted leading-relaxed md:mb-4 md:text-sm"
          dangerouslySetInnerHTML={{ __html: experience.description }}
        />
      )}

      <div className="flex flex-wrap gap-1.5 md:gap-2">
        {experience.technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
    </div>
  );
}
