'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css'; // Import base styles for react-day-picker
// Removed WearableDataSource import as it's no longer needed

// Removed dataSources constant

export function DataControls() {
  // Removed selectedDataSource and handleDataSourceChange state/function
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    to: new Date(),
  });
  const calendarModalRef = useRef<HTMLDialogElement>(null);

  const handleDateRangeChange = (range: DateRange | undefined) => {
    setDateRange(range);
    console.log('Selected Date Range:', range);
    // TODO: Add logic to refetch data based on the new date range
    // Close the modal after selecting a range
    if (range?.from && range?.to) {
      calendarModalRef.current?.close();
    }
  };

  return (
    <div className="flex items-center gap-1 md:gap-2"> {/* Adjusted gap */}
      {/* Removed Data Source Selector */}

      {/* Date Range Picker using DaisyUI Button + Modal + react-day-picker */}
      {/* Button uses responsive classes: icon only on small screens, text+icon on medium+ */}
      <button
        className="btn btn-ghost md:btn-outline btn-sm md:btn-md md:w-[240px] justify-start text-left font-normal md:text-sm p-2 md:p-2" // Adjusted padding and size
        onClick={() => calendarModalRef.current?.showModal()}
      >
        <CalendarIcon className="h-4 w-4 md:mr-2" /> {/* Keep icon visible */}
        <span className="hidden md:inline"> {/* Hide text span on small screens */}
            {dateRange?.from ? (
              dateRange.to ? (
                <>
                  {format(dateRange.from, 'LLL dd, y')} -{' '}
                  {format(dateRange.to, 'LLL dd, y')}
                </>
              ) : (
                format(dateRange.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date range</span>
            )}
        </span>
      </button>

      {/* Calendar Modal */}
      <dialog id="calendar_modal" className="modal" ref={calendarModalRef}>
        <div className="modal-box w-auto max-w-5xl">
          <h3 className="font-bold text-lg mb-4">Select Date Range</h3>
           <style>{`
            /* Custom styles for react-day-picker within DaisyUI modal */
            .rdp { /* Base class */
              --rdp-cell-size: 40px; /* Adjust cell size */
              --rdp-accent-color: hsl(var(--p)); /* Use DaisyUI primary color */
              --rdp-background-color: hsl(var(--a) / 0.1); /* Use DaisyUI accent color with transparency */
              margin: 1em 0;
              color: hsl(var(--bc)); /* Base text color */
            }
             .rdp-day_selected,
             .rdp-day_selected:focus-visible,
             .rdp-day_selected:hover {
                background-color: hsl(var(--p)); /* Primary color */
                color: hsl(var(--pc)); /* Primary content color */
                opacity: 1;
             }
             .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
                background-color: hsl(var(--a) / 0.2); /* Lighter accent on hover */
             }
             .rdp-caption_label {
                color: hsl(var(--bc));
             }
             .rdp-head_cell {
                color: hsl(var(--bc) / 0.6); /* Dimmer color for weekdays */
             }
            .rdp-nav_button {
                 color: hsl(var(--p));
             }
             /* Ensure modal content is visible */
             .modal-box {
                overflow: visible; /* Allow date picker popups if any */
             }
             @media (max-width: 767px) {
               .rdp {
                 --rdp-cell-size: 35px; /* Slightly smaller cells on mobile */
               }
               .modal-box {
                  width: 95%; /* Adjust modal width on mobile */
               }
             }
          `}</style>
           <DayPicker
            initialFocus
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={handleDateRangeChange}
            numberOfMonths={1} // Show only 1 month on mobile for better fit
            className="md:hidden" // Hide on medium and up
          />
           <DayPicker
            initialFocus
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={handleDateRangeChange}
            numberOfMonths={2}
             className="hidden md:block" // Hide on small screens
          />
          <div className="modal-action mt-4">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm md:btn-md">Close</button>
            </form>
          </div>
        </div>
         {/* Optional: Click outside to close */}
        <form method="dialog" className="modal-backdrop">
            <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
