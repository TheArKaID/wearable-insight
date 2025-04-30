'use client';

import React, { useState, useEffect } from 'react';
import { Skeleton } from '@/components/common/skeleton';
import { AlertTriangle, RefreshCw, Activity, Target } from 'lucide-react';
import { generateHealthRecommendations, GenerateHealthRecommendationsInput } from '@/ai/flows/generate-health-recommendations';
import { summarizeWeeklyActivity, SummarizeWeeklyActivityInput } from '@/ai/flows/summarize-weekly-activity';

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

  const fetchRecommendations = async () => {
    setIsLoadingRecs(true);
    setError(null);
    setRecommendations([]);
    try {
      const input: GenerateHealthRecommendationsInput = {
        dataSource: currentFilters.dataSource,
        metricType: currentFilters.metricType,
        startDate: currentFilters.startDate,
        endDate: currentFilters.endDate,
      };
      const result = await generateHealthRecommendations(input);
      setRecommendations(result.recommendations);
    } catch (err) {
      console.error('Error generating recommendations:', err);
      setError('Failed to generate recommendations. Please try again.');
    } finally {
      setIsLoadingRecs(false);
    }
  };

  const fetchSummary = async () => {
    setIsLoadingSummary(true);
    setError(null);
    setSummary('');
    try {
      const input: SummarizeWeeklyActivityInput = {
        dataSource: currentFilters.dataSource,
        metricTypes: currentFilters.metricTypes,
        startDate: currentFilters.startDate,
        endDate: currentFilters.endDate,
      };
      const result = await summarizeWeeklyActivity(input);
      setSummary(result.summary);
    } catch (err) {
      console.error('Error generating summary:', err);
      setError('Failed to generate activity summary. Please try again.');
    } finally {
      setIsLoadingSummary(false);
    }
  };

  useEffect(() => {
    fetchRecommendations();
    fetchSummary();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Return the JSX structure
  return (
    <div className="space-y-6">
      {error && (
        // DaisyUI Alert
        <div role="alert" className="alert alert-error">
          <AlertTriangle className="h-6 w-6" />
          <div>
            <h3 className="font-bold">Error</h3>
            <div className="text-xs">{error}</div>
          </div>
        </div>
      )}

      {/* Weekly Summary Section */}
      <div className="rounded-lg border border-base-300 bg-base-100 p-4 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold flex items-center gap-2"><Activity className="h-5 w-5 text-primary" /> Weekly Summary</h3>
          <button
            className={`btn btn-outline btn-sm ${isLoadingSummary ? 'loading' : ''}`}
            onClick={fetchSummary}
            disabled={isLoadingSummary}
          >
            {!isLoadingSummary && <RefreshCw className="mr-2 h-4 w-4" />}
            {isLoadingSummary ? 'Generating...' : 'Regenerate'}
          </button>
        </div>
        {isLoadingSummary ? (
          <div className="space-y-2 mt-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-[90%]" />
          </div>
        ) : summary ? (
          <p className="text-sm text-base-content opacity-80 mt-2">{summary}</p>
        ) : (
          <p className="text-sm text-base-content opacity-60 italic mt-2">No summary available. Try generating one.</p>
        )}
      </div>

      {/* Recommendations Section */}
       <div className="rounded-lg border border-base-300 bg-base-100 p-4 shadow-sm">
        <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold flex items-center gap-2"><Target className="h-5 w-5 text-primary" /> Health Recommendations</h3>
            <button
              className={`btn btn-outline btn-sm ${isLoadingRecs ? 'loading' : ''}`}
              onClick={fetchRecommendations}
              disabled={isLoadingRecs}
            >
                {!isLoadingRecs && <RefreshCw className="mr-2 h-4 w-4" />}
                 {isLoadingRecs ? 'Generating...' : 'Regenerate'}
            </button>
        </div>
        {isLoadingRecs ? (
          <ul className="space-y-2 list-disc list-inside mt-2">
            <li><Skeleton className="h-4 w-full" /></li>
            <li><Skeleton className="h-4 w-[90%]" /></li>
            <li><Skeleton className="h-4 w-[95%]" /></li>
          </ul>
        ) : recommendations.length > 0 ? (
          <ul className="list-disc list-inside space-y-1 text-sm text-base-content opacity-80 mt-2">
            {recommendations.map((rec, index) => (
              <li key={index}>{rec}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-base-content opacity-60 italic mt-2">No recommendations available. Try generating some.</p>
        )}
      </div>
    </div>
  );
}
