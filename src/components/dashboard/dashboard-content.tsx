import React from 'react';
import Link from 'next/link'; // Import Link from next/link
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HeartPulse, Activity, BedDouble, BrainCircuit } from 'lucide-react';
import { PlaceholderChart } from './placeholder-chart';
import { AiInsights } from './ai-insights';

export function DashboardContent() {
  // TODO: Replace placeholders with actual data fetching and chart components based on selected metric/filters
  return (
    <>
      {/* Navigation Buttons with Links */}
      <div className="mb-6 flex flex-wrap gap-2">
        <Button variant="outline" asChild>
          <Link href="/heart-rate">
            <HeartPulse className="mr-2 h-4 w-4" /> Heart Rate Details
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/activity">
            <Activity className="mr-2 h-4 w-4" /> Activity Log
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/sleep">
             <BedDouble className="mr-2 h-4 w-4" /> Sleep Analysis
          </Link>
        </Button>
        <Button variant="outline" asChild>
           <Link href="/ai-reports">
             <BrainCircuit className="mr-2 h-4 w-4" /> AI Reports
           </Link>
        </Button>
      </div>

      {/* Existing Dashboard Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 lg:gap-8">
        {/* Overview Cards (Example) */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Heart Rate</CardTitle>
             <HeartPulse className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">72 bpm</div>
            <p className="text-xs text-muted-foreground">+2 bpm from last week</p>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Steps Today</CardTitle>
             {/* Using Activity icon as a stand-in for steps */}
             <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,123</div>
            <p className="text-xs text-muted-foreground">+1,200 from yesterday</p>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sleep Duration</CardTitle>
            <BedDouble className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7h 15m</div>
            <p className="text-xs text-muted-foreground">Avg last 7 nights</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Calories Burned</CardTitle>
             {/* Using a simple flame SVG for calories */}
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-muted-foreground">
               <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.177A.75.75 0 0 0 8.38 9.18l1.95-2.1a.75.75 0 0 0-1.141-1.003l-1.95 2.1a.75.75 0 0 0-.14 1.002l-1.95-2.1a.75.75 0 0 0-1.141 1.003l1.95 2.1a.75.75 0 0 0 .14 1.002l1.95-2.1a.75.75 0 0 0-1.141 1.003l-1.95 2.1a.75.75 0 0 0-.14 1.002l-1.95-2.1a.75.75 0 0 0-1.141 1.003l1.95 2.1a.75.75 0 0 0 .14 1.002l4.38 4.691a1.5 1.5 0 0 0 2.122 0l4.38-4.691a.75.75 0 0 0 .14-1.002l1.95-2.1a.75.75 0 0 0-1.141-1.003l-1.95 2.1a.75.75 0 0 0 .14-1.002l-1.95-2.1a.75.75 0 0 0-1.141-1.003l1.95 2.1a.75.75 0 0 0 .14-1.002l-1.95-2.1a.75.75 0 0 0-1.141-1.003l1.95 2.1a.75.75 0 0 0 .14-1.002l-1.95-2.1a.75.75 0 0 0-1.071-.136Z" clipRule="evenodd" />
             </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,350 kcal</div>
            <p className="text-xs text-muted-foreground">Estimated total today</p>
          </CardContent>
        </Card>

        {/* Main Chart Area */}
        <Card className="md:col-span-2 lg:col-span-3 xl:col-span-4">
          <CardHeader>
            <CardTitle>Metric Timeline</CardTitle>
            {/* TODO: Add Chart specific controls (e.g., time granularity) */}
          </CardHeader>
          <CardContent className="pl-2">
             {/* Replace with actual Shadcn Chart component */}
            <PlaceholderChart />
          </CardContent>
        </Card>

        {/* AI Insights Section */}
        <Card className="md:col-span-2 lg:col-span-3 xl:col-span-4">
          <CardHeader>
            <CardTitle>AI-Powered Insights & Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <AiInsights />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
