import React from 'react';
import { ArrowDown2 } from 'iconsax-reactjs';

interface BookingDataPointProps {
  label: string;
  placeholder: string;
  hasDivider?: boolean;
}

const BookingDataPoint = ({ label, placeholder, hasDivider }: BookingDataPointProps) => (
  <div className={`flex w-1/3 flex-1 flex-col gap-2 px-6 ${hasDivider ? 'border-r border-[#c3d4e9]/40' : ''}`}>
    <h5 className="text-secondary-500 text-base font-bold">{label}</h5>
    <button className="text-secondary-300 relative pr-8 text-left text-xs font-medium tracking-tight" type="button">
      <span>{placeholder}</span>
      <ArrowDown2 className="absolute top-0 right-0" variant="Outline" color="var(--color-secondary-500)" size={16} />
    </button>
  </div>
);

export default BookingDataPoint;
