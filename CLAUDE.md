# Project Conventions & Guidelines

This document contains important conventions and guidelines for this portfolio project. Follow these rules when making changes or adding new content.

## Data Ordering Convention

**IMPORTANT: All data arrays are sorted at DISPLAY time in DESCENDING order (most recent first).**

Sorting is implemented in the page components:
- `src/app/publications/page.tsx` - Sorts by `date` field (YYYY-MM format)
- `src/app/experience/page.tsx` - Sorts by `endDate` field (YYYY-MM format, handles "Present")
- `src/app/articles/page.tsx` - Sorts by `publishedDate` field (YYYY-MM-DD format)
- `src/app/entertainment/page.tsx` - Sorts by `year` field (YYYY format)

Data files in `src/data/` should ideally be pre-sorted for readability, but the page components will sort them programmatically anyway.

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

### Skills (`src/data/skills.ts`)
- Add `currentFocus: true` to skill categories you're actively working on
- This adds a "Current Focus" badge and subtle gradient background

## Page Layout Pattern

All list-based pages follow this consistent pattern:
1. Bordered cards with hover effects (lift + shadow)
2. Type/category chips with icons
3. Metadata chips (dates, organizations, genres)
4. Descriptions in muted text
5. Responsive design (mobile-first with p-4 md:p-6)
6. Collapsible filters on mobile

## Technology Stack

- **Framework**: Next.js 16 with App Router & Turbopack
- **Styling**: Tailwind CSS 4
- **Icons**: lucide-react
- **Type Safety**: TypeScript
- **Image Optimization**: Sharp (WebP)

## File Organization

```
src/
├── app/              # Page components
├── components/       # Reusable UI components
│   ├── cards/        # Card components (Experience, Education)
│   ├── filters/      # Search and filter components
│   ├── layout/       # Header, Footer
│   ├── sections/     # Hero, ContactForm, SectionContainer
│   └── ui/           # Button, Badge, BackToTop, ScrollProgress, Skeleton, ThemeToggle
├── data/            # Data files (sort by date!)
├── types/           # TypeScript interfaces
└── lib/             # Utilities (theme, schema, fonts)
```

## When Adding New Content

1. Add data to appropriate file in `src/data/`
2. **Sort by date (recent first)** in the data file (for readability)
3. Update types in `src/types/index.ts` if needed
4. Ensure page component displays new data correctly
5. Test responsive design on mobile, tablet, and desktop
6. Check that chips/badges render correctly
7. Verify filters work if applicable

## Key Design Principles

- **Always sort by date, most recent first**
- Keep consistent styling across all pages (max-w-5xl)
- Split multi-value fields (genres, tags) into separate chips
- Use semantic HTML and accessibility best practices
- All interactive elements have 44x44px minimum touch targets
- Focus states are visible for keyboard navigation
- Active projects show "Active" badge with blue styling
- Current focus skills show "Current Focus" badge with gradient background

## Badge Variants

- `default` - Gray background, used for general tags
- `primary` - Blue background/text/border, used for emphasis (Active, Current Focus)
- `success` - Reserved for future use
- `warning` - Reserved for future use
