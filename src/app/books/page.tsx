import { Metadata } from 'next';
import SectionContainer from '@/components/sections/SectionContainer';
import { booksData } from '@/data/books';
import BooksClient from './BooksClient';

export const metadata: Metadata = {
  title: 'Books',
  description: 'Curated collection of books across various genres.',
};

export default function BooksPage() {
  const allGenres = Array.from(
    new Set(booksData.flatMap((book) => book.genre.split('/').map((g) => g.trim())))
  ).sort();

  return (
    <SectionContainer
      title="Books I've Read"
      subtitle={`A curated collection of ${booksData.length} books across various genres`}
      className="pt-24"
    >
      <BooksClient books={booksData} allGenres={allGenres} />
    </SectionContainer>
  );
}
