import React from 'react';
import BookingDataPoint from '@/components/BookingDataPoint';

interface BookingSectionProps {
  title: string;
  isActive?: boolean;
}

const BookingSection = ({ title, isActive = false }: BookingSectionProps) => (
  <div className="w-1/2 flex-1 rounded-[10px] bg-white px-12 py-6">
    <button className="mb-3 flex items-center gap-2" type="button">
      <span
        className={`flex h-4 w-4 items-center justify-center rounded-full p-1 ${isActive ? 'bg-primary-500/30' : 'bg-information-500/30'}`}
      >
        <span className={`h-full w-full rounded-full ${isActive ? 'bg-primary-500' : 'bg-information-500'}`} />
      </span>
      <span className="text-secondary-500 text-base font-semibold">{title}</span>
    </button>

    <div className="-mx-6 flex items-center">
      <BookingDataPoint label="Locations" placeholder="Select your city" hasDivider />
      <BookingDataPoint label="Date" placeholder="Select your date" hasDivider />
      <BookingDataPoint label="Time" placeholder="Select your time" />
    </div>
  </div>
);

export default BookingSection;
