'use server';
/**
 * @fileOverview Summarizes the user's weekly activity data, highlighting key trends and insights.
 *
 * - summarizeWeeklyActivity - A function that generates a summary of the user's weekly activity.
 * - SummarizeWeeklyActivityInput - The input type for the summarizeWeeklyActivity function.
 * - SummarizeWeeklyActivityOutput - The return type for the summarizeWeeklyActivity function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';
import {WearableDataSource, getWearableTimeSeries} from '@/services/wearable-api';

const SummarizeWeeklyActivityInputSchema = z.object({
  dataSource: z.enum(['fitbit', 'apple_health', 'garmin']).describe('The wearable data source.'),
  metricTypes: z.array(z.string()).describe('The types of metrics to retrieve (e.g., heart_rate, steps, calories).'),
  startDate: z.number().describe('The start date (inclusive) for the data range in Unix timestamp.'),
  endDate: z.number().describe('The end date (inclusive) for the data range in Unix timestamp.'),
});
export type SummarizeWeeklyActivityInput = z.infer<typeof SummarizeWeeklyActivityInputSchema>;

const SummarizeWeeklyActivityOutputSchema = z.object({
  summary: z.string().describe('A summary of the user\'s weekly activity, highlighting key trends and insights.'),
});
export type SummarizeWeeklyActivityOutput = z.infer<typeof SummarizeWeeklyActivityOutputSchema>;

export async function summarizeWeeklyActivity(input: SummarizeWeeklyActivityInput): Promise<SummarizeWeeklyActivityOutput> {
  return summarizeWeeklyActivityFlow(input);
}

const summarizeWeeklyActivityPrompt = ai.definePrompt({
  name: 'summarizeWeeklyActivityPrompt',
  input: {
    schema: z.object({
      weeklyData: z.string().describe('A description of the user\'s weekly activity data.'),
    }),
  },
  output: {
    schema: z.object({
      summary: z.string().describe('A summary of the user\'s weekly activity, highlighting key trends and insights.'),
    }),
  },
  prompt: `You are a personal health assistant. Summarize the following weekly activity data, highlighting key trends and insights, so that the user can quickly understand their progress and identify areas for improvement.\n\nWeekly Data: {{{weeklyData}}}`,
});

const summarizeWeeklyActivityFlow = ai.defineFlow<
  typeof SummarizeWeeklyActivityInputSchema,
  typeof SummarizeWeeklyActivityOutputSchema
>(
  {
    name: 'summarizeWeeklyActivityFlow',
    inputSchema: SummarizeWeeklyActivityInputSchema,
    outputSchema: SummarizeWeeklyActivityOutputSchema,
  },
  async input => {
    const data = await Promise.all(
      input.metricTypes.map(async metricType => {
        const timeSeries = await getWearableTimeSeries(
          input.dataSource,
          metricType,
          input.startDate,
          input.endDate
        );
        return `${metricType}: ${JSON.stringify(timeSeries.data)}`;
      })
    );

    const weeklyData = data.join('\n');

    const {output} = await summarizeWeeklyActivityPrompt({
      weeklyData,
    });
    return output!;
  }
);
