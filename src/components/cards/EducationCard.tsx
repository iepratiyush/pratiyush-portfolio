import { Education } from '@/types';

interface EducationCardProps {
  education: Education;
}

export default function EducationCard({ education }: EducationCardProps) {
  return (
    <div className="border-l-2 border-border pl-4 pb-6 md:pl-6 md:pb-8">
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
          <ul className="list-disc list-inside space-y-1 text-xs text-muted md:text-sm">
            {education.achievements.map((achievement, idx) => (
              <li key={idx}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
