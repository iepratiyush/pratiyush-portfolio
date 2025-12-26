import { aboutData } from '@/data/about';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-primary/10 bg-gradient-to-br from-secondary via-background to-secondary">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-accent/5 blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="mb-8 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-2xl font-black text-transparent">
              {aboutData.name}
            </p>
            <p className="text-sm text-muted">
              Building beautiful digital experiences
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {aboutData.socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label={link.name}
              >
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary to-accent opacity-0 blur transition-all group-hover:opacity-20"></div>
                <div className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card-bg/50 backdrop-blur-sm transition-all group-hover:border-primary group-hover:scale-110">
                  <span className="text-xs font-bold text-muted transition-colors group-hover:text-primary">
                    {link.name.substring(0, 2).toUpperCase()}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-primary/10 pt-6 text-center">
          <p className="text-sm text-muted">
            © {currentYear} {aboutData.name}. Crafted with ❤️ and Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
