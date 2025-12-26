import { Experience } from '@/types';

export const experienceData: Experience[] = [
  {
    id: '1',
    company: 'Tech Company',
    position: 'Senior Software Engineer',
    startDate: '2022-01',
    endDate: 'Present',
    description:
      'Leading development of scalable web applications using modern technologies. Mentoring junior developers and driving technical decisions.',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'AWS',
    ],
    location: 'Remote',
  },
  {
    id: '2',
    company: 'Startup Inc',
    position: 'Full Stack Developer',
    startDate: '2020-06',
    endDate: '2021-12',
    description:
      'Built and maintained full-stack applications from scratch. Implemented RESTful APIs and responsive user interfaces.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Docker'],
    location: 'Bangalore, India',
  },
  {
    id: '3',
    company: 'Software Solutions',
    position: 'Junior Developer',
    startDate: '2019-01',
    endDate: '2020-05',
    description:
      'Developed features for enterprise applications. Collaborated with cross-functional teams to deliver high-quality software.',
    technologies: ['JavaScript', 'React', 'Java', 'Spring Boot', 'MySQL'],
    location: 'Mumbai, India',
  },
];
