import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { ThemeProvider } from '@/lib/theme';

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
    default: 'Pratiyush | Portfolio',
    template: '%s | Pratiyush',
  },
  description:
    'Personal portfolio of Pratiyush - Software Engineer, showcasing projects, experience, articles, and recommendations.',
  keywords: [
    'Pratiyush',
    'Portfolio',
    'Software Engineer',
    'Web Developer',
    'Next.js',
  ],
  authors: [{ name: 'Pratiyush' }],
  creator: 'Pratiyush',
  metadataBase: new URL('https://pratiyush.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pratiyush.com',
    title: 'Pratiyush | Portfolio',
    description:
      'Personal portfolio of Pratiyush - Software Engineer, showcasing projects, experience, articles, and recommendations.',
    siteName: 'Pratiyush Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pratiyush | Portfolio',
    description:
      'Personal portfolio of Pratiyush - Software Engineer, showcasing projects, experience, articles, and recommendations.',
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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased transition-colors`}
      >
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
