'use client';

export default function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-4 top-1/4 h-72 w-72 animate-float rounded-full bg-primary/20 blur-3xl"></div>
      <div
        className="absolute right-1/4 top-1/3 h-96 w-96 animate-glow rounded-full bg-accent/20 blur-3xl"
        style={{ animationDelay: '1s' }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/3 h-80 w-80 animate-float rounded-full bg-accent-alt/20 blur-3xl"
        style={{ animationDelay: '2s' }}
      ></div>
    </div>
  );
}
