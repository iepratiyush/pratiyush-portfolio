import { Article } from '@/types';
import Badge from '@/components/ui/Badge';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="border border-border bg-card-bg p-6 transition-colors hover:border-foreground/20">
      <div className="mb-4">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {article.title}
        </h3>

        <p className="mb-3 text-sm text-muted">
          {new Date(article.publishedDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>

        <p className="text-sm text-muted leading-relaxed">{article.description}</p>
      </div>

      {article.tags && article.tags.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <Badge key={tag}>
              {tag}
            </Badge>
          ))}
        </div>
      )}

      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-muted transition-colors hover:text-foreground"
      >
        Read Article →
      </a>
    </div>
  );
}
