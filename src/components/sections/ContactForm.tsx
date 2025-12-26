'use client';

import { useState, FormEvent } from 'react';
import Button from '@/components/ui/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const mailtoLink = `mailto:pratiyush@example.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-6">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full rounded-md border border-border bg-card-bg px-4 py-2 text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="w-full rounded-md border border-border bg-card-bg px-4 py-2 text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full rounded-md border border-border bg-card-bg px-4 py-2 text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="Your message..."
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </Button>

      {status === 'success' && (
        <p className="text-center text-sm text-green-600">
          Message sent successfully!
        </p>
      )}

      {status === 'error' && (
        <p className="text-center text-sm text-red-600">
          Failed to send message. Please try again.
        </p>
      )}
    </form>
  );
}
