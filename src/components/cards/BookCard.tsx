import { Book } from '@/types';

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="border border-border bg-card-bg p-6 transition-colors hover:border-foreground/20">
      <div className="mb-4">
        <h3 className="mb-2 text-lg font-semibold text-foreground">{book.title}</h3>
        <p className="mb-2 text-sm text-foreground">{book.author}</p>
        <p className="text-xs text-muted">{book.genre}</p>
      </div>

      {book.rating && (
        <div className="mb-4 flex items-center gap-2 text-sm text-muted">
          <span>Rating: {book.rating}/5</span>
        </div>
      )}

      {book.review && <p className="text-sm text-muted leading-relaxed">{book.review}</p>}
    </div>
  );
}
