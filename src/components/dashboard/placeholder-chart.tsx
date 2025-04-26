'use client';

import * as React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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

const chartConfig = {
  value: {
    label: 'Metric Value',
    color: 'hsl(var(--chart-1))', // Use theme color variable
  },
} satisfies ChartConfig;

export function PlaceholderChart() {
  // TODO: Add interaction logic (zoom, pan) if needed
  // TODO: Adapt chart type (Line, Area) based on selected metric
  return (
    <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
      <BarChart
        accessibilityLayer // Improves accessibility
        data={chartData}
        margin={{
          top: 5,
          right: 10,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => {
            // Basic date formatting
            const date = new Date(value);
            return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
          }}
        />
         <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          // You might want to dynamically set the domain based on data
          // domain={['dataMin - 5', 'dataMax + 5']}
        />
        <ChartTooltip
          cursor={false} // Disable cursor line for bar chart if desired
          content={<ChartTooltipContent hideLabel />} // Use Shadcn tooltip
        />
        <Bar
          dataKey="value"
          fill="var(--color-value)" // Use CSS variable from config
          radius={4} // Add rounded corners
        />
      </BarChart>
    </ChartContainer>
  );
}
