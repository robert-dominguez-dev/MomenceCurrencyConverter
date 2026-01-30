import React, { memo, ReactNode } from 'react';
import {
  AppLineChart,
  AppLineChartProps,
} from '../../../../../common/AppLineChart.tsx';
import { CnbCurrencyEntry } from '../../../../../../networking/exchange-rates/types.ts';
import styled from 'styled-components/native';
import { useLayout } from '../../../../../../hooks/useLayout.ts';

export type CurrencyItemChartProps = Pick<AppLineChartProps, 'data'> &
  Pick<CnbCurrencyEntry, 'czkRateTrendValues'> & {
    czkRateTrendValues: number[];
    trendColor: string;
  };

const _CurrencyItemChart = ({
  czkRateTrendValues,
  trendColor,
}: CurrencyItemChartProps) => {
  const { handleLayout, layout } = useLayout();

  const data = czkRateTrendValues.map(value => ({ value }));

  const shouldRenderChart = (!!layout &&
    layout.width > 0 &&
    layout.height > 0) satisfies boolean;
  console.log(layout);
  const maybeChartElement: ReactNode = shouldRenderChart ? (
    <AppLineChart
      data={data}
      color={trendColor}
      width={layout.width}
      height={layout.height}
      thickness={2}
    />
  ) : null;

  return <Wrap onLayout={handleLayout}>{maybeChartElement}</Wrap>;
};

export const CurrencyItemChart = memo(_CurrencyItemChart);

const Wrap = styled.View`
  flex: 1;
  height: 56;
`;
