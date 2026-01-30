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
    data={data}
    width={width}
    height={height}
    hideDataPoints
    hideAxesAndRules
    hideYAxisText
    hideRules
    hideOrigin
    thickness={thickness}
    areaChart
    startFillColor={color}
    endFillColor={appColorsDark.transparent}
    startOpacity={0.22}
    endOpacity={0}
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
    pointerConfig={pointerConfig}
  />
);

export const AppLineChart = memo(_AppLineChart);
