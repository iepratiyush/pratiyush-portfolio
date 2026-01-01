# Pratiyush Prakash - Portfolio

A modern, professional portfolio website built with Next.js 16, TypeScript, and Tailwind CSS.

🌐 **Live Site**: [https://pratiyush-portfolio.vercel.app](https://pratiyush-portfolio.vercel.app)

## 🚀 Features

- **Modern Tech Stack**: Next.js 16 with App Router, TypeScript, Tailwind CSS 4
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Dark/Light Theme**: Persistent theme toggle with system preference detection
- **Performance Optimized**:
  - WebP image optimization (61% size reduction)
  - Static site generation
  - Automatic sitemap and robots.txt
- **SEO Ready**: OpenGraph tags, structured data (JSON-LD), meta descriptions
- **Custom 404 Page**: Branded error page with navigation
- **Content Sections**:
  - Home with featured content
  - About page
  - Projects showcase
  - Articles (Medium integration)
  - Experience timeline
  - Education & achievements
  - Publications & awards
  - Skills matrix
  - Books & entertainment recommendations
  - Contact form

## 📁 Project Structure

```
pratiyush-portfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/              # About page
│   │   ├── articles/           # Articles with filtering
│   │   ├── books/              # Book recommendations
│   │   ├── education/          # Educational background
│   │   ├── entertainment/      # Movies & series
│   │   ├── experience/         # Work experience
│   │   ├── projects/           # Project portfolio
│   │   ├── publications/       # Publications & awards
│   │   ├── skills/             # Technical skills
│   │   ├── layout.tsx          # Root layout with theme
│   │   ├── page.tsx            # Home page
│   │   └── not-found.tsx       # Custom 404 page
│   ├── components/
│   │   ├── cards/              # Reusable card components
│   │   ├── filters/            # Search and filter components
│   │   ├── layout/             # Header & Footer
│   │   ├── sections/           # Page sections
│   │   └── ui/                 # UI primitives (Button, Badge, etc.)
│   ├── data/                   # Content data files
│   │   ├── about.ts
│   │   ├── articles.ts
│   │   ├── books.ts
│   │   ├── education.ts
│   │   ├── entertainment.ts
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   ├── publications.ts
│   │   └── skills.ts
│   ├── types/                  # TypeScript type definitions
│   └── lib/                    # Utilities (theme, schema)
├── public/
│   ├── profile.webp            # Optimized profile image
│   └── favicon.png             # Site favicon
├── scripts/
│   └── optimize-images.js      # Image optimization script
└── CLAUDE.md                   # Development guidelines & roadmap

```

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router & Turbopack
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Image Optimization**: [Sharp](https://sharp.pixelplumbing.com/)
- **Code Quality**: ESLint, Prettier

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/pratiyush-portfolio.git

# Navigate to project directory
cd pratiyush-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Create production build
npm run start      # Start production server
npm run lint       # Run ESLint
```

## 📝 Content Management

All content is managed through TypeScript files in `src/data/`:

- **Easy Updates**: Edit `.ts` files to update content
- **Type Safety**: TypeScript ensures data consistency
- **No CMS Required**: Direct file editing with hot reload

### Adding New Content

1. Navigate to the relevant file in `src/data/`
2. Add your new entry following the existing structure
3. Data is automatically sorted by date (most recent first)

Example - Adding a new project:

```typescript
// src/data/projects.ts
{
  id: '10',
  title: 'New Project',
  role: 'Lead Developer',
  duration: 'Jan 2026 - Present',
  organization: 'Company Name',
  description: 'Project description...',
  skills: ['React', 'Node.js', 'AWS'],
  link: 'https://project-url.com'
}
```

## 🎨 Customization

### Theme Colors

Edit `src/app/globals.css` to customize colors:

```css
:root {
  --background: 255 255 255;
  --foreground: 15 23 42;
  --primary: 59 130 246;
  /* ... */
}
```

### Typography

Uses Geist Sans and Geist Mono fonts. Configure in `src/app/layout.tsx`.

## 🚀 Deployment

### Live Deployment

**Production URL**: [https://pratiyush-portfolio.vercel.app](https://pratiyush-portfolio.vercel.app)

**Status**: ✅ Live and deployed on Vercel

### Automatic Deployments

Every push to the `main` branch on GitHub automatically triggers a new deployment:

```bash
# Make your changes
git add .
git commit -m "Your changes"
git push

# Vercel auto-deploys in ~1 minute
```

**Preview Deployments**: Every pull request gets a unique preview URL for testing.

### Deploy Your Own Copy

1. **Fork this repository** on GitHub
2. Go to [Vercel](https://vercel.com) and sign up/login
3. Click **"Add New Project"**
4. Import your forked repository
5. Click **"Deploy"**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/iepratiyush/pratiyush-portfolio)

### Manual Build for Production

```bash
npm run build
npm run start
```

### Custom Domain Setup (Optional)

To use your own domain:

1. In Vercel dashboard → Settings → Domains
2. Add your custom domain (e.g., `pratiyush.com`)
3. Update DNS records as instructed
4. Update URLs in code:
   - `src/app/layout.tsx` (line 41)
   - `src/lib/schema.ts` (line 7)
5. Push changes to GitHub

## 📊 Performance

- **Lighthouse Score**: 100/100 (Performance, Accessibility, Best Practices, SEO)
- **Image Optimization**: WebP format, 61% size reduction
- **Static Generation**: All pages pre-rendered at build time
- **Fast Load Times**: Optimized bundle size with code splitting

## 🔮 Roadmap

See [CLAUDE.md](./CLAUDE.md) for detailed development roadmap including:

- ✅ Profile image optimization
- ✅ Custom 404 page
- 🚧 Analytics integration
- 🚧 Global search (⌘K command palette)
- 🚧 Project screenshots
- 🚧 Custom OG images
- 🚧 Loading skeletons
- 🚧 PWA support

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Pratiyush Prakash**
- LinkedIn: [Pratiyush Prakash](https://www.linkedin.com/in/pratiyush-prakash/)
- GitHub: [pratiyush](https://github.com/pratiyush)
- Medium: [@pratiyushprakash](https://medium.com/@pratiyushprakash)
- Instagram: [@pratiyushprakash](https://www.instagram.com/pratiyushprakash/)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
- Deployed on [Vercel](https://vercel.com/)

---

Made with ❤️ by Pratiyush Prakash
