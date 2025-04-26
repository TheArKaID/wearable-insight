import React from 'react';
import { AppHeader } from '@/components/layout/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceholderChart } from '@/components/dashboard/placeholder-chart';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function ActivityPage() {
  // TODO: Fetch and display detailed activity data (steps, distance, calories, active minutes)
  const activityLog = [
    { date: '2024-07-14', steps: 9500, distance: '7.2 km', calories: 450, activeMinutes: 65 },
    { date: '2024-07-13', steps: 8123, distance: '6.1 km', calories: 380, activeMinutes: 50 },
    { date: '2024-07-12', steps: 10200, distance: '8.0 km', calories: 510, activeMinutes: 75 },
    { date: '2024-07-11', steps: 7800, distance: '5.9 km', calories: 350, activeMinutes: 45 },
  ];

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
        <h2 className="text-2xl font-semibold mb-6">Activity Log</h2>

        <div className="grid gap-4 md:gap-6 lg:gap-8">
           <Card>
             <CardHeader>
               <CardTitle>Daily Activity Summary</CardTitle>
             </CardHeader>
             <CardContent>
               {/* Replace with actual charts */}
               <PlaceholderChart />
             </CardContent>
           </Card>

           <Card>
             <CardHeader>
               <CardTitle>Detailed Log</CardTitle>
             </CardHeader>
             <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Steps</TableHead>
                      <TableHead className="text-right">Distance</TableHead>
                      <TableHead className="text-right">Calories</TableHead>
                      <TableHead className="text-right">Active Minutes</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {activityLog.map((entry) => (
                      <TableRow key={entry.date}>
                        <TableCell>{entry.date}</TableCell>
                        <TableCell className="text-right">{entry.steps.toLocaleString()}</TableCell>
                        <TableCell className="text-right">{entry.distance}</TableCell>
                        <TableCell className="text-right">{entry.calories.toLocaleString()} kcal</TableCell>
                        <TableCell className="text-right">{entry.activeMinutes} min</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
             </CardContent>
           </Card>
        </div>
      </main>
    </div>
  );
}
