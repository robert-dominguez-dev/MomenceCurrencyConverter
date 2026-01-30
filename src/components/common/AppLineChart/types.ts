import { lineDataItem as LineDataItem } from 'gifted-charts-core/dist/LineChart/types';

export type AppLineChartItem = Omit<LineDataItem, 'value'> & { value: number };
