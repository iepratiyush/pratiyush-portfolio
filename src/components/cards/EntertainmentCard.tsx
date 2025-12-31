import { Entertainment } from '@/types';
import Badge from '@/components/ui/Badge';

interface EntertainmentCardProps {
  item: Entertainment;
}

export default function EntertainmentCard({ item }: EntertainmentCardProps) {
  return (
    <div className="border border-border bg-card-bg p-6 transition-colors hover:border-foreground/20">
      <div className="mb-4">
        <div className="mb-3 flex items-start justify-between">
          <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
          {item.year && (
            <span className="text-sm text-muted">{item.year}</span>
          )}
        </div>

        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge>
            {item.type.toUpperCase()}
          </Badge>
          <span className="text-xs text-muted">{item.genre}</span>
        </div>
      </div>

      {item.rating && (
        <div className="mb-4 text-sm text-muted">
          Rating: {item.rating}/5
        </div>
      )}

      {item.review && <p className="text-sm text-muted leading-relaxed">{item.review}</p>}
    </div>
  );
}
