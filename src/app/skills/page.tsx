import { Metadata } from 'next';
import SectionContainer from '@/components/sections/SectionContainer';
import Badge from '@/components/ui/Badge';
import { skillsData } from '@/data/skills';

export const metadata: Metadata = {
  title: 'Skills',
  description: 'My technical skills and expertise across various technologies.',
};

export default function SkillsPage() {
  return (
    <>
      <SectionContainer
        title="Skills"
        subtitle="Technical expertise spanning AI/ML, architecture, and leadership"
        className="pt-24"
      >
        <div className="mx-auto max-w-5xl space-y-6">
          {skillsData.map((skillCategory) => (
            <div
              key={skillCategory.category}
              className={`border p-6 ${
                skillCategory.currentFocus
                  ? 'border-primary/50 bg-gradient-to-br from-primary/10 to-transparent shadow-sm'
                  : 'border-border bg-card-bg'
              }`}
            >
              <div className="mb-4 flex items-center gap-3">
                <h3 className="text-xl font-semibold text-foreground">
                  {skillCategory.category}
                </h3>
                {skillCategory.currentFocus && (
                  <Badge variant="primary" className="text-xs">
                    Current Focus
                  </Badge>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((skill) => (
                  <Badge key={skill}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
