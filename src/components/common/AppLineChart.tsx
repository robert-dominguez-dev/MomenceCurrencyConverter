import React, { memo } from 'react';
import {
  LineChart,
  LineChartPropsType,
  Pointer,
} from 'react-native-gifted-charts';
import { appColorsDark } from '../../constants/colors.ts';

const pointerConfig: Pointer = {
  pointerStripHeight: 0,
  pointerStripWidth: 0,
  pointerColor: 'transparent',
  pointerStripColor: 'transparent',
  radius: 0,
  pointerLabelWidth: 0,
  pointerLabelHeight: 0,
};

export type AppLineChartProps = Pick<
  LineChartPropsType,
  'data' | 'width' | 'height' | 'thickness'
> & {
  color: string;
};

const _AppLineChart = ({
  data,
  color,
  width,
  height,
  thickness,
}: AppLineChartProps) => (
  <LineChart
    hideDataPoints
    hideAxesAndRules
    hideYAxisText
    hideRules
    hideOrigin
    adjustToWidth
    disableScroll
    areaChart
    curved
    data={data}
    width={width}
    height={height}
    thickness={thickness}
    startFillColor={color}
    pointerConfig={pointerConfig}
    endFillColor={appColorsDark.transparent}
    curveType={1}
    startOpacity={0.25}
    endOpacity={0}
    color={color}
    initialSpacing={0}
    endSpacing={0}
    yAxisThickness={0}
    yAxisLabelWidth={0}
    xAxisThickness={0}
    xAxisLabelsHeight={0}
    showVerticalLines={false}
    showXAxisIndices={false}
    showYAxisIndices={false}
  />
);

export const AppLineChart = memo(_AppLineChart);
