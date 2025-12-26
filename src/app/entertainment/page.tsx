import { Metadata } from 'next';
import SectionContainer from '@/components/sections/SectionContainer';
import EntertainmentCard from '@/components/cards/EntertainmentCard';
import { entertainmentData } from '@/data/entertainment';

export const metadata: Metadata = {
  title: 'Entertainment Recommendations',
  description: 'Movies and TV series I recommend.',
};

export default function EntertainmentPage() {
  const movies = entertainmentData.filter((item) => item.type === 'movie');
  const series = entertainmentData.filter((item) => item.type === 'series');

  return (
    <>
      <SectionContainer
        title="Entertainment"
        subtitle="Movies and TV series I recommend"
        className="pt-24"
      >
        <div className="space-y-12">
          <div>
            <h3 className="mb-6 text-2xl font-bold text-foreground">Movies</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {movies.map((item) => (
                <EntertainmentCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-bold text-foreground">
              TV Series
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {series.map((item) => (
                <EntertainmentCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
