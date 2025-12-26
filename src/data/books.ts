import { Book } from '@/types';

export const booksData: Book[] = [
  {
    id: '1',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    genre: 'Software Engineering',
    rating: 5,
    review:
      'Essential reading for any developer. Teaches principles of writing maintainable and clean code.',
  },
  {
    id: '2',
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    genre: 'System Design',
    rating: 5,
    review:
      'Comprehensive guide to building scalable and reliable systems. A must-read for backend engineers.',
  },
  {
    id: '3',
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt, David Thomas',
    genre: 'Software Engineering',
    rating: 5,
    review:
      'Timeless advice for software developers on improving their craft and career.',
  },
  {
    id: '4',
    title: 'System Design Interview',
    author: 'Alex Xu',
    genre: 'System Design',
    rating: 4,
    review:
      'Great resource for preparing for system design interviews with practical examples.',
  },
  {
    id: '5',
    title: "You Don't Know JS",
    author: 'Kyle Simpson',
    genre: 'JavaScript',
    rating: 5,
    review:
      'Deep dive into JavaScript fundamentals. Essential for understanding the language at a deeper level.',
  },
  {
    id: '6',
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Self-Improvement',
    rating: 5,
    review:
      'Practical framework for building good habits and breaking bad ones.',
  },
];
