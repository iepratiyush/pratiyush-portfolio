import { Education } from '@/types';

interface EducationCardProps {
  education: Education;
}

export default function EducationCard({ education }: EducationCardProps) {
  return (
    <div className="relative border-l-2 border-primary/30 pl-4 pb-6 md:pl-6 md:pb-8">
      <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-primary bg-background" />
      <div className="mb-3 md:mb-4">
        <h3 className="text-base font-semibold text-foreground md:text-lg">
          {education.institution}
        </h3>
        <p className="text-sm font-medium text-foreground mt-1 md:text-base">
          {education.degree}
          {education.field && `, ${education.field}`}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted md:gap-3 md:text-sm">
          <span>{education.startDate} - {education.endDate}</span>
        </div>
        {education.grade && (
          <p className="mt-2 text-sm text-foreground md:text-base">
            Grade: {education.grade}
          </p>
        )}
      </div>

      {education.activities && (
        <div className="mb-3 text-xs text-muted md:mb-4 md:text-sm">
          <span className="font-medium">Activities and societies: </span>
          {education.activities}
        </div>
      )}

      {education.achievements && education.achievements.length > 0 && (
        <div className="mb-3 md:mb-4">
          <p className="mb-2 text-xs font-medium text-foreground md:text-sm">
            Achievements:
          </p>
          <ul className="space-y-2 text-xs text-muted md:text-sm">
            {education.achievements.map((achievement, idx) => {
              const icon = achievement.toLowerCase().includes('rank') || achievement.toLowerCase().includes('medal')
                ? '🏆'
                : achievement.toLowerCase().includes('gate') || achievement.toLowerCase().includes('scholarship')
                ? '🎓'
                : '📊';
              return (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-base">{icon}</span>
                  <span>{achievement}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
