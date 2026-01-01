'use client';

import { useState, useMemo } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Article } from '@/types';
import SearchInput from '@/components/filters/SearchInput';
import MultiSelectFilter from '@/components/filters/MultiSelectFilter';
import SelectFilter from '@/components/filters/SelectFilter';
import Button from '@/components/ui/Button';

const ITEMS_PER_PAGE = 20;

const sortOptions = [
  { value: 'date-desc', label: 'Newest First' },
  { value: 'date-asc', label: 'Oldest First' },
];

interface ArticlesClientProps {
  articles: Article[];
  allTags: string[];
}

export default function ArticlesClient({ articles, allTags }: ArticlesClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('date-desc');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [showFilters, setShowFilters] = useState(false);

  const filteredAndSortedArticles = useMemo(() => {
    let filtered = [...articles];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.description.toLowerCase().includes(query)
      );
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter((article) =>
        selectedTags.every((tag) => article.tags?.includes(tag))
      );
    }

    filtered.sort((a, b) => {
      if (sortBy === 'date-desc') {
        return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
      } else {
        return new Date(a.publishedDate).getTime() - new Date(b.publishedDate).getTime();
      }
    });

    return filtered;
  }, [articles, searchQuery, selectedTags, sortBy]);

  const visibleArticles = filteredAndSortedArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredAndSortedArticles.length;
  const activeFiltersCount = (searchQuery ? 1 : 0) + (selectedTags.length > 0 ? 1 : 0);

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedTags([]);
    setSortBy('date-desc');
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

        <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${!showFilters ? 'hidden md:grid' : ''}`}>
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search articles..."
          />
          <MultiSelectFilter
            label="Tags"
            options={allTags}
            selected={selectedTags}
            onChange={setSelectedTags}
          />
          <SelectFilter
            label="Sort by"
            value={sortBy}
            options={sortOptions}
            onChange={setSortBy}
          />
        </div>
      </div>

      {filteredAndSortedArticles.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-muted">No articles found matching your filters.</p>
        </div>
      ) : (
        <>
          <div className="mb-6 text-sm text-muted">
            Showing {visibleArticles.length} of {filteredAndSortedArticles.length} articles
          </div>

          <div className="space-y-6">
            {visibleArticles.map((article) => (
              <div
                key={article.id}
                className="group border border-border bg-card-bg p-4 transition-all duration-200 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-md md:p-6"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex-1 space-y-3">
                    <h3 className="text-lg font-semibold text-foreground md:text-xl">
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 transition-colors hover:text-primary"
                      >
                        {article.title}
                        <ExternalLink className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                      </a>
                    </h3>
                    <div className="text-sm text-muted">
                      {new Date(article.publishedDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                    <p className="text-base leading-relaxed text-muted md:text-sm">
                      {article.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {article.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
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
