import { aboutData } from '@/data/about';
import Button from '@/components/ui/Button';
import FloatingOrbs from '@/components/ui/FloatingOrbs';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <FloatingOrbs />

      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="container relative z-10 mx-auto flex min-h-screen items-center px-4">
        <div className="w-full">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
            <div className="flex-shrink-0">
              <div className="group relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary via-accent to-accent-alt opacity-75 blur-2xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-3xl"></div>
                <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-primary/20 shadow-2xl shadow-primary/30 transition-all duration-500 group-hover:border-primary/40 group-hover:scale-105 md:h-64 md:w-64 lg:h-80 lg:w-80">
                  <Image
                    src="/profile.JPG"
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left">
            <div className="mb-8 inline-flex animate-fade-in items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm font-semibold text-primary backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Available for opportunities
            </div>

            <h1 className="mb-8 text-5xl font-black leading-none tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Hi, I'm
              </span>
              <span className="block text-primary">
                {aboutData.name}
              </span>
            </h1>

            <p className="mb-6 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
              <span className="relative inline-block">
                {aboutData.title}
                <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-primary to-accent"></span>
              </span>
            </p>

            <p className="mb-12 mx-auto max-w-3xl text-lg leading-relaxed text-muted sm:text-xl lg:mx-0 lg:text-2xl">
              {aboutData.bio}
            </p>

            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <a href="#projects">
                <Button size="lg" className="group relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <span>View My Work</span>
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg" className="group">
                  <span className="flex items-center gap-2">
                    <span>Let's Connect</span>
                    <span className="text-xl">✨</span>
                  </span>
                </Button>
              </a>
            </div>

            <div className="mt-16 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
              <span className="text-sm font-medium text-muted">
                Connect with me
              </span>
              {aboutData.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  title={link.name}
                >
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary to-accent opacity-0 blur transition group-hover:opacity-20"></div>
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-border bg-card-bg/50 backdrop-blur-sm transition-all group-hover:border-primary group-hover:scale-110">
                    <span className="text-sm font-bold text-muted transition-colors group-hover:text-primary">
                      {link.name.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                </a>
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
    </section>
  );
}
