import React, { memo } from 'react';
import {
  AppLineChart,
  AppLineChartProps,
} from '../../../../../../../common/AppLineChart/AppLineChart.tsx';

import { useLayout } from '../../../../../../../../hooks/useLayout.ts';
import styled from 'styled-components/native';
import { CnbCurrencyEntry } from '../../../../../../../../networking/useExchangeRates/types.ts';

export type CurrencyItemChartProps = Pick<
  AppLineChartProps,
  'minValue' | 'maxValue'
> &
  Pick<CnbCurrencyEntry, 'czkRateTrendValues'> & {
    trendColor: string;
  };

const _CurrencyItemChart = ({
  czkRateTrendValues,
  trendColor,
  minValue,
  maxValue,
}: CurrencyItemChartProps) => {
  const { handleLayout, layout } = useLayout();

  const data = czkRateTrendValues.map(value => ({ value }));

  return (
    <ChartWrapperStyled onLayout={handleLayout}>
      <AppLineChart
        items={data}
        color={trendColor}
        minValue={minValue}
        maxValue={maxValue}
        width={layout?.width}
        height={48}
        thickness={2}
      />
    </ChartWrapperStyled>
  );
};

export const CurrencyItemChart = memo(_CurrencyItemChart);

const ChartWrapperStyled = styled.View`
  flex: 1;
`;
