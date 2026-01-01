'use client';

import { useState, useMemo } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { Book } from '@/types';
import SearchInput from '@/components/filters/SearchInput';
import MultiSelectFilter from '@/components/filters/MultiSelectFilter';
import Button from '@/components/ui/Button';

const ITEMS_PER_PAGE = 20;

interface BooksClientProps {
  books: Book[];
  allGenres: string[];
}

export default function BooksClient({ books, allGenres }: BooksClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [showFilters, setShowFilters] = useState(false);

  const filteredBooks = useMemo(() => {
    let filtered = [...books];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query) ||
          (book.description && book.description.toLowerCase().includes(query))
      );
    }

    if (selectedGenres.length > 0) {
      filtered = filtered.filter((book) => {
        const bookGenres = book.genre.split('/').map((g) => g.trim());
        return selectedGenres.every((genre) => bookGenres.includes(genre));
      });
    }

    return filtered;
  }, [books, searchQuery, selectedGenres]);

  const visibleBooks = filteredBooks.slice(0, visibleCount);
  const hasMore = visibleCount < filteredBooks.length;
  const activeFiltersCount = (searchQuery ? 1 : 0) + (selectedGenres.length > 0 ? 1 : 0);

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedGenres([]);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-8 space-y-4 border border-border bg-card-bg p-4 md:p-6">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex w-full items-center justify-between md:hidden"
        >
          <h3 className="text-sm font-semibold text-foreground">
            Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
          </h3>
          <svg
            className={`h-5 w-5 transition-transform ${showFilters ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div className="hidden flex-col items-start justify-between gap-3 md:flex sm:flex-row sm:items-center">
          <h3 className="text-sm font-semibold text-foreground">
            Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
          </h3>
          {activeFiltersCount > 0 && (
            <button
              onClick={clearAllFilters}
              className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
            >
              <X className="h-4 w-4" />
              Clear all
            </button>
          )}
        </div>

        <div className={`grid gap-4 sm:grid-cols-2 ${!showFilters ? 'hidden md:grid' : ''}`}>
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search books, authors..."
          />
          <MultiSelectFilter
            label="Genres"
            options={allGenres}
            selected={selectedGenres}
            onChange={setSelectedGenres}
          />
        </div>
      </div>

      {filteredBooks.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-muted">No books found matching your filters.</p>
        </div>
      ) : (
        <>
          <div className="mb-6 text-sm text-muted">
            Showing {visibleBooks.length} of {filteredBooks.length} books
          </div>

          <div className="space-y-6">
            {visibleBooks.map((book) => (
              <div
                key={book.id}
                className="group border border-border bg-card-bg p-4 transition-all duration-200 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-md md:p-6"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <div className="mb-2 flex flex-wrap items-baseline gap-2">
                          <h3 className="text-lg font-semibold text-foreground md:text-xl">
                            {book.bookUrl ? (
                              <a
                                href={book.bookUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground/80"
                              >
                                {book.title}
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            ) : (
                              book.title
                            )}
                          </h3>
                          <span className="text-sm text-muted">by</span>
                          <span className="text-base font-medium text-foreground">
                            {book.authorUrl ? (
                              <a
                                href={book.authorUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 transition-colors hover:text-foreground/80"
                              >
                                {book.author}
                                <ExternalLink className="h-3.5 w-3.5" />
                              </a>
                            ) : (
                              book.author
                            )}
                          </span>
                        </div>
                        <div className="mb-3 flex flex-wrap gap-2">
                          {book.genre.split('/').map((genre, idx) => (
                            <span
                              key={idx}
                              className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground"
                            >
                              {genre.trim()}
                            </span>
                          ))}
                        </div>
                        {book.description && (
                          <p className="text-sm leading-relaxed text-muted">
                            {book.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="mt-8 text-center">
              <Button
                variant="outline"
                onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
              >
                Load More
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
