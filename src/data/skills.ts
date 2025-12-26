import { Skill } from '@/types';

export const skillsData: Skill[] = [
  {
    category: 'Frontend',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML/CSS',
      'Tailwind CSS',
      'Redux',
      'React Query',
    ],
  },
  {
    category: 'Backend',
    items: [
      'Node.js',
      'Express',
      'NestJS',
      'REST APIs',
      'GraphQL',
      'Microservices',
    ],
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Prisma', 'TypeORM'],
  },
  {
    category: 'DevOps & Tools',
    items: [
      'Docker',
      'AWS',
      'Git',
      'GitHub Actions',
      'CI/CD',
      'Linux',
      'Nginx',
    ],
  },
  {
    category: 'Others',
    items: [
      'System Design',
      'Testing (Jest, React Testing Library)',
      'Agile/Scrum',
      'Problem Solving',
    ],
  },
];
