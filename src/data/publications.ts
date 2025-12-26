import { Publication } from '@/types';

export const publicationsData: Publication[] = [
  {
    id: '1',
    title: 'Best Innovation Award',
    type: 'award',
    date: '2023-11',
    description:
      'Received the Best Innovation Award for developing an AI-powered code review system that improved team productivity by 40%.',
  },
  {
    id: '2',
    title: 'Modern Web Development Patterns',
    type: 'article',
    date: '2023-06',
    description:
      'Published research article on modern web development patterns and their impact on application performance.',
    url: 'https://example.com/publications/web-patterns',
  },
  {
    id: '3',
    title: 'Scalable Microservices Architecture',
    type: 'paper',
    date: '2022-12',
    description:
      'Co-authored a paper on designing scalable microservices architecture for enterprise applications.',
    url: 'https://example.com/publications/microservices',
  },
  {
    id: '4',
    title: 'Outstanding Performance Award',
    type: 'award',
    date: '2022-08',
    description:
      'Recognized for exceptional performance and contribution to key projects.',
  },
];
