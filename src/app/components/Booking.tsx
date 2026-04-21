import React from 'react';

const ChevronDown = () => (
    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

interface BookingDataPointProps {
    label: string;
    placeholder: string;
    hasDivider?: boolean;
}

const BookingDataPoint = ({ label, placeholder, hasDivider }: BookingDataPointProps) => (
    <div className={`flex items-center flex-1 px-6 ${hasDivider ? 'border-r border-slate-100' : ''}`}>
        <div className="space-y-1">
            <h5 className="font-semibold text-base text-slate-800">{label}</h5>
            <div className="flex items-center text-slate-400 text-sm">
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
    <div className="bg-white rounded-[10px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] p-6 pt-5 flex-1 w-121.5">
        <div className="flex items-center gap-2 mb-6">
            <div className={`w-4 h-4 rounded-full flex items-center justify-center p-0.75 border ${isActive ? 'border-blue-500 bg-blue-100' : 'border-slate-300'}`}>
                {isActive && <div className="w-full h-full rounded-full bg-blue-600" />}
            </div>
            <h4 className="font-semibold text-base text-slate-800">{title}</h4>
        </div>

        <div className="flex items-center -mx-6 h-12">
            <BookingDataPoint label="Locations" placeholder="Select your city" hasDivider />
            <BookingDataPoint label="Date" placeholder="Select your date" hasDivider />
            <BookingDataPoint label="Time" placeholder="Select your time" />
        </div>
    </div>
);

const BookingPanel = () => {
    return (
        <>
            <h2 className="font-bold text-2xl -mb-8">IN PROGRESS...</h2>
            {/*<div className="flex justify-between items-center gap-37 relative">*/}
            <div className="flex justify-between items-center gap-5 relative">
                <BookingSection title="Pick - Up" isActive={true} />

                <button
                    className="absolute top-1/2 left-1/2 -translate-1/2 flex items-center justify-center w-15 h-15 rounded-[10px] bg-primary-500 shadow-xl transition-transform hover:scale-105"
                    type="button"
                >
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                </button>

                <BookingSection title="Drop - Off" />
            </div>
        </>
    );
};

export default BookingPanel;
