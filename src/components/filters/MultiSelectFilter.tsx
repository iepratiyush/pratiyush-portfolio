'use client';

import { Check, ChevronDown, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface MultiSelectFilterProps {
  label: string;
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

export default function MultiSelectFilter({ label, options, selected, onChange }: MultiSelectFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((item) => item !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  const clearAll = () => {
    onChange([]);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <label className="mb-2 block text-xs font-medium text-muted">{label}</label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-[42px] w-full items-center justify-between rounded border border-border bg-card-bg px-4 text-sm text-foreground hover:border-foreground/20 focus:border-foreground/40 focus:outline-none"
      >
        <span className="truncate">
          {selected.length === 0
            ? `Select ${label.toLowerCase()}`
            : `${selected.length} selected`}
        </span>
        <ChevronDown className={`ml-2 h-4 w-4 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-full rounded border border-border bg-card-bg shadow-xl backdrop-blur-sm">
          <div className="max-h-60 overflow-y-auto bg-card-bg p-2">
            {selected.length > 0 && (
              <button
                type="button"
                onClick={clearAll}
                className="mb-2 flex w-full items-center gap-2 rounded px-3 py-2 text-sm text-muted hover:bg-secondary"
              >
                <X className="h-4 w-4" />
                Clear all
              </button>
            )}
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => toggleOption(option)}
                className="flex w-full items-center justify-between rounded px-3 py-2 text-sm text-foreground hover:bg-secondary"
              >
                <span className="truncate">{option}</span>
                {selected.includes(option) && <Check className="h-4 w-4 flex-shrink-0 text-foreground" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
