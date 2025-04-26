'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Calendar as CalendarIcon, ChevronDown } from 'lucide-react';
import { format } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css'; // Import base styles for react-day-picker
import { WearableDataSource } from '@/services/wearable-api';

const dataSources: { value: WearableDataSource; label: string }[] = [
  { value: 'fitbit', label: 'Fitbit' },
  { value: 'apple_health', label: 'Apple Health' },
  { value: 'garmin', label: 'Garmin' },
];

export function DataControls() {
  const [selectedDataSource, setSelectedDataSource] = useState<WearableDataSource>('fitbit');
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    to: new Date(),
  });
  const calendarModalRef = useRef<HTMLDialogElement>(null);

  const handleDataSourceChange = (source: WearableDataSource) => {
    setSelectedDataSource(source);
    // Close dropdown if necessary (DaisyUI handles this internally for its dropdown)
    console.log('Selected Data Source:', source);
    // TODO: Add logic to refetch data based on the new source
  };

  const handleDateRangeChange = (range: DateRange | undefined) => {
    setDateRange(range);
    console.log('Selected Date Range:', range);
    // TODO: Add logic to refetch data based on the new date range
    // Close the modal after selecting a range
    if (range?.from && range?.to) {
      calendarModalRef.current?.close();
    }
  };

  const selectedLabel = dataSources.find(ds => ds.value === selectedDataSource)?.label || "Select source...";

  return (
    <div className="flex items-center gap-2 md:gap-4">
      {/* Data Source Selector using DaisyUI Dropdown */}
      <div className="dropdown">
        <button tabIndex={0} className="btn btn-outline w-[150px] justify-between text-sm font-normal">
          {selectedLabel}
          <ChevronDown className="h-4 w-4 opacity-50" />
        </button>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          {dataSources.map((source) => (
            <li key={source.value}>
              <a onClick={() => handleDataSourceChange(source.value)}>{source.label}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Date Range Picker using DaisyUI Button + Modal + react-day-picker */}
      <button
        className="btn btn-outline w-[240px] justify-start text-left font-normal text-sm"
        onClick={() => calendarModalRef.current?.showModal()}
      >
        <CalendarIcon className="mr-2 h-4 w-4" />
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
          `}</style>
           <DayPicker
            initialFocus
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={handleDateRangeChange}
            numberOfMonths={2}
          />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
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
