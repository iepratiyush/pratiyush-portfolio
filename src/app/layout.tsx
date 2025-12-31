import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
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
    default: 'Pratiyush Prakash | Portfolio',
    template: '%s | Pratiyush Prakash',
  },
  description:
    'Personal portfolio of Pratiyush Prakash - Software Engineer, showcasing projects, experience, articles, and recommendations.',
  keywords: [
    'Pratiyush Prakash',
    'Portfolio',
    'Software Engineer',
    'Web Developer',
    'Next.js',
  ],
  authors: [{ name: 'Pratiyush Prakash' }],
  creator: 'Pratiyush Prakash',
  metadataBase: new URL('https://pratiyush.com'),
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pratiyush.com',
    title: 'Pratiyush Prakash | Portfolio',
    description:
      'Personal portfolio of Pratiyush Prakash - Software Engineer, showcasing projects, experience, articles, and recommendations.',
    siteName: 'Pratiyush Prakash Portfolio',
    images: ['/profile.JPG'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pratiyush Prakash | Portfolio',
    description:
      'Personal portfolio of Pratiyush Prakash - Software Engineer, showcasing projects, experience, articles, and recommendations.',
    images: ['/profile.JPG'],
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
        </ThemeProvider>
      </body>
    </html>
  );
}
