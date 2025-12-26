import Hero from '@/components/sections/Hero';
import SectionContainer from '@/components/sections/SectionContainer';
import ProjectCard from '@/components/cards/ProjectCard';
import ExperienceCard from '@/components/cards/ExperienceCard';
import ContactForm from '@/components/sections/ContactForm';
import { projectsData } from '@/data/projects';
import { experienceData } from '@/data/experience';
import { skillsData } from '@/data/skills';
import Badge from '@/components/ui/Badge';

export default function Home() {
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <>
      <Hero />

      <SectionContainer
        id="projects"
        title="Featured Projects"
        subtitle="Some of my recent work"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer
        id="experience"
        title="Experience"
        subtitle="My professional journey"
        className="bg-secondary"
      >
        <div className="mx-auto max-w-3xl space-y-6">
          {experienceData.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer
        id="skills"
        title="Skills"
        subtitle="Technologies I work with"
      >
        <div className="mx-auto max-w-4xl space-y-8">
          {skillsData.map((skillCategory) => (
            <div key={skillCategory.category}>
              <h3 className="mb-4 text-xl font-bold text-foreground">
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillCategory.items.map((skill) => (
                  <Badge key={skill} variant="primary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer
        id="contact"
        title="Get in Touch"
        subtitle="Let's build something together"
        className="bg-secondary"
      >
        <div className="mx-auto max-w-2xl">
          <p className="mb-8 text-center text-lg text-muted">
            I'm always open to new opportunities and interesting projects. Feel
            free to reach out!
          </p>
          <ContactForm />
        </div>
      </SectionContainer>
    </>
  );
}
