import Hero from '@/components/sections/Hero';
import SectionContainer from '@/components/sections/SectionContainer';
import ExperienceCard from '@/components/cards/ExperienceCard';
import EducationCard from '@/components/cards/EducationCard';
import ContactForm from '@/components/sections/ContactForm';
import { projectsData } from '@/data/projects';
import { experienceData } from '@/data/experience';
import { educationData } from '@/data/education';
import { skillsData } from '@/data/skills';
import { articlesData } from '@/data/articles';
import { publicationsData } from '@/data/publications';
import { booksData } from '@/data/books';
import { entertainmentData } from '@/data/entertainment';
import Badge from '@/components/ui/Badge';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { getProfilePageSchema } from '@/lib/schema';
import { BookOpen, Film } from 'lucide-react';

export default function Home() {
  const recentProjects = [...projectsData]
    .sort((a, b) => {
      const getEndDate = (duration: string) => {
        if (duration.includes('Present')) return new Date();
        const parts = duration.split(' - ');
        return new Date(parts[1]);
      };
      return getEndDate(b.duration).getTime() - getEndDate(a.duration).getTime();
    })
    .slice(0, 3);

  const recentArticles = [...articlesData]
    .sort((a, b) => {
      return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
    })
    .slice(0, 3);

  const recentExperience = [...experienceData]
    .sort((a, b) => {
      const getEndDate = (endDate: string) => {
        if (endDate === 'Present') return new Date();
        return new Date(endDate);
      };
      return getEndDate(b.endDate).getTime() - getEndDate(a.endDate).getTime();
    })
    .slice(0, 3);

  const recentPublications = [...publicationsData]
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, 4);

  const recentEducation = educationData.slice(0, 2);

  const topSkills = skillsData.slice(0, 3);

  const recentBooks = booksData.slice(0, 3);
  const recentEntertainment = entertainmentData.slice(0, 3);

  const profilePageSchema = getProfilePageSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <Hero />

      <SectionContainer
        id="projects"
        title="Recent Projects"
        subtitle="Enterprise solutions and technical innovations"
        className="bg-secondary"
      >
        <div className="mx-auto max-w-5xl space-y-4 md:space-y-6">
          {recentProjects.map((project) => {
            const isActive = project.duration.includes('Present');
            return (
            <div
              key={project.id}
              className={`border p-4 transition-all md:p-6 ${
                isActive
                  ? 'border-primary/50 bg-gradient-to-br from-primary/10 to-transparent shadow-md'
                  : 'border-border bg-card-bg hover:border-foreground/20'
              }`}
            >
              <div className="mb-2 flex items-center justify-between gap-3">
                <h3 className="flex-1 text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                {isActive && (
                  <Badge variant="primary">Active</Badge>
                )}
              </div>
              <div className="mb-3 text-sm text-muted">
                <span className="font-medium">{project.role}</span>
                <span className="mx-2">•</span>
                <span>{project.duration}</span>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted">
                {project.description.length > 200
                  ? `${project.description.substring(0, 200)}...`
                  : project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.skills.slice(0, 5).map((skill, idx) => (
                  <Badge key={idx}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            );
          })}
          <div className="mt-8 text-center">
            <Link href="/projects">
              <Button variant="outline">View All Projects →</Button>
            </Link>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer
        id="articles"
        title="Recent Articles"
        subtitle="Latest from my technical writing"
      >
        <div className="mx-auto max-w-5xl space-y-4 md:space-y-6">
          {recentArticles.map((article) => (
            <div
              key={article.id}
              className="border border-border bg-card-bg p-4 transition-all hover:border-foreground/20 md:p-6"
            >
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground/80"
                >
                  {article.title}
                </a>
              </h3>
              <div className="mb-3 text-sm text-muted">
                <span>{new Date(article.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted">
                {article.description.length > 200
                  ? `${article.description.substring(0, 200)}...`
                  : article.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {article.tags?.slice(0, 5).map((tag, idx) => (
                  <Badge key={idx}>
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
          <div className="mt-8 text-center">
            <Link href="/articles">
              <Button variant="outline">View All Articles →</Button>
            </Link>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer
        id="experience"
        title="Experience"
        subtitle="My professional journey"
        className="bg-secondary"
      >
        <div className="mx-auto max-w-5xl space-y-6">
          {recentExperience.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
          <div className="mt-8 text-center">
            <Link href="/experience">
              <Button variant="outline">View All Experience →</Button>
            </Link>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer
        id="education"
        title="Education"
        subtitle="Academic background and achievements"
      >
        <div className="mx-auto max-w-5xl space-y-6">
          {recentEducation.map((edu) => (
            <EducationCard key={edu.id} education={edu} />
          ))}
          <div className="mt-8 text-center">
            <Link href="/education">
              <Button variant="outline">View All Education →</Button>
            </Link>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer
        id="publications"
        title="Publications & Awards"
        subtitle="Recognition and achievements"
        className="bg-secondary"
      >
        <div className="mx-auto max-w-5xl space-y-4">
          {recentPublications.map((pub) => (
            <div
              key={pub.id}
              className="border border-border bg-card-bg p-4 transition-all hover:border-foreground/20 md:p-6"
            >
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {pub.title}
              </h3>
              <div className="mb-3 flex flex-wrap gap-2">
                <Badge variant={pub.type === 'conference' ? 'primary' : 'default'}>
                  {pub.type === 'conference' ? '📄 Conference' : '🏆 Award'}
                </Badge>
                <Badge>{pub.organization}</Badge>
                {pub.venue && <Badge>{pub.venue}</Badge>}
                <Badge>
                  {new Date(pub.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                  })}
                </Badge>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                {pub.description}
              </p>
            </div>
          ))}
          <div className="mt-8 text-center">
            <Link href="/publications">
              <Button variant="outline">View All Publications →</Button>
            </Link>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer
        id="skills"
        title="Skills"
        subtitle="Technical expertise and capabilities"
      >
        <div className="mx-auto max-w-5xl space-y-8">
          {topSkills.map((skillCategory) => (
            <div key={skillCategory.category}>
              <div className="mb-4 flex items-center gap-3">
                <h3 className="text-xl font-bold text-foreground">
                  {skillCategory.category}
                </h3>
                {skillCategory.currentFocus && (
                  <Badge variant="primary" className="text-xs">
                    Current Focus
                  </Badge>
                )}
              </div>
              <div className="flex flex-wrap gap-3">
                {skillCategory.items.map((skill) => (
                  <Badge key={skill}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
          <div className="mt-8 text-center">
            <Link href="/skills">
              <Button variant="outline">View All Skills →</Button>
            </Link>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer
        id="recommendations"
        title="Books & Entertainment"
        subtitle="Curated recommendations from books and shows I've enjoyed"
        className="bg-secondary"
      >
        <div className="mx-auto max-w-5xl space-y-8">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Books</h3>
            </div>
            <div className="space-y-4">
              {recentBooks.map((book) => (
                <div
                  key={book.id}
                  className="border border-border bg-card-bg p-4 transition-all duration-200 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-md md:p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="mb-1 text-lg font-semibold text-foreground md:text-xl">
                        {book.title}
                      </h4>
                      <p className="mb-2 text-sm text-muted">
                        <span className="font-medium">by {book.author}</span>
                        {book.genre && (
                          <>
                            <span className="mx-2">•</span>
                            <span>{book.genre}</span>
                          </>
                        )}
                      </p>
                      {book.description && (
                        <p className="text-sm leading-relaxed text-muted">{book.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-2">
              <Film className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Movies & Series</h3>
            </div>
            <div className="space-y-4">
              {recentEntertainment.map((item) => (
                <div
                  key={item.id}
                  className="border border-border bg-card-bg p-4 transition-all duration-200 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-md md:p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="mb-1 text-lg font-semibold text-foreground md:text-xl">
                        {item.title}
                      </h4>
                      <p className="mb-2 text-sm text-muted">
                        <span className="inline-flex items-center rounded border border-border bg-background px-2 py-0.5 text-xs font-medium text-foreground">
                          {item.type === 'movie' ? 'Movie' : 'Series'}
                        </span>
                        <span className="mx-2">•</span>
                        <span>{item.year}</span>
                        {item.genre && (
                          <>
                            <span className="mx-2">•</span>
                            <span>{item.genre}</span>
                          </>
                        )}
                      </p>
                      {item.description && (
                        <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center">
            <Link href="/books">
              <Button variant="outline">View All Books →</Button>
            </Link>
            <Link href="/entertainment">
              <Button variant="outline">View All Entertainment →</Button>
            </Link>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer
        id="contact"
        title="Get in Touch"
        subtitle="Let's connect and collaborate"
      >
        <div className="mx-auto max-w-2xl">
          <p className="mb-8 text-center text-lg text-muted">
            I&apos;m always open to new opportunities and interesting projects. Feel
            free to reach out!
          </p>
          <ContactForm />
        </div>
      </SectionContainer>
    </>
  );
}
