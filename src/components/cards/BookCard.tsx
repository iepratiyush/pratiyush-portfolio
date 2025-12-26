import { Book } from '@/types';

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-card-border bg-card-bg/50 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent-alt/20">
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br from-accent-alt/20 to-primary/20 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-30"></div>

      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-alt/0 via-primary/0 to-accent/0 opacity-0 transition-opacity duration-500 group-hover:opacity-10"></div>

      <div className="relative z-10">
        <div className="mb-6">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-alt to-primary shadow-lg shadow-accent-alt/30">
            <span className="text-3xl">📚</span>
          </div>

          <h3 className="mb-2 text-2xl font-black text-foreground transition-colors group-hover:text-accent-alt">{book.title}</h3>
          <p className="mb-1 text-lg font-bold text-accent">{book.author}</p>
          <p className="inline-flex rounded-full bg-accent-alt/10 px-3 py-1 text-sm font-semibold text-accent-alt">{book.genre}</p>
        </div>

        {book.rating && (
          <div className="mb-4 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-accent-alt/5 to-primary/5 p-4">
            <span className="text-2xl">
              {'★'.repeat(book.rating)}
              {'☆'.repeat(5 - book.rating)}
            </span>
            <span className="text-lg font-bold text-accent-alt">
              {book.rating}/5
            </span>
          </div>
        )}

        {book.review && <p className="text-base leading-relaxed text-muted">{book.review}</p>}
      </div>
    </div>
  );
}
