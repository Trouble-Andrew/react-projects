import React from 'react';
import ChartBar from '../ChartBar/ChartBar';
import './Chart.scss';
import { ChartProps } from './ChartProps';

function Chart({ dataPoints }: ChartProps) {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
