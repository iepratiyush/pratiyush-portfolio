'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/experience', label: 'Experience' },
    { href: '/projects', label: 'Projects' },
    { href: '/skills', label: 'Skills' },
    { href: '/publications', label: 'Publications' },
    { href: '/articles', label: 'Articles' },
    { href: '/books', label: 'Books' },
    { href: '/entertainment', label: 'Entertainment' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 shadow-sm backdrop-blur-xl">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 transition-all hover:scale-105"
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-primary/30 shadow-md shadow-primary/20">
              <Image
                src="/profile.JPG"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-2xl font-black text-primary">
              Pratiyush
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              className="text-foreground md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            <ul className="hidden space-x-8 md:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative text-sm font-medium text-muted transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-primary after:to-accent after:transition-all hover:after:w-full"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {isMenuOpen && (
          <ul className="mt-4 space-y-2 md:hidden">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 text-muted transition-colors hover:text-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
