import React from 'react';
import { TickSquare } from "iconsax-reactjs";

interface CheckboxProps {
    id: string;
    label: string;
    checked?: boolean;
    disabled?: boolean;
    results?: number;
    onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
    id,
    label,
    checked = false,
    disabled = false,
    results = 0,
    onChange
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.checked);
    };

    return (
        <div className="flex items-center relative">
            <input
                id={id.toLowerCase()}
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                disabled={disabled}
                className="peer w-6 h-6 cursor-pointer opacity-0"
            />
            <span className="absolute top-0.5 left-0.5 w-5 h-5 rounded-md border border-secondary-300 transition-opacity peer-checked:opacity-0 pointer-events-none"></span>
            <span className="absolute top-0 left-0 opacity-0 transition-opacity peer-checked:opacity-100 pointer-events-none">
                <TickSquare color="var(--color-primary-500)" variant="Bold" size={24} />
            </span>
            <label
                htmlFor={id.toLowerCase()}
                className={`pl-2 text-[20px] font-semibold leading-6 cursor-pointer select-none ${disabled ? 'text-secondary-300' : 'text-secondary-400'}`}
            >
                {label}
                {results !== 0 && (
                    <span className="pl-1 text-secondary-300">({results})</span>
                )}
            </label>
        </div>
    );
};

export default Checkbox;
