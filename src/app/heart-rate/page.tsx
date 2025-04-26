import React from 'react';
import { AppHeader } from '@/components/layout/header';
import { PlaceholderChart } from '@/components/dashboard/placeholder-chart'; // Keep placeholder chart
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function HeartRatePage() {
  // TODO: Fetch and display detailed heart rate data
  return (
    <div className="flex flex-col min-h-screen bg-base-200"> {/* DaisyUI background */}
      <AppHeader />
      <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
         {/* DaisyUI Button */}
         <Link href="/" passHref>
            <button className="btn btn-outline btn-sm mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
            </button>
        </Link>
        <h2 className="text-2xl font-semibold mb-6">Heart Rate Details</h2>

        <div className="grid gap-4 md:gap-6 lg:gap-8">
           {/* Example Detail Card using DaisyUI Card */}
           <div className="card bg-base-100 shadow-md rounded-lg">
             <div className="card-body p-6"> {/* Adjust padding as needed */}
               <h3 className="card-title">Heart Rate Trends</h3> {/* card-title */}
               <p className="text-base-content opacity-70 mb-4">Detailed analysis of your heart rate over the selected period.</p> {/* Adjust text color/opacity */}
               <PlaceholderChart />
             </div>
           </div>

            {/* Additional cards */}
            <div className="card bg-base-100 shadow-md rounded-lg">
             <div className="card-body p-6">
               <h3 className="card-title">Resting Heart Rate</h3>
               <div className="text-3xl font-bold mt-2">65 bpm</div>
               <p className="text-sm text-base-content opacity-60 mt-1">Average over the last 7 days</p>
             </div>
           </div>

           <div className="card bg-base-100 shadow-md rounded-lg">
             <div className="card-body p-6">
               <h3 className="card-title">Heart Rate Zones</h3>
               <p className="text-base-content opacity-70 mt-2">Time spent in different heart rate zones (e.g., Fat Burn, Cardio, Peak).</p>
               {/* Placeholder for zones visualization */}
               <div className="h-32 bg-base-300 rounded-md flex items-center justify-center text-base-content opacity-50 mt-4">Zone Chart Placeholder</div> {/* Use base-300 for placeholder background */}
             </div>
           </div>
        </div>
      </main>
    </div>
  );
}
