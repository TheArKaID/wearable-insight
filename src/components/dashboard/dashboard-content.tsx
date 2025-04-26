import React from 'react';
import Link from 'next/link';
import { HeartPulse, Activity, BedDouble, BrainCircuit } from 'lucide-react';
import { PlaceholderChart } from './placeholder-chart'; // Keep placeholder chart for now
import { AiInsights } from './ai-insights'; // Keep AI insights component for now

export function DashboardContent() {
  // TODO: Replace placeholders with actual data fetching and chart components
  return (
    <>
      {/* Navigation Buttons using DaisyUI Buttons */}
      <div className="mb-6 flex flex-wrap gap-2">
        <Link href="/heart-rate" passHref>
          <button className="btn btn-outline btn-primary"> {/* Use DaisyUI button classes */}
            <HeartPulse className="mr-2 h-4 w-4" /> Heart Rate Details
          </button>
        </Link>
        <Link href="/activity" passHref>
          <button className="btn btn-outline btn-primary">
            <Activity className="mr-2 h-4 w-4" /> Activity Log
          </button>
        </Link>
        <Link href="/sleep" passHref>
          <button className="btn btn-outline btn-primary">
            <BedDouble className="mr-2 h-4 w-4" /> Sleep Analysis
          </button>
        </Link>
        <Link href="/ai-reports" passHref>
          <button className="btn btn-outline btn-primary">
            <BrainCircuit className="mr-2 h-4 w-4" /> AI Reports
          </button>
        </Link>
      </div>

      {/* Dashboard Grid using Tailwind grid and DaisyUI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 lg:gap-8">
        {/* Overview Cards using DaisyUI Card */}
        <div className="card bg-base-100 shadow-md rounded-lg"> {/* Apply card, background, shadow, rounded */}
          <div className="card-body p-4"> {/* Use card-body for padding */}
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h2 className="card-title text-sm font-medium">Avg Heart Rate</h2> {/* card-title */}
              <HeartPulse className="h-4 w-4 text-base-content opacity-60" /> {/* Adjust icon color */}
            </div>
            <div>
              <div className="text-2xl font-bold">72 bpm</div>
              <p className="text-xs text-base-content opacity-60">+2 bpm from last week</p> {/* Adjust text color */}
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md rounded-lg">
          <div className="card-body p-4">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h2 className="card-title text-sm font-medium">Steps Today</h2>
              <Activity className="h-4 w-4 text-base-content opacity-60" />
            </div>
            <div>
              <div className="text-2xl font-bold">8,123</div>
              <p className="text-xs text-base-content opacity-60">+1,200 from yesterday</p>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md rounded-lg">
          <div className="card-body p-4">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h2 className="card-title text-sm font-medium">Sleep Duration</h2>
              <BedDouble className="h-4 w-4 text-base-content opacity-60" />
            </div>
            <div>
              <div className="text-2xl font-bold">7h 15m</div>
              <p className="text-xs text-base-content opacity-60">Avg last 7 nights</p>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md rounded-lg">
          <div className="card-body p-4">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h2 className="card-title text-sm font-medium">Calories Burned</h2>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-base-content opacity-60">
                <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.177A.75.75 0 0 0 8.38 9.18l1.95-2.1a.75.75 0 0 0-1.141-1.003l-1.95 2.1a.75.75 0 0 0-.14 1.002l-1.95-2.1a.75.75 0 0 0-1.141 1.003l1.95 2.1a.75.75 0 0 0 .14 1.002l1.95-2.1a.75.75 0 0 0-1.141 1.003l-1.95 2.1a.75.75 0 0 0-.14 1.002l-1.95-2.1a.75.75 0 0 0-1.141 1.003l1.95 2.1a.75.75 0 0 0 .14 1.002l4.38 4.691a1.5 1.5 0 0 0 2.122 0l4.38-4.691a.75.75 0 0 0 .14-1.002l1.95-2.1a.75.75 0 0 0-1.141-1.003l-1.95 2.1a.75.75 0 0 0 .14-1.002l-1.95-2.1a.75.75 0 0 0-1.141-1.003l1.95 2.1a.75.75 0 0 0 .14-1.002l-1.95-2.1a.75.75 0 0 0-1.141-1.003l1.95 2.1a.75.75 0 0 0 .14-1.002l-1.95-2.1a.75.75 0 0 0-1.071-.136Z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold">2,350 kcal</div>
              <p className="text-xs text-base-content opacity-60">Estimated total today</p>
            </div>
          </div>
        </div>

        {/* Main Chart Area */}
        <div className="card bg-base-100 shadow-md rounded-lg md:col-span-2 lg:col-span-3 xl:col-span-4">
          <div className="card-body p-4">
            <h2 className="card-title">Metric Timeline</h2>
            {/* TODO: Add Chart specific controls */}
            <div className="pl-2 mt-4">
              {/* PlaceholderChart needs update if using a DaisyUI-compatible chart lib or custom SVG */}
              <PlaceholderChart />
            </div>
          </div>
        </div>

        {/* AI Insights Section */}
        <div className="card bg-base-100 shadow-md rounded-lg md:col-span-2 lg:col-span-3 xl:col-span-4">
          <div className="card-body p-4">
            <h2 className="card-title">AI-Powered Insights & Recommendations</h2>
             <div className="mt-4">
                <AiInsights />
             </div>
          </div>
        </div>
      </div>
    </>
  );
}
