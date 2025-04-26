import React from 'react';
import { AppHeader } from '@/components/layout/header';
import { AiInsights } from '@/components/dashboard/ai-insights'; // Reuse the AI Insights component
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AiReportsPage() {
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
        <h2 className="text-2xl font-semibold mb-6">AI Reports & Insights</h2>

        <div className="grid gap-4 md:gap-6 lg:gap-8">
           {/* Display AI Insights within a DaisyUI Card */}
           <div className="card bg-base-100 shadow-md rounded-lg col-span-1 md:col-span-2 lg:col-span-3">
              <div className="card-body p-6">
                 <h3 className="card-title">Generated Insights and Recommendations</h3>
                 <div className="mt-4">
                    <AiInsights />
                 </div>
              </div>
           </div>

           {/* Potential future section */}
           {/*
           <div className="card bg-base-100 shadow-md rounded-lg col-span-1 md:col-span-2 lg:col-span-3">
             <div className="card-body p-6">
               <h3 className="card-title">Advanced AI Analysis (Coming Soon)</h3>
               <p className="text-base-content opacity-70 mt-2">Explore deeper pattern detection, correlation analysis, and predictive health insights in future updates.</p>
               <div className="h-40 bg-base-300 rounded-md flex items-center justify-center text-base-content opacity-50 mt-4">
                  Advanced Report Placeholder
               </div>
             </div>
           </div>
           */}
        </div>
      </main>
    </div>
  );
}
