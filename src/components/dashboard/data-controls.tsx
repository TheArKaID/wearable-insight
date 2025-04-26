'use client';

import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronsUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { DateRange } from 'react-day-picker';
import { WearableDataSource } from '@/services/wearable-api';

const dataSources: { value: WearableDataSource; label: string }[] = [
  { value: 'fitbit', label: 'Fitbit' },
  { value: 'apple_health', label: 'Apple Health' },
  { value: 'garmin', label: 'Garmin' },
  // Add more sources if needed
];

export function DataControls() {
  const [selectedDataSource, setSelectedDataSource] = useState<WearableDataSource>('fitbit');
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // Default to last 7 days
    to: new Date(),
  });
  const [sourcePopoverOpen, setSourcePopoverOpen] = useState(false);
  const [calendarPopoverOpen, setCalendarPopoverOpen] = useState(false);

  const handleDataSourceChange = (source: WearableDataSource) => {
    setSelectedDataSource(source);
    setSourcePopoverOpen(false);
    // TODO: Add logic to refetch data based on the new source
    console.log('Selected Data Source:', source);
  };

  const handleDateRangeChange = (range: DateRange | undefined) => {
    setDateRange(range);
    // TODO: Add logic to refetch data based on the new date range
    console.log('Selected Date Range:', range);
    // Optionally close popover after selection, consider if single day selection needs different behavior
    // setCalendarPopoverOpen(false);
  };

  const selectedLabel = dataSources.find(ds => ds.value === selectedDataSource)?.label || "Select source...";

  return (
    <div className="flex items-center gap-2 md:gap-4">
      {/* Data Source Selector */}
      <Popover open={sourcePopoverOpen} onOpenChange={setSourcePopoverOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={sourcePopoverOpen}
            className="w-[150px] justify-between"
          >
            {selectedLabel}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[150px] p-0">
          <Command>
            <CommandInput placeholder="Search source..." />
            <CommandList>
              <CommandEmpty>No source found.</CommandEmpty>
              <CommandGroup>
                {dataSources.map((source) => (
                  <CommandItem
                    key={source.value}
                    value={source.value}
                    onSelect={() => handleDataSourceChange(source.value)}
                  >
                    {source.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {/* Date Range Picker */}
      <Popover open={calendarPopoverOpen} onOpenChange={setCalendarPopoverOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-[240px] justify-start text-left font-normal"
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
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="end">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={handleDateRangeChange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
