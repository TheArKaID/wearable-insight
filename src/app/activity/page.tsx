import React from 'react';
import { AppHeader } from '@/components/layout/header';
import { PlaceholderChart } from '@/components/dashboard/placeholder-chart';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
// Note: DaisyUI table classes are applied directly to table elements

export default function ActivityPage() {
  // TODO: Fetch and display detailed activity data
  const activityLog = [
    { date: '2024-07-14', steps: 9500, distance: '7.2 km', calories: 450, activeMinutes: 65 },
    { date: '2024-07-13', steps: 8123, distance: '6.1 km', calories: 380, activeMinutes: 50 },
    { date: '2024-07-12', steps: 10200, distance: '8.0 km', calories: 510, activeMinutes: 75 },
    { date: '2024-07-11', steps: 7800, distance: '5.9 km', calories: 350, activeMinutes: 45 },
  ];

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
        <h2 className="text-2xl font-semibold mb-6">Activity Log</h2>

        <div className="grid gap-4 md:gap-6 lg:gap-8">
           {/* DaisyUI Card for Chart */}
           <div className="card bg-base-100 shadow-md rounded-lg">
             <div className="card-body p-6">
               <h3 className="card-title">Daily Activity Summary</h3>
               <PlaceholderChart />
             </div>
           </div>

           {/* DaisyUI Card for Table */}
           <div className="card bg-base-100 shadow-md rounded-lg overflow-x-auto"> {/* Added overflow for responsiveness */}
             <div className="card-body p-6">
               <h3 className="card-title mb-4">Detailed Log</h3>
                {/* DaisyUI Table */}
                <table className="table table-zebra w-full"> {/* Added table-zebra */}
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th className="text-right">Steps</th>
                      <th className="text-right">Distance</th>
                      <th className="text-right">Calories</th>
                      <th className="text-right">Active Minutes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activityLog.map((entry) => (
                      <tr key={entry.date} className="hover"> {/* Added hover effect */}
                        <td>{entry.date}</td>
                        <td className="text-right">{entry.steps.toLocaleString()}</td>
                        <td className="text-right">{entry.distance}</td>
                        <td className="text-right">{entry.calories.toLocaleString()} kcal</td>
                        <td className="text-right">{entry.activeMinutes} min</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
             </div>
           </div>
        </div>
      </main>
    </div>
  );
}
