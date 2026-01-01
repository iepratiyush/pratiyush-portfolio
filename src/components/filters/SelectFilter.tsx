'use client';

interface SelectFilterProps {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

export default function SelectFilter({ label, value, options, onChange }: SelectFilterProps) {
  return (
    <div className="w-full">
      <label className="mb-2 block text-xs font-medium text-muted">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-[42px] w-full rounded border border-border bg-card-bg px-4 text-sm text-foreground hover:border-foreground/20 focus:border-foreground/40 focus:outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
