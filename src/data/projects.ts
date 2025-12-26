import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL'],
    githubUrl: 'https://github.com/pratiyush/ecommerce',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates and team collaboration features.',
    technologies: ['React', 'Firebase', 'Material-UI', 'WebSocket'],
    githubUrl: 'https://github.com/pratiyush/task-manager',
    liveUrl: 'https://task-manager-demo.netlify.app',
    featured: true,
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description:
      'A weather dashboard that displays current weather and forecasts using external weather APIs.',
    technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
    githubUrl: 'https://github.com/pratiyush/weather-dashboard',
    liveUrl: 'https://weather-dashboard-demo.vercel.app',
    featured: false,
  },
  {
    id: '4',
    title: 'Blog Platform',
    description:
      'A modern blog platform with markdown support, SEO optimization, and content management.',
    technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/pratiyush/blog-platform',
    liveUrl: 'https://blog-platform-demo.vercel.app',
    featured: false,
  },
];
