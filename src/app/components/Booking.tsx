'use client';

import React, { useState } from 'react';
import BookingSection from '@/app/components/BookingSection';

const Booking = () => {
  const [bookingActive, setBookingActive] = useState(true);

  const handleActiveBooking = () => {
    setBookingActive(!bookingActive);
  };

  return (
    <>
      <div className="relative mb-2 flex justify-between gap-37">
        <BookingSection title="Pick - Up" isActive={bookingActive} />

        <button
          className="bg-primary-500 absolute top-1/2 left-1/2 flex h-15 w-15 -translate-1/2 rotate-90 items-center justify-center rounded-[10px] shadow-xl transition-transform hover:scale-105"
          type="button"
          onClick={handleActiveBooking}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7.16 3.836v13.618M3.083 7.932 7.16 3.835l4.078 4.097M17.089 20.167V6.55M21.167 16.071l-4.078 4.097-4.078-4.097"
            />
          </svg>
        </button>

        <BookingSection title="Drop - Off" isActive={!bookingActive} />
      </div>
    </>
  );
};

export default Booking;
