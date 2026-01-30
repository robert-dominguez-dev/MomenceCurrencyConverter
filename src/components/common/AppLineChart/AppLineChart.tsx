import React, { memo, useMemo } from 'react';
import {
  LineChart,
  LineChartPropsType,
  Pointer,
} from 'react-native-gifted-charts';
import { appColorsDark } from '../../../constants/colors.ts';
import { AppLineChartItem } from './types.ts';
import {
  getZoomedLineChartItems,
  GetZoomedLineChartItemsParams,
} from './helpers/getZoomedLineChartItems.ts';

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
  'width' | 'height' | 'thickness'
> &
  Pick<GetZoomedLineChartItemsParams, 'minValue' | 'maxValue'> & {
    color: string;
    items: AppLineChartItem[];
  };

const _AppLineChart = ({
  items,
  color,
  width,
  height,
  thickness,
  minValue,
  maxValue,
}: AppLineChartProps) => {
  const zoomedItems = useMemo(
    () => getZoomedLineChartItems({ items, minValue, maxValue }),
    [items, minValue, maxValue],
  );

  return (
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
      data={zoomedItems}
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
};

export const AppLineChart = memo(_AppLineChart);
