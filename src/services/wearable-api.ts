/**
 * Represents a data point from a wearable device.
 */
export interface WearableDataPoint {
  /**
   * The timestamp of the data point.
   */
  timestamp: number;
  /**
   * The value of the metric.
   */
  value: number;
}

/**
 * Represents a time series of data points from a wearable device.
 */
export interface WearableTimeSeries {
  /**
   * The metric type (e.g., 'heart_rate', 'steps', 'calories').
   */
  metricType: string;
  /**
   * The unit of the metric (e.g. 'bpm', 'steps', 'calories')
   */
  unit: string;
  /**
   * The data points in the time series.
   */
  data: WearableDataPoint[];
}

/**
 * Represents the available wearable data sources.
 */
export type WearableDataSource = 'fitbit' | 'apple_health' | 'garmin';

/**
 * Asynchronously retrieves time series data from a wearable device API.
 *
 * @param dataSource The wearable data source to retrieve data from.
 * @param metricType The type of metric to retrieve (e.g., 'heart_rate', 'steps').
 * @param startDate The start date (inclusive) for the data range in Unix timestamp.
 * @param endDate The end date (inclusive) for the data range in Unix timestamp.
 * @returns A promise that resolves to a WearableTimeSeries object.
 */
export async function getWearableTimeSeries(
  dataSource: WearableDataSource,
  metricType: string,
  startDate: number,
  endDate: number
): Promise<WearableTimeSeries> {
  // TODO: Implement this by calling an API.

  return {
    metricType: metricType,
    unit: 'bpm',
    data: [
      { timestamp: startDate, value: 70 },
      { timestamp: endDate, value: 72 },
    ],
  };
}
