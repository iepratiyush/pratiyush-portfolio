import { Entertainment } from '@/types';
import Badge from '@/components/ui/Badge';

interface EntertainmentCardProps {
  item: Entertainment;
}

export default function EntertainmentCard({ item }: EntertainmentCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-card-border bg-card-bg/50 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20">
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-30"></div>

      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/0 via-accent/0 to-accent-alt/0 opacity-0 transition-opacity duration-500 group-hover:opacity-10"></div>

      <div className="relative z-10">
        <div className="mb-6">
          <div className="mb-4 flex items-start justify-between">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30">
              <span className="text-3xl">{item.type === 'movie' ? '🎬' : '📺'}</span>
            </div>
            {item.year && (
              <div className="rounded-full bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 font-bold text-primary">{item.year}</div>
            )}
          </div>

          <h3 className="mb-3 text-2xl font-black text-foreground transition-colors group-hover:text-primary">{item.title}</h3>

          <div className="mb-3 flex items-center gap-3">
            <Badge variant={item.type === 'movie' ? 'primary' : 'success'}>
              {item.type.toUpperCase()}
            </Badge>
            <span className="rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">{item.genre}</span>
          </div>
        </div>

        {item.rating && (
          <div className="mb-4 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 p-4">
            <span className="text-2xl">
              {'★'.repeat(item.rating)}
              {'☆'.repeat(5 - item.rating)}
            </span>
            <span className="text-lg font-bold text-primary">
              {item.rating}/5
            </span>
          </div>
        )}

        {item.review && <p className="text-base leading-relaxed text-muted">{item.review}</p>}
      </div>
    </div>
  );
}
