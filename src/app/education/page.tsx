import { Metadata } from 'next';
import SectionContainer from '@/components/sections/SectionContainer';
import EducationCard from '@/components/cards/EducationCard';
import { educationData } from '@/data/education';

export const metadata: Metadata = {
  title: 'Education',
  description: 'My academic background and educational qualifications.',
};

export default function EducationPage() {
  return (
    <>
      <SectionContainer
        title="Education"
        subtitle="Academic background and achievements"
        className="pt-24"
      >
        <div className="mx-auto max-w-3xl">
          {educationData.map((edu) => (
            <EducationCard key={edu.id} education={edu} />
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
