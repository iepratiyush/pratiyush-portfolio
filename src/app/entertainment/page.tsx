import { Metadata } from 'next';
import SectionContainer from '@/components/sections/SectionContainer';
import { entertainmentData } from '@/data/entertainment';
import EntertainmentClient from './EntertainmentClient';

export const metadata: Metadata = {
  title: 'Entertainment',
  description: 'Movies and TV series recommendations.',
};

export default function EntertainmentPage() {
  const allGenres = Array.from(
    new Set(entertainmentData.flatMap((item) => item.genre.split('/').map((g) => g.trim())))
  ).sort();

  return (
    <SectionContainer
      title="Entertainment"
      subtitle={`Movies and TV series I recommend - ${entertainmentData.length} total`}
      className="pt-24"
    >
      <EntertainmentClient entertainment={entertainmentData} allGenres={allGenres} />
    </SectionContainer>
  );
}
