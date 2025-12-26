import { Metadata } from 'next';
import SectionContainer from '@/components/sections/SectionContainer';
import ProjectCard from '@/components/cards/ProjectCard';
import { projectsData } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Browse my portfolio of projects, including web applications, tools, and experiments.',
};

export default function ProjectsPage() {
  return (
    <>
      <SectionContainer
        title="Projects"
        subtitle="My work and side projects"
        className="pt-24"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
