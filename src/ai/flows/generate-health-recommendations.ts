// 'use server'
'use server';

/**
 * @fileOverview Generates personalized health recommendations based on wearable data patterns.
 *
 * - generateHealthRecommendations - A function that generates health recommendations.
 * - GenerateHealthRecommendationsInput - The input type for the generateHealthRecommendations function.
 * - GenerateHealthRecommendationsOutput - The return type for the generateHealthRecommendations function.
 */

import { ai } from '@/ai/ai-instance';
import { z } from 'genkit';
import { getWearableTimeSeries, WearableDataSource } from '@/services/wearable-api';

const GenerateHealthRecommendationsInputSchema = z.object({
  dataSource: z.enum(['fitbit', 'apple_health', 'garmin']).describe('The wearable data source.'),
  metricType: z.string().describe('The type of metric to analyze (e.g., heart_rate, steps, calories).'),
  startDate: z.number().describe('The start date (inclusive) for the data range in Unix timestamp.'),
  endDate: z.number().describe('The end date (inclusive) for the data range in Unix timestamp.'),
});
export type GenerateHealthRecommendationsInput = z.infer<typeof GenerateHealthRecommendationsInputSchema>;

const GenerateHealthRecommendationsOutputSchema = z.object({
  recommendations: z.array(z.string()).describe('An array of personalized health recommendations.'),
});
export type GenerateHealthRecommendationsOutput = z.infer<typeof GenerateHealthRecommendationsOutputSchema>;

export async function generateHealthRecommendations(input: GenerateHealthRecommendationsInput): Promise<GenerateHealthRecommendationsOutput> {
  return generateHealthRecommendationsFlow(input);
}

const analyzeWearableData = ai.defineTool(
  {
    name: 'analyzeWearableData',
    description: 'Analyzes time series data from a wearable device and identifies patterns.',
    inputSchema: z.object({
      dataSource: z.enum(['fitbit', 'apple_health', 'garmin']).describe('The wearable data source.'),
      metricType: z.string().describe('The type of metric to analyze (e.g., heart_rate, steps, calories).'),
      startDate: z.number().describe('The start date (inclusive) for the data range in Unix timestamp.'),
      endDate: z.number().describe('The end date (inclusive) for the data range in Unix timestamp.'),
    }),
    outputSchema: z.string().describe('A summary of the patterns identified in the wearable data.'),
  },
  async input => {
    const timeSeriesData = await getWearableTimeSeries(
      input.dataSource,
      input.metricType,
      input.startDate,
      input.endDate
    );

    // Basic analysis (replace with more sophisticated logic)
    const dataPoints = timeSeriesData.data;
    if (dataPoints.length === 0) {
      return 'No data available for the specified period.';
    }
    const averageValue = dataPoints.reduce((sum, point) => sum + point.value, 0) / dataPoints.length;
    return `Average ${input.metricType} over the period: ${averageValue.toFixed(2)} ${timeSeriesData.unit}.`;
  }
);

const prompt = ai.definePrompt({
  name: 'generateHealthRecommendationsPrompt',
  tools: [analyzeWearableData],
  input: {
    schema: z.object({
      dataSource: z.enum(['fitbit', 'apple_health', 'garmin']).describe('The wearable data source.'),
      metricType: z.string().describe('The type of metric to analyze (e.g., heart_rate, steps, calories).'),
      startDate: z.number().describe('The start date (inclusive) for the data range in Unix timestamp.'),
      endDate: z.number().describe('The end date (inclusive) for the data range in Unix timestamp.'),
    }),
  },
  output: {
    schema: z.object({
      recommendations: z.array(z.string()).describe('An array of personalized health recommendations.'),
    }),
  },
  prompt: `You are a personal health assistant. Analyze the user's wearable data and provide personalized health recommendations.

  First, use the analyzeWearableData tool to analyze the data from {{{dataSource}}} for the metric type {{{metricType}}} between {{{startDate}}} and {{{endDate}}}.
  Then, based on the analysis, provide 2-3 specific and actionable health recommendations.
  The recommendations should be tailored to the user's data and aim to improve their overall health and well-being.

  Make sure the health recommendations are in an array.
  `,
});

const generateHealthRecommendationsFlow = ai.defineFlow<
  typeof GenerateHealthRecommendationsInputSchema,
  typeof GenerateHealthRecommendationsOutputSchema
>({
  name: 'generateHealthRecommendationsFlow',
  inputSchema: GenerateHealthRecommendationsInputSchema,
  outputSchema: GenerateHealthRecommendationsOutputSchema,
}, async (input) => {
  const { output } = await prompt(input);
  return output!;
});
