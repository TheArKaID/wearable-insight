'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { BrainCircuit, AlertTriangle, RefreshCw, Activity, Target } from 'lucide-react'; // Use more specific icons
import { generateHealthRecommendations, GenerateHealthRecommendationsInput } from '@/ai/flows/generate-health-recommendations';
import { summarizeWeeklyActivity, SummarizeWeeklyActivityInput } from '@/ai/flows/summarize-weekly-activity';
import { useToast } from '@/hooks/use-toast';

// Mock current filters/state - replace with actual state management
const currentFilters: {
    dataSource: GenerateHealthRecommendationsInput['dataSource'];
    metricType: string;
    startDate: number;
    endDate: number;
    metricTypes: string[];
} = {
    dataSource: 'fitbit',
    metricType: 'heart_rate',
    startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).getTime(), // Last 7 days
    endDate: new Date().getTime(),
    metricTypes: ['heart_rate', 'steps', 'sleep'], // Metrics for summary
};

export function AiInsights() {
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [summary, setSummary] = useState<string>('');
  const [isLoadingRecs, setIsLoadingRecs] = useState<boolean>(false);
  const [isLoadingSummary, setIsLoadingSummary] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchRecommendations = async () => {
    setIsLoadingRecs(true);
    setError(null);
    setRecommendations([]); // Clear previous recommendations

    try {
      const input: GenerateHealthRecommendationsInput = {
        dataSource: currentFilters.dataSource,
        metricType: currentFilters.metricType, // Use currently relevant metric
        startDate: currentFilters.startDate,
        endDate: currentFilters.endDate,
      };
      const result = await generateHealthRecommendations(input);
      setRecommendations(result.recommendations);
      toast({ title: 'Recommendations Updated', description: 'AI recommendations refreshed.' });
    } catch (err) {
      console.error('Error generating recommendations:', err);
      setError('Failed to generate recommendations. Please try again.');
      toast({
        title: 'Error',
        description: 'Could not fetch AI recommendations.',
        variant: 'destructive',
      });
    } finally {
      setIsLoadingRecs(false);
    }
  };

  const fetchSummary = async () => {
    setIsLoadingSummary(true);
    setError(null);
    setSummary(''); // Clear previous summary

    try {
      const input: SummarizeWeeklyActivityInput = {
        dataSource: currentFilters.dataSource,
        metricTypes: currentFilters.metricTypes, // Summarize multiple metrics
        startDate: currentFilters.startDate,
        endDate: currentFilters.endDate,
      };
      const result = await summarizeWeeklyActivity(input);
      setSummary(result.summary);
       toast({ title: 'Summary Updated', description: 'Weekly summary refreshed.' });
    } catch (err) {
      console.error('Error generating summary:', err);
      setError('Failed to generate activity summary. Please try again.');
      toast({
        title: 'Error',
        description: 'Could not fetch AI summary.',
        variant: 'destructive',
      });
    } finally {
      setIsLoadingSummary(false);
    }
  };

  // Fetch insights on component mount or when filters change (add dependency array if needed)
  useEffect(() => {
    fetchRecommendations();
    fetchSummary();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // TODO: Add dependencies based on filter state management

  return (
    <div className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Weekly Summary Section */}
      <div className="rounded-lg border bg-card p-4 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold flex items-center gap-2"><Activity className="h-5 w-5 text-primary" /> Weekly Summary</h3>
          <Button variant="outline" size="sm" onClick={fetchSummary} disabled={isLoadingSummary}>
            <RefreshCw className={`mr-2 h-4 w-4 ${isLoadingSummary ? 'animate-spin' : ''}`} />
            {isLoadingSummary ? 'Generating...' : 'Regenerate Summary'}
          </Button>
        </div>
        {isLoadingSummary ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-[90%]" />
          </div>
        ) : summary ? (
          <p className="text-sm text-muted-foreground">{summary}</p>
        ) : (
          <p className="text-sm text-muted-foreground italic">No summary available. Try generating one.</p>
        )}
      </div>

      {/* Recommendations Section */}
       <div className="rounded-lg border bg-card p-4 shadow-sm">
        <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold flex items-center gap-2"><Target className="h-5 w-5 text-primary" /> Health Recommendations</h3>
            <Button variant="outline" size="sm" onClick={fetchRecommendations} disabled={isLoadingRecs}>
                 <RefreshCw className={`mr-2 h-4 w-4 ${isLoadingRecs ? 'animate-spin' : ''}`} />
                 {isLoadingRecs ? 'Generating...' : 'Regenerate Recommendations'}
            </Button>
        </div>
        {isLoadingRecs ? (
          <ul className="space-y-2">
            <li><Skeleton className="h-4 w-full" /></li>
            <li><Skeleton className="h-4 w-[90%]" /></li>
            <li><Skeleton className="h-4 w-[95%]" /></li>
          </ul>
        ) : recommendations.length > 0 ? (
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            {recommendations.map((rec, index) => (
              <li key={index}>{rec}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground italic">No recommendations available. Try generating some.</p>
        )}
      </div>
    </div>
  );
}
