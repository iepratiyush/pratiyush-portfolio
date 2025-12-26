import { Article } from '@/types';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-card-border bg-card-bg/50 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/20">
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-accent/20 to-accent-alt/20 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-30"></div>

      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/0 via-accent-alt/0 to-primary/0 opacity-0 transition-opacity duration-500 group-hover:opacity-10"></div>

      <div className="relative z-10">
        <div className="mb-6">
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-alt shadow-lg shadow-accent/30">
            <span className="text-2xl">✍️</span>
          </div>

          <h3 className="mb-3 text-2xl font-black text-foreground transition-colors group-hover:text-accent">
            {article.title}
          </h3>

          <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-muted">
            <span>📅</span>
            <span>
              {new Date(article.publishedDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </p>

          <p className="text-base leading-relaxed text-muted">{article.description}</p>
        </div>

        {article.tags && article.tags.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <Badge key={tag} variant="primary">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm" className="transition-transform hover:scale-105">
            <span className="flex items-center gap-2">
              <span>📖</span>
              <span>Read Article</span>
            </span>
          </Button>
        </a>
      </div>
    </div>
  );
}
