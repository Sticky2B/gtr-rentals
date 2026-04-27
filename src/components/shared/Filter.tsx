import Checkbox from '@/components/ui/Checkbox';

export interface FilterOption {
  id: string;
  label: string;
  value: string;
  results: number;
}

interface FilterProps {
  title: string;
  options: FilterOption[];
  selectedValues: string[];
  onChange: (value: string) => void;
}

const Filter = ({ title, options, selectedValues, onChange }: FilterProps) => {
  return (
    <div className="relative">
      <span className="text-secondary-300 mb-7 block text-xs font-semibold tracking-widest uppercase">
        {title}
      </span>
      <div className="flex flex-col gap-8">
        {options.map((option) => (
          <Checkbox
            key={option.id}
            id={option.id}
            label={option.label}
            results={option.results}
            checked={selectedValues.includes(option.value)}
            onChange={() => onChange(option.value)}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;
