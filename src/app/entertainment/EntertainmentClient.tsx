'use client';

import { useState, useMemo } from 'react';
import { Film, Tv, ExternalLink, Star, X } from 'lucide-react';
import { Entertainment } from '@/types';
import SearchInput from '@/components/filters/SearchInput';
import MultiSelectFilter from '@/components/filters/MultiSelectFilter';
import SelectFilter from '@/components/filters/SelectFilter';
import Button from '@/components/ui/Button';

const ITEMS_PER_PAGE = 20;

const typeOptions = [
  { value: 'all', label: 'All' },
  { value: 'movie', label: 'Movies' },
  { value: 'series', label: 'TV Series' },
];

const sortOptions = [
  { value: 'year-desc', label: 'Year (Newest First)' },
  { value: 'year-asc', label: 'Year (Oldest First)' },
  { value: 'rating-desc', label: 'Rating (Highest First)' },
  { value: 'rating-asc', label: 'Rating (Lowest First)' },
];

interface EntertainmentClientProps {
  entertainment: Entertainment[];
  allGenres: string[];
}

export default function EntertainmentClient({ entertainment, allGenres }: EntertainmentClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('year-desc');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [showFilters, setShowFilters] = useState(false);

  const filteredAndSortedData = useMemo(() => {
    let filtered = [...entertainment];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          (item.description && item.description.toLowerCase().includes(query))
      );
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter((item) => item.type === selectedType);
    }

    if (selectedGenres.length > 0) {
      filtered = filtered.filter((item) => {
        const itemGenres = item.genre.split('/').map((g) => g.trim());
        return selectedGenres.every((genre) => itemGenres.includes(genre));
      });
    }

    filtered.sort((a, b) => {
      if (sortBy === 'year-desc') {
        return (b.year || 0) - (a.year || 0);
      } else if (sortBy === 'year-asc') {
        return (a.year || 0) - (b.year || 0);
      } else if (sortBy === 'rating-desc') {
        return (b.rating || 0) - (a.rating || 0);
      } else {
        return (a.rating || 0) - (b.rating || 0);
      }
    });

    return filtered;
  }, [entertainment, searchQuery, selectedGenres, selectedType, sortBy]);

  const visibleItems = filteredAndSortedData.slice(0, visibleCount);
  const hasMore = visibleCount < filteredAndSortedData.length;
  const activeFiltersCount =
    (searchQuery ? 1 : 0) +
    (selectedGenres.length > 0 ? 1 : 0) +
    (selectedType !== 'all' ? 1 : 0);

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedGenres([]);
    setSelectedType('all');
    setSortBy('year-desc');
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

        <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ${!showFilters ? 'hidden md:grid' : ''}`}>
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search..."
          />
          <SelectFilter
            label="Type"
            value={selectedType}
            options={typeOptions}
            onChange={setSelectedType}
          />
          <MultiSelectFilter
            label="Genres"
            options={allGenres}
            selected={selectedGenres}
            onChange={setSelectedGenres}
          />
          <SelectFilter
            label="Sort by"
            value={sortBy}
            options={sortOptions}
            onChange={setSortBy}
          />
        </div>
      </div>

      {filteredAndSortedData.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-muted">No items found matching your filters.</p>
        </div>
      ) : (
        <>
          <div className="mb-6 text-sm text-muted">
            Showing {visibleItems.length} of {filteredAndSortedData.length} items
          </div>

          <div className="space-y-6">
            {visibleItems.map((item) => (
              <div
                key={item.id}
                className="group border border-border bg-card-bg p-4 transition-all duration-200 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-md md:p-6"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <div className="mb-2 flex flex-wrap items-baseline gap-2">
                          <h3 className="text-lg font-semibold text-foreground md:text-xl">
                            {item.url ? (
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground/80"
                              >
                                {item.title}
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            ) : (
                              item.title
                            )}
                          </h3>
                          {item.year && (
                            <span className="text-sm text-muted">
                              ({item.year})
                            </span>
                          )}
                          {item.rating && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-yellow-500/10 px-2.5 py-0.5 text-xs font-medium text-yellow-700 dark:text-yellow-400">
                              <Star className="h-3 w-3 fill-current" />
                              {item.rating}
                            </span>
                          )}
                        </div>
                        <div className="mb-3 flex flex-wrap gap-2">
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs font-medium ${
                              item.type === 'movie'
                                ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                                : 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
                            }`}
                          >
                            {item.type === 'movie' ? (
                              <Film className="h-3.5 w-3.5" />
                            ) : (
                              <Tv className="h-3.5 w-3.5" />
                            )}
                            {item.type === 'movie' ? 'Movie' : 'TV Series'}
                          </span>
                          {item.genre.split('/').map((genre, idx) => (
                            <span
                              key={idx}
                              className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground"
                            >
                              {genre.trim()}
                            </span>
                          ))}
                        </div>
                        {item.description && (
                          <p className="text-sm leading-relaxed text-muted">
                            {item.description}
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
