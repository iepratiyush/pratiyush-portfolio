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
          <div className="mb-12 flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
            <div className="flex-shrink-0">
              <div className="relative h-48 w-48 overflow-hidden rounded-lg md:h-56 md:w-56">
                <Image
                  src="/profile.webp"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
                {aboutData.name}
              </h3>
              <div className="mb-6 space-y-2">
                {aboutData.location && (
                  <p className="text-base text-muted">
                    {aboutData.location}
                  </p>
                )}
                {aboutData.email && (
                  <a
                    href={`mailto:${aboutData.email}`}
                    className="block text-base text-muted transition-colors hover:text-foreground"
                  >
                    {aboutData.email}
                  </a>
                )}
              </div>

            </div>
          </div>

          <div className="border border-border bg-card-bg p-8">
            <h4 className="mb-4 text-xl font-semibold text-foreground">About</h4>
            <div
              className="text-base leading-relaxed text-muted [&>br]:block [&>br]:content-[''] [&>br]:mb-4"
              dangerouslySetInnerHTML={{ __html: aboutData.longBio }}
            />
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
