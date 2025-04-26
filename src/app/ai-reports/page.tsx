import React from 'react';
import { AppHeader } from '@/components/layout/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AiInsights } from '@/components/dashboard/ai-insights'; // Reuse the AI Insights component
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AiReportsPage() {
  // This page can showcase the AI insights more prominently or offer more detailed reports
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
        <h2 className="text-2xl font-semibold mb-6">AI Reports & Insights</h2>

        <div className="grid gap-4 md:gap-6 lg:gap-8">
           {/* Display the existing AI Insights component */}
           <Card className="col-span-1 md:col-span-2 lg:col-span-3">
              <CardHeader>
                 <CardTitle>Generated Insights and Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                 <AiInsights />
              </CardContent>
           </Card>

           {/* Potential future section for more advanced AI reports */}
           {/*
           <Card className="col-span-1 md:col-span-2 lg:col-span-3">
             <CardHeader>
               <CardTitle>Advanced AI Analysis (Coming Soon)</CardTitle>
             </CardHeader>
             <CardContent>
                <p className="text-muted-foreground">Explore deeper pattern detection, correlation analysis, and predictive health insights in future updates.</p>
                <div className="h-40 bg-muted rounded-md flex items-center justify-center text-muted-foreground mt-4">
                  Advanced Report Placeholder
                </div>
             </CardContent>
           </Card>
           */}
        </div>
      </main>
    </div>
  );
}
