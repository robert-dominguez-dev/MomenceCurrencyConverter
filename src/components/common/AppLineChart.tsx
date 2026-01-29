import React, { memo } from 'react';
import { LineChart, LineChartPropsType } from 'react-native-gifted-charts';

type AppLineChartProps = Pick<
  LineChartPropsType,
  'data' | 'width' | 'height' | 'thickness'
> & {
  color: string;
};

const _AppLineChart = ({
  data,
  color,
  width = 92,
  height = 28,
  thickness = 2,
}: AppLineChartProps) => (
  <LineChart
    data={data}
    width={width}
    height={height}
    hideDataPoints
    hideAxesAndRules
    hideYAxisText
    hideRules
    thickness={thickness}
    curved
    curveType={1}
    color={color}
    yAxisThickness={0}
    xAxisThickness={0}
    adjustToWidth
    initialSpacing={0}
    endSpacing={0}
    disableScroll
    showVerticalLines={false}
    showXAxisIndices={false}
    showYAxisIndices={false}
    pointerConfig={{ pointerStripHeight: 0 }}
  />
);

export const AppLineChart = memo(_AppLineChart);
