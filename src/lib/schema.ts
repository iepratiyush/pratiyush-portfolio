import { aboutData } from '@/data/about';
import { experienceData } from '@/data/experience';
import { publicationsData } from '@/data/publications';
import { skillsData } from '@/data/skills';
import { Article } from '@/types';

const SITE_URL = 'https://pratiyush.com';

export function getPersonSchema() {
  const allSkills = skillsData.flatMap(category => category.items);

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: aboutData.name,
    url: SITE_URL,
    image: `${SITE_URL}/profile.JPG`,
    email: aboutData.email,
    jobTitle: 'Software Engineering Manager & Member Group Technical Staff',
    worksFor: {
      '@type': 'Organization',
      name: 'Texas Instruments',
      url: 'https://www.ti.com',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Indian Institute of Technology Kharagpur',
      url: 'https://www.iitkgp.ac.in',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bangalore',
      addressCountry: 'India',
    },
    sameAs: aboutData.socialLinks.map(link => link.url),
    knowsAbout: allSkills,
    description: aboutData.bio.replace(/<br\/>/g, ' '),
    hasOccupation: experienceData.map(exp => ({
      '@type': 'Role',
      roleName: exp.position,
      startDate: exp.startDate,
      endDate: exp.endDate === 'Present' ? new Date().toISOString().split('T')[0] : exp.endDate,
      hasOccupation: {
        '@type': 'Occupation',
        name: exp.position,
        occupationLocation: {
          '@type': 'Place',
          address: exp.location,
        },
      },
    })),
    award: publicationsData
      .filter(pub => pub.type === 'award')
      .map(pub => pub.title),
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: `${aboutData.name} - Portfolio`,
    description: 'Portfolio of Pratiyush Prakash - Software Engineering Manager & MGTS at Texas Instruments',
    author: {
      '@id': `${SITE_URL}/#person`,
    },
    inLanguage: 'en-US',
  };
}

export function getProfilePageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${SITE_URL}/#profilepage`,
    url: SITE_URL,
    mainEntity: {
      '@id': `${SITE_URL}/#person`,
    },
    about: {
      '@id': `${SITE_URL}/#person`,
    },
    inLanguage: 'en-US',
  };
}

export function getArticleSchema(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': article.url,
    headline: article.title,
    description: article.description,
    datePublished: article.publishedDate,
    author: {
      '@id': `${SITE_URL}/#person`,
    },
    publisher: {
      '@type': 'Person',
      name: aboutData.name,
      url: SITE_URL,
    },
    url: article.url,
    keywords: article.tags?.join(', ') || '',
    inLanguage: 'en-US',
  };
}

export function getBlogPostingListSchema(articles: Article[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: articles.map((article, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Article',
        url: article.url,
        name: article.title,
        description: article.description,
        datePublished: article.publishedDate,
        author: {
          '@id': `${SITE_URL}/#person`,
        },
      },
    })),
  };
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.ti.com/#organization',
    name: 'Texas Instruments',
    url: 'https://www.ti.com',
    logo: 'https://www.ti.com/etc/designs/ti/images/ui/ic-ti-logo.svg',
    sameAs: [
      'https://www.linkedin.com/company/texas-instruments',
      'https://twitter.com/texasinstruments',
    ],
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}
