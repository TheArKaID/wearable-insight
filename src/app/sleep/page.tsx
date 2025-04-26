import React from 'react';
import { AppHeader } from '@/components/layout/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceholderChart } from '@/components/dashboard/placeholder-chart';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BedDouble, Moon, Sunrise } from 'lucide-react';

export default function SleepPage() {
  // TODO: Fetch and display detailed sleep data (duration, stages, quality)
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
        <Button variant="outline" size="sm" asChild className="mb-4">
            <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
            </Link>
        </Button>
        <h2 className="text-2xl font-semibold mb-6">Sleep Analysis</h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8">
            <Card>
             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
               <CardTitle className="text-sm font-medium">Avg Sleep Duration</CardTitle>
               <BedDouble className="h-4 w-4 text-muted-foreground" />
             </CardHeader>
             <CardContent>
               <div className="text-2xl font-bold">7h 15m</div>
               <p className="text-xs text-muted-foreground">Average over the last 7 nights</p>
             </CardContent>
           </Card>
            <Card>
             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
               <CardTitle className="text-sm font-medium">Avg Time in Bed</CardTitle>
                <Moon className="h-4 w-4 text-muted-foreground" />
             </CardHeader>
             <CardContent>
               <div className="text-2xl font-bold">7h 45m</div>
               <p className="text-xs text-muted-foreground">Includes time awake</p>
             </CardContent>
           </Card>
            <Card>
             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
               <CardTitle className="text-sm font-medium">Avg Wake-up Time</CardTitle>
                <Sunrise className="h-4 w-4 text-muted-foreground" />
             </CardHeader>
             <CardContent>
               <div className="text-2xl font-bold">6:45 AM</div>
               <p className="text-xs text-muted-foreground">Average over the last 7 days</p>
             </CardContent>
           </Card>

           {/* Main Sleep Chart */}
           <Card className="md:col-span-2 lg:col-span-3">
             <CardHeader>
               <CardTitle>Sleep Stages Breakdown</CardTitle>
             </CardHeader>
             <CardContent>
               <p className="text-muted-foreground mb-4">Analysis of time spent in different sleep stages (Awake, REM, Light, Deep).</p>
               {/* Replace with a specific sleep stages chart */}
               <PlaceholderChart />
             </CardContent>
           </Card>

            {/* Add more cards for sleep quality score, consistency, etc. */}
           <Card className="md:col-span-2 lg:col-span-3">
             <CardHeader>
               <CardTitle>Sleep Quality & Consistency</CardTitle>
             </CardHeader>
             <CardContent>
               {/* Placeholder for quality score and consistency viz */}
                <p className="text-muted-foreground">Details about your sleep quality score and consistency patterns.</p>
                <div className="h-32 bg-muted rounded-md flex items-center justify-center text-muted-foreground">Quality/Consistency Chart Placeholder</div>
             </CardContent>
           </Card>
        </div>
      </main>
    </div>
  );
}
