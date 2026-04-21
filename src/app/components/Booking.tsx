import React from 'react';

const ChevronDown = () => (
  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

interface BookingDataPointProps {
  label: string;
  placeholder: string;
  hasDivider?: boolean;
}

const BookingDataPoint = ({ label, placeholder, hasDivider }: BookingDataPointProps) => (
  <div className={`flex flex-1 items-center px-6 ${hasDivider ? 'border-r border-slate-100' : ''}`}>
    <div className="space-y-1">
      <h5 className="text-base font-semibold text-slate-800">{label}</h5>
      <div className="flex items-center text-sm text-slate-400">
        <span>{placeholder}</span>
        <ChevronDown />
      </div>
    </div>
  </div>
);

interface BookingSectionProps {
  title: string;
  isActive?: boolean;
}

const BookingSection = ({ title, isActive = false }: BookingSectionProps) => (
  <div className="w-121.5 flex-1 rounded-[10px] bg-white p-6 pt-5 shadow-[0px_10px_60px_rgba(226,236,249,0.5)]">
    <div className="mb-6 flex items-center gap-2">
      <div
        className={`flex h-4 w-4 items-center justify-center rounded-full border p-0.75 ${isActive ? 'border-blue-500 bg-blue-100' : 'border-slate-300'}`}
      >
        {isActive && <div className="h-full w-full rounded-full bg-blue-600" />}
      </div>
      <h4 className="text-base font-semibold text-slate-800">{title}</h4>
    </div>

    <div className="-mx-6 flex h-12 items-center">
      <BookingDataPoint label="Locations" placeholder="Select your city" hasDivider />
      <BookingDataPoint label="Date" placeholder="Select your date" hasDivider />
      <BookingDataPoint label="Time" placeholder="Select your time" />
    </div>
  </div>
);

const BookingPanel = () => {
  return (
    <>
      <h2 className="-mb-8 text-2xl font-bold">IN PROGRESS...</h2>
      {/*<div className="flex justify-between items-center gap-37 relative">*/}
      <div className="relative flex items-center justify-between gap-5">
        <BookingSection title="Pick - Up" isActive={true} />

        <button
          className="bg-primary-500 absolute top-1/2 left-1/2 flex h-15 w-15 -translate-1/2 items-center justify-center rounded-[10px] shadow-xl transition-transform hover:scale-105"
          type="button"
        >
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
            />
          </svg>
        </button>

        <BookingSection title="Drop - Off" />
      </div>
    </>
  );
};

export default BookingPanel;
