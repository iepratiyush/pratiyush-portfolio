import { Experience } from '@/types';
import Badge from '@/components/ui/Badge';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-card-border bg-card-bg/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/0 via-accent/0 to-accent-alt/0 opacity-0 transition-opacity duration-500 group-hover:opacity-10"></div>

      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-30"></div>

      <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-primary via-accent to-accent-alt transition-all duration-500 group-hover:w-2 group-hover:shadow-lg group-hover:shadow-primary/50"></div>

      <div className="relative z-10 p-8 pl-10">
        <div className="mb-6">
          <h3 className="mb-3 text-2xl font-black text-foreground transition-colors group-hover:text-primary">
            {experience.position}
          </h3>
          <p className="mb-3 text-xl font-bold text-primary">
            {experience.company}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm font-medium text-muted">
            <span className="flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1">
              <span>📅</span>
              <span>{experience.startDate} - {experience.endDate}</span>
            </span>
            {experience.location && (
              <span className="flex items-center gap-2 rounded-full bg-accent/5 px-3 py-1">
                <span>📍</span>
                <span>{experience.location}</span>
              </span>
            )}
          </div>
        </div>

        <p className="mb-6 text-base leading-relaxed text-muted">
          {experience.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <Badge key={tech} variant="primary">{tech}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
