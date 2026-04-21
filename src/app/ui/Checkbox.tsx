import React from 'react';
import { TickSquare } from 'iconsax-reactjs';

interface CheckboxProps {
  id: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  results?: number;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, label, checked = false, disabled = false, results = 0, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <div className="relative flex items-center">
      <input
        id={id.toLowerCase()}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className="peer h-6 w-6 cursor-pointer opacity-0"
      />
      <span className="border-secondary-300 pointer-events-none absolute top-0.5 left-0.5 h-5 w-5 rounded-md border transition-opacity peer-checked:opacity-0"></span>
      <span className="pointer-events-none absolute top-0 left-0 opacity-0 transition-opacity peer-checked:opacity-100">
        <TickSquare color="var(--color-primary-500)" variant="Bold" size={24} />
      </span>
      <label
        htmlFor={id.toLowerCase()}
        className={`cursor-pointer pl-2 text-[20px] leading-6 font-semibold select-none ${disabled ? 'text-secondary-300' : 'text-secondary-400'}`}
      >
        {label}
        {results !== 0 && <span className="text-secondary-300 pl-1">({results})</span>}
      </label>
    </div>
  );
};

export default Checkbox;
