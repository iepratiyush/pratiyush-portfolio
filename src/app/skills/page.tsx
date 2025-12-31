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
        <div className="mx-auto max-w-4xl space-y-6">
          {skillsData.map((skillCategory) => (
            <div
              key={skillCategory.category}
              className="border border-border bg-card-bg p-6"
            >
              <h3 className="mb-4 text-xl font-semibold text-foreground">
                {skillCategory.category}
              </h3>
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
