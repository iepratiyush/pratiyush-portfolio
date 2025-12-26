import { Metadata } from 'next';
import Image from 'next/image';
import { aboutData } from '@/data/about';
import SectionContainer from '@/components/sections/SectionContainer';

export const metadata: Metadata = {
  title: 'About Me',
  description: `Learn more about ${aboutData.name} - ${aboutData.title}`,
};

export default function AboutPage() {
  return (
    <>
      <SectionContainer
        title="About Me"
        subtitle={aboutData.title}
        className="pt-24"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 flex flex-col items-center gap-8 md:flex-row md:gap-12">
            <div className="group relative flex-shrink-0">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary via-accent to-accent-alt opacity-50 blur-2xl transition-all duration-500 group-hover:opacity-75"></div>
              <div className="relative h-64 w-64 overflow-hidden rounded-3xl border-4 border-primary/20 shadow-2xl shadow-primary/20 transition-all duration-500 group-hover:border-primary/40 group-hover:scale-105 md:h-80 md:w-80">
                <Image
                  src="/profile.JPG"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="mb-4 text-3xl font-black text-primary md:text-4xl">
                {aboutData.name}
              </h3>
              <div className="mb-6 space-y-3">
                {aboutData.location && (
                  <p className="flex items-center justify-center gap-2 text-lg text-muted md:justify-start">
                    <span className="text-xl">📍</span>
                    <span>{aboutData.location}</span>
                  </p>
                )}
                {aboutData.email && (
                  <a
                    href={`mailto:${aboutData.email}`}
                    className="flex items-center justify-center gap-2 text-lg text-muted transition-colors hover:text-accent md:justify-start"
                  >
                    <span className="text-xl">✉️</span>
                    <span>{aboutData.email}</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="group relative mb-12 overflow-hidden rounded-3xl border border-card-border bg-card-bg/50 p-8 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 md:p-12">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-30"></div>
            <div className="relative z-10">
              <h4 className="mb-6 text-2xl font-black text-foreground">My Story</h4>
              <p className="text-lg leading-relaxed text-muted">
                {aboutData.bio}
              </p>
            </div>
          </div>

          <div className="text-center">
            <h4 className="mb-8 text-2xl font-black text-foreground">
              Let's Connect
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {aboutData.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primary to-accent opacity-0 blur transition-all group-hover:opacity-20"></div>
                  <div className="relative flex items-center gap-3 rounded-2xl border-2 border-border bg-card-bg/50 px-6 py-3 backdrop-blur-sm transition-all group-hover:border-primary group-hover:scale-105">
                    <span className="text-lg font-bold text-muted transition-colors group-hover:text-primary">
                      {link.name}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
