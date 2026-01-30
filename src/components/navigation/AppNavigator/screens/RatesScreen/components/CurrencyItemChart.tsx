import React, { memo } from 'react';
import {
  AppLineChart,
  AppLineChartProps,
} from '../../../../../common/AppLineChart.tsx';
import { CnbCurrencyEntry } from '../../../../../../networking/exchange-rates/types.ts';
import { useLayout } from '../../../../../../hooks/useLayout.ts';
import styled from 'styled-components/native';

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

  return (
    <ChartWrapperStyled onLayout={handleLayout}>
      <AppLineChart
        data={data}
        color={trendColor}
        height={48}
        width={layout?.width}
        thickness={2}
      />
    </ChartWrapperStyled>
  );
};

export const CurrencyItemChart = memo(_CurrencyItemChart);

const ChartWrapperStyled = styled.View`
  flex: 1;
`;
