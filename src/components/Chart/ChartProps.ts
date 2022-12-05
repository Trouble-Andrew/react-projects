export interface ChartProps {
  dataPoints: dataPoint[];
}

export interface dataPoint {
  label: string,
  value: number,
}