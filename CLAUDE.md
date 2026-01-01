# Project Conventions & Guidelines

This document contains important conventions and guidelines for this portfolio project. Follow these rules when making changes or adding new content.

## Data Ordering Convention

**IMPORTANT: All data arrays are sorted at DISPLAY time in DESCENDING order (most recent first).**

Sorting is implemented in the page components:
- `src/app/publications/page.tsx` - Sorts by `date` field (YYYY-MM format)
- `src/app/experience/page.tsx` - Sorts by `endDate` field (YYYY-MM format, handles "Present")
- `src/app/articles/page.tsx` - Sorts by `publishedDate` field (YYYY-MM-DD format)
- `src/app/entertainment/page.tsx` - Sorts by `year` field (YYYY format)

**Why sort at display time?**
- Ensures data is ALWAYS displayed in the correct order regardless of data file order
- Makes it impossible to accidentally display in wrong order
- Single source of truth for sorting logic

Data files in `src/data/` should ideally be pre-sorted for readability, but the page components will sort them programmatically anyway.

### Example:
```typescript
// ✅ CORRECT - Recent first
export const publicationsData: Publication[] = [
  { date: '2025-09', ... },  // Most recent
  { date: '2024-09', ... },
  { date: '2023-04', ... },
  { date: '2022-03', ... },  // Oldest
];

// ❌ WRONG - Old first
export const publicationsData: Publication[] = [
  { date: '2022-03', ... },  // Oldest first is wrong
  { date: '2023-04', ... },
];
```

## Data Structure Guidelines

### Books (`src/data/books.ts`)
- Split genres by "/" into separate chips for filtering
- Include `bookUrl` and `authorUrl` when available
- Use `description` instead of `review`

### Entertainment (`src/data/entertainment.ts`)
- Split genres by "/" into separate chips
- Use `type` field ('movie' | 'series') with color-coded chips
- Sort by `year` descending

### Publications & Awards (`src/data/publications.ts`)
- Use `type` field ('conference' | 'award')
- Include `venue` for conferences
- Include `organization` for all entries
- Sort by `date` descending

## Page Layout Pattern

All list-based pages follow this consistent pattern:
1. Numbered entries (1, 2, 3...)
2. Bordered cards with hover effects
3. Type/category chips with icons
4. Metadata chips (dates, organizations, genres)
5. Descriptions in muted text
6. Responsive design (mobile-first)

## Technology Stack

- **Framework**: Next.js with App Router
- **Styling**: Tailwind CSS
- **Icons**: lucide-react
- **Type Safety**: TypeScript

## File Organization

```
src/
├── app/              # Page components
├── components/       # Reusable UI components
├── data/            # Data files (sort by date!)
└── types/           # TypeScript interfaces
```

## When Adding New Content

1. Add data to appropriate file in `src/data/`
2. **Sort by date (recent first)**
3. Update types in `src/types/index.ts` if needed
4. Ensure page component displays new data correctly
5. Test responsive design
6. Check that chips/badges render correctly

## Remember

- **Always sort by date, most recent first**
- Keep consistent styling across all pages
- Split multi-value fields (genres, tags) into separate chips
- Use semantic HTML and accessibility best practices

## Pending Improvements & Features

### ✅ Completed
- ✓ Education page created with IIT Kharagpur achievements
- ✓ Contact form working (mailto is acceptable for now)
- ✓ **Profile image optimized** - Converted profile.JPG to WebP (449KB → 172KB, 61.56% reduction)

### 🎯 High Priority - Quick Wins

1. **Add Custom 404 Page**
   - Currently using default Next.js 404
   - Create branded `not-found.tsx` in app directory
   - Match site design and include helpful navigation

2. **Analytics Integration**
   - No tracking currently
   - Add Vercel Analytics (privacy-friendly, built-in)
   - Alternative: Plausible or Simple Analytics
   - Track page views, popular content, user flow

3. **Add Loading Skeletons**
   - For filtered content in Articles/Books/Entertainment
   - Improve perceived performance during client-side filtering
   - Better UX on slower connections

