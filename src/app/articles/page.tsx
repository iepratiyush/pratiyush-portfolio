import { Metadata } from 'next';
import SectionContainer from '@/components/sections/SectionContainer';
import ArticleCard from '@/components/cards/ArticleCard';
import { articlesData } from '@/data/articles';

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Technical articles and blog posts I have written.',
};

export default function ArticlesPage() {
  return (
    <>
      <SectionContainer
        title="Articles"
        subtitle="My technical writing and blog posts"
        className="pt-24"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {articlesData.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
