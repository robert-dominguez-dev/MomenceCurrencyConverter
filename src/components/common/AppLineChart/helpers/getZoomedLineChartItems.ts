import { AppLineChartItem } from '../types.ts';
import {
  CurrencyRateDeltaInfo
} from '../../../navigation/AppNavigator/screens/TabsNavigator/screens/RatesScreen/helpers/getCurrencyRateDeltaProps.ts';

export type GetZoomedLineChartItemsParams = Pick<
  CurrencyRateDeltaInfo,
  'minValue' | 'maxValue'
> & { items: AppLineChartItem[]; zoomIntensity?: number };

export const getZoomedLineChartItems = ({
  items,
  minValue,
  maxValue,
  zoomIntensity = 1,
}: GetZoomedLineChartItemsParams) => {
  const range: number = maxValue - minValue || 1;

  /**
   * Padding makes the chart line less aggressive.
   * The more zoom intensity, the more aggressive spikes on the line.
   */
  const verticalPadding = range / zoomIntensity;

  /**
   * We subtract the baseline from all values so the chart works with small deltas
   * and look more dynamic...
   *
   * Example:
   * - min = 20.1, max = 20.3 → delta = 0.2
   * - relative to the original max (20.3), delta 0.2 is ~1% movement,
   *   so the line looks almost flat
   * - subtract baseline 20.0 → values become min = 0.1, max = 0.3
   * - relative to the new max (0.3), delta 0.2 is ~67% movement,
   *   so the line appears much more dynamic
   */
  const normalizationBaseline = minValue - verticalPadding;

  return items.map(item => ({
    ...item,
    value: item.value - normalizationBaseline,
  }));
};
