import React from 'react';
import { AppHeader } from '@/components/layout/header';
import { PlaceholderChart } from '@/components/dashboard/placeholder-chart';
import Link from 'next/link';
import { ArrowLeft, BedDouble, Moon, Sunrise } from 'lucide-react';

export default function SleepPage() {
  // TODO: Fetch and display detailed sleep data
  return (
    <div className="flex flex-col min-h-screen bg-base-200">
      <AppHeader />
      <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
        <Link href="/" passHref>
            <button className="btn btn-outline btn-sm mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
            </button>
        </Link>
        <h2 className="text-2xl font-semibold mb-6">Sleep Analysis</h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8">
            {/* DaisyUI Stats or Cards for summary */}
             <div className="card bg-base-100 shadow-md rounded-lg">
                <div className="card-body p-4">
                    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <div className="text-sm font-medium card-title">Avg Sleep Duration</div>
                        <BedDouble className="h-4 w-4 text-base-content opacity-60" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold">7h 15m</div>
                        <p className="text-xs text-base-content opacity-60">Average over the last 7 nights</p>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 shadow-md rounded-lg">
                <div className="card-body p-4">
                    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <div className="text-sm font-medium card-title">Avg Time in Bed</div>
                        <Moon className="h-4 w-4 text-base-content opacity-60" />
                    </div>
                    <div>
                       <div className="text-2xl font-bold">7h 45m</div>
                       <p className="text-xs text-base-content opacity-60">Includes time awake</p>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 shadow-md rounded-lg">
                 <div className="card-body p-4">
                    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <div className="text-sm font-medium card-title">Avg Wake-up Time</div>
                        <Sunrise className="h-4 w-4 text-base-content opacity-60" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold">6:45 AM</div>
                        <p className="text-xs text-base-content opacity-60">Average over the last 7 days</p>
                    </div>
                </div>
            </div>

           {/* Main Sleep Chart Card */}
           <div className="card bg-base-100 shadow-md rounded-lg md:col-span-2 lg:col-span-3">
             <div className="card-body p-6">
               <h3 className="card-title">Sleep Stages Breakdown</h3>
               <p className="text-base-content opacity-70 mb-4 mt-2">Analysis of time spent in different sleep stages (Awake, REM, Light, Deep).</p>
               <PlaceholderChart />
             </div>
           </div>

            {/* Quality & Consistency Card */}
           <div className="card bg-base-100 shadow-md rounded-lg md:col-span-2 lg:col-span-3">
             <div className="card-body p-6">
               <h3 className="card-title">Sleep Quality & Consistency</h3>
               <p className="text-base-content opacity-70 mt-2">Details about your sleep quality score and consistency patterns.</p>
               <div className="h-32 bg-base-300 rounded-md flex items-center justify-center text-base-content opacity-50 mt-4">Quality/Consistency Chart Placeholder</div>
             </div>
           </div>
        </div>
      </main>
    </div>
  );
}
