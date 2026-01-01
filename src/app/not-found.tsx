import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="mb-4 text-9xl font-bold text-foreground">404</h1>

        <h2 className="mb-4 text-3xl font-semibold text-foreground md:text-4xl">
          Page Not Found
        </h2>

        <p className="mb-8 text-lg text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/">
            <Button>Go Home</Button>
          </Link>
          <Link href="/projects">
            <Button variant="outline">View Projects</Button>
          </Link>
          <Link href="#contact">
            <Button variant="outline">Contact Me</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
