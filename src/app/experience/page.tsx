import { Metadata } from 'next';
import SectionContainer from '@/components/sections/SectionContainer';
import ExperienceCard from '@/components/cards/ExperienceCard';
import { experienceData } from '@/data/experience';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'My professional work experience and career journey.',
};

export default function ExperiencePage() {
  const sortedExperience = [...experienceData].sort((a, b) => {
    const dateA = a.endDate === 'Present' ? new Date() : new Date(a.endDate);
    const dateB = b.endDate === 'Present' ? new Date() : new Date(b.endDate);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <>
      <SectionContainer
        title="Experience"
        subtitle="My professional journey"
        className="pt-24"
      >
        <div className="mx-auto max-w-3xl">
          {sortedExperience.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
