'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import type { ApexOptions } from 'apexcharts';
import { useTheme } from 'next-themes';
import { Skeleton } from '@/components/common/skeleton'; // Import Skeleton for loading state

// Dynamically import ApexCharts to ensure it only runs on the client side
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false, // Disable server-side rendering for this component
  loading: () => <Skeleton className="min-h-[300px] w-full" /> // Show skeleton while loading
});

// Sample data - replace with actual fetched data
const chartData = [
  { date: '2024-07-01', value: 75 },
  { date: '2024-07-02', value: 72 },
  { date: '2024-07-03', value: 68 },
  { date: '2024-07-04', value: 78 },
  { date: '2024-07-05', value: 80 },
  { date: '2024-07-06', value: 70 },
  { date: '2024-07-07', value: 74 },
  { date: '2024-07-08', value: 71 },
  { date: '2024-07-09', value: 69 },
  { date: '2024-07-10', value: 76 },
  { date: '2024-07-11', value: 73 },
  { date: '2024-07-12', value: 77 },
];

export function PlaceholderChart() {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  // Define series for ApexCharts
  const series = [
    {
      name: 'Value',
      data: chartData.map(item => item.value),
    },
  ];

  // Define options for ApexCharts
  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: 300,
      toolbar: {
        show: false, // Hide toolbar for cleaner look
      },
      foreColor: isDarkMode ? '#A6ADBB' : '#373d3f', // Adjust text color based on theme
    },
    plotOptions: {
      bar: {
        borderRadius: 4, // Rounded corners for bars
        horizontal: false,
        columnWidth: '55%', // Adjust column width
      },
    },
    dataLabels: {
      enabled: false, // Disable data labels on bars
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: chartData.map(item =>
        new Date(item.date).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
        })
      ),
      labels: {
        style: {
          fontSize: '12px',
          // Colors handled by foreColor
        },
      },
      axisBorder: {
        show: false, // Hide x-axis line
      },
      axisTicks: {
        show: false, // Hide x-axis ticks
      },
    },
    yaxis: {
      title: {
        text: undefined, // Hide Y-axis title if not needed
      },
       labels: {
        style: {
          fontSize: '12px',
          // Colors handled by foreColor
        },
      },
    },
    fill: {
      opacity: 1,
      // Use CSS variables for colors to respect theme dynamically
      // Note: ApexCharts might not directly support HSL strings from CSS variables in all contexts.
      // It's safer to define colors directly or use a simple theme mapping.
      colors: ['hsl(var(--p))'], // Use DaisyUI primary color
    },
    tooltip: {
      theme: isDarkMode ? 'dark' : 'light', // Set tooltip theme
      y: {
        formatter: function (val) {
          return val + ' units'; // Customize tooltip value format
        },
      },
    },
    grid: {
      borderColor: isDarkMode ? '#373d3f' : '#e0e0e0', // Adjust grid line color based on theme
      strokeDashArray: 4, // Dashed grid lines
       yaxis: {
            lines: {
                show: true // Show horizontal grid lines
            }
        },
        xaxis: {
            lines: {
                show: false // Hide vertical grid lines
            }
        }
    },
    theme: {
        mode: isDarkMode ? 'dark' : 'light',
        // Using the primary color directly
        monochrome: {
            enabled: true,
            color: 'hsl(var(--p))',
            shadeTo: isDarkMode ? 'dark' : 'light',
            shadeIntensity: 0.65
        },
    },
  };

  return (
    <div className="min-h-[300px] w-full text-xs">
      {/* Render the dynamically imported chart */}
      <Chart options={options} series={series} type="bar" height={300} width="100%" />
    </div>
  );
}
