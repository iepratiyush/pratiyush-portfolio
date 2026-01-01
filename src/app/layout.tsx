import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/lib/theme';
import { getPersonSchema, getWebSiteSchema } from '@/lib/schema';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Pratiyush Prakash | Portfolio',
    template: '%s | Pratiyush Prakash',
  },
  description:
    'Portfolio of Pratiyush Prakash - Software Engineering Manager & MGTS at Texas Instruments. Expertise in AI/ML, system architecture, and technical leadership.',
  keywords: [
    'Pratiyush Prakash',
    'Software Engineering Manager',
    'MGTS',
    'Texas Instruments',
    'AI/ML',
    'System Architecture',
    'Technical Leadership',
    'Full Stack Development',
    'Machine Learning',
    'Microservices',
    'IIT Kharagpur',
  ],
  authors: [{ name: 'Pratiyush Prakash' }],
  creator: 'Pratiyush Prakash',
  metadataBase: new URL('https://pratiyush-portfolio.vercel.app'),
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pratiyush-portfolio.vercel.app',
    title: 'Pratiyush Prakash | Portfolio',
    description:
      'Portfolio of Pratiyush Prakash - Software Engineering Manager & MGTS at Texas Instruments. Expertise in AI/ML, system architecture, and technical leadership.',
    siteName: 'Pratiyush Prakash Portfolio',
    images: ['/profile.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pratiyush Prakash | Portfolio',
    description:
      'Portfolio of Pratiyush Prakash - Software Engineering Manager & MGTS at Texas Instruments. Expertise in AI/ML, system architecture, and technical leadership.',
    images: ['/profile.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = getPersonSchema();
  const websiteSchema = getWebSiteSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased transition-colors`}
      >
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
