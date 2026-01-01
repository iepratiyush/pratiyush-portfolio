import { Metadata } from 'next';
import SectionContainer from '@/components/sections/SectionContainer';
import { articlesData } from '@/data/articles';
import ArticlesClient from './ArticlesClient';
import { getBlogPostingListSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Technical writing and blog posts on software engineering, AI/ML, and technology.',
};

export default function ArticlesPage() {
  const allTags = Array.from(
    new Set(articlesData.flatMap((article) => article.tags || []))
  ).sort();

  const blogListSchema = getBlogPostingListSchema(articlesData);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <SectionContainer
        title="Articles"
        subtitle={`My technical writing and blog posts - ${articlesData.length} articles`}
        className="pt-24"
      >
        <ArticlesClient articles={articlesData} allTags={allTags} />
      </SectionContainer>
    </>
  );
}
