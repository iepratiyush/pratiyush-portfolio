import { Metadata } from 'next';
import SectionContainer from '@/components/sections/SectionContainer';
import BookCard from '@/components/cards/BookCard';
import { booksData } from '@/data/books';

export const metadata: Metadata = {
  title: 'Book Recommendations',
  description: 'Books I recommend for personal and professional growth.',
};

export default function BooksPage() {
  return (
    <>
      <SectionContainer
        title="Book Recommendations"
        subtitle="Books that shaped my thinking"
        className="pt-24"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {booksData.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
