'use client';

import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchInput({ value, onChange, placeholder = 'Search...' }: SearchInputProps) {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(localValue);
    }, 300);

    return () => clearTimeout(timer);
  }, [localValue, onChange]);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  return (
    <div className="w-full">
      <label className="mb-2 block text-xs font-medium text-muted">Search</label>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
        <input
          type="text"
          value={localValue}
          onChange={(e) => setLocalValue(e.target.value)}
          placeholder={placeholder}
          className="h-[42px] w-full rounded border border-border bg-card-bg py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted hover:border-foreground/20 focus:border-foreground/40 focus:outline-none"
        />
      </div>
    </div>
  );
}