### 📊 Content Enhancements

4. **Projects Need Visual Content**
   - No screenshots/demos for TI projects
   - Add images for Cross-Reference, Selection Tools, Filter Design Tool, etc.
   - Consider project gallery or screenshots section
   - Would significantly improve projects page visual appeal

5. **Add "Currently Working On" Section**
   - Show active projects on home page
   - Highlight current focus areas
   - Demonstrates continuous learning and engagement

6. **Entertainment Page Personal Touch**
   - Add personal ratings (currently no rating field)
   - Add "Currently Watching/Reading" section
   - Consider brief personal reviews or highlights

7. **Articles Could Show Engagement Metrics**
   - Medium API integration for views/claps
   - Add read time estimates
   - Related articles section
   - Show article popularity

8. **Local Blog for Portfolio Case Studies**
   - Consider hosting some content locally (not just Medium links)
   - Write detailed project case studies
   - Technical deep-dives for major projects
   - Better SEO and ownership of content

### 🔧 Technical Improvements

9. **Global Search**
    - No search across content currently
    - Implement command palette (⌘K style)
    - Search across articles, projects, publications, skills
    - Improve content discoverability

10. **Add Breadcrumb Navigation UI**
    - Schema exists but no visual breadcrumbs
    - Improve navigation UX especially on detail pages
    - Helps with orientation in deep navigation

11. **PWA Support**
    - Add service worker for offline support
    - Add manifest.json for installability
    - Cache static assets
    - Enable "Add to Home Screen"

12. **Implement ISR/On-Demand Revalidation**
    - For articles page when new content added
    - Currently static generation only
    - Consider dynamic routes for article details

### 🚀 Performance & SEO

13. **Add Per-Page Meta Descriptions**
    - Some pages have generic descriptions
    - Customize for better SEO
    - Include relevant keywords for each section

14. **Add Custom OG Images**
    - Currently using profile.JPG for all pages
    - Generate page-specific OG images
    - Better social media sharing appearance
    - Use @vercel/og or similar

15. **Add RSS Feed**
    - For articles section
    - Help with content discoverability
    - Enable readers to subscribe to updates

16. **Add Sitemap**
    - Generate dynamic sitemap.xml
    - Improve SEO and crawlability
    - Include all pages and update dates

### 🎨 UX Enhancements

17. **Add Smooth Scroll Animations**
    - Fade-in on scroll for cards
    - Use Intersection Observer API
    - Subtle, professional animations
    - Improve visual engagement

18. **Add "Back to Top" Button**
    - On long pages (articles, books, entertainment, skills)
    - Floating button that appears on scroll
    - Improves navigation on mobile

19. **Improve Skills Page Visualization**
    - Currently just lists with badges
    - Add proficiency level indicators
    - Years of experience per skill
    - Visual skill matrix or chart
    - Group by proficiency level

20. **Enhance Mobile Experience**
    - Test all interactive elements on mobile
    - Optimize filter UI for mobile
    - Consider mobile-specific navigation improvements
    - Ensure touch targets are adequate size

### 📈 Priority Order

**Start with these 2 (Immediate Impact):**
1. **Add custom 404 page** (15 min) - Professional appearance
2. **Integrate Vercel Analytics** (20 min) - Understand user behavior

**Next Phase (High Value):**
3. **Add project screenshots** (2-3 hours) - Visual appeal
4. **Custom OG images** (1 hour) - Social sharing
5. **Global search** (3-4 hours) - User experience
6. **Loading skeletons** (1 hour) - Perceived performance

**Content & Engagement:**
7. **"Currently Working On" section** (30 min)
8. **Local blog setup** (2-3 hours)
9. **Article engagement metrics** (1-2 hours)

**Advanced Features:**
10. **PWA support** (2-3 hours)
11. **Smooth scroll animations** (1-2 hours)
12. **Skills page visualization** (2-3 hours)
13. **Back to top button** (30 min)
