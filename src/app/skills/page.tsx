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
        subtitle="Technologies and tools I work with"
        className="pt-24"
      >
        <div className="mx-auto max-w-4xl space-y-8">
          {skillsData.map((skillCategory) => (
            <div
              key={skillCategory.category}
              className="rounded-lg border border-card-border bg-card-bg p-6 shadow-sm"
            >
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillCategory.items.map((skill) => (
                  <Badge key={skill} variant="primary">
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
