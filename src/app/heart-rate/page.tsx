import React from 'react';
import { AppHeader } from '@/components/layout/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceholderChart } from '@/components/dashboard/placeholder-chart'; // Assuming reusable chart
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function HeartRatePage() {
  // TODO: Fetch and display detailed heart rate data and visualizations
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
        <h2 className="text-2xl font-semibold mb-6">Heart Rate Details</h2>

        <div className="grid gap-4 md:gap-6 lg:gap-8">
           {/* Example Detail Card */}
           <Card>
             <CardHeader>
               <CardTitle>Heart Rate Trends</CardTitle>
             </CardHeader>
             <CardContent>
               <p className="text-muted-foreground mb-4">Detailed analysis of your heart rate over the selected period.</p>
               {/* Replace with a more detailed chart */}
               <PlaceholderChart />
             </CardContent>
           </Card>

            {/* Add more cards for specific heart rate metrics (resting, zones, etc.) */}
            <Card>
             <CardHeader>
               <CardTitle>Resting Heart Rate</CardTitle>
             </CardHeader>
             <CardContent>
               <div className="text-3xl font-bold">65 bpm</div>
               <p className="text-sm text-muted-foreground">Average over the last 7 days</p>
             </CardContent>
           </Card>

           <Card>
             <CardHeader>
               <CardTitle>Heart Rate Zones</CardTitle>
             </CardHeader>
             <CardContent>
                {/* Placeholder for zones visualization */}
               <p className="text-muted-foreground">Time spent in different heart rate zones (e.g., Fat Burn, Cardio, Peak).</p>
               <div className="h-32 bg-muted rounded-md flex items-center justify-center text-muted-foreground">Zone Chart Placeholder</div>
             </CardContent>
           </Card>
        </div>
      </main>
    </div>
  );
}
