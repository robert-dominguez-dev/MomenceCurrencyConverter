import { getZoomedLineChartItems, GetZoomedLineChartItemsParams } from './getZoomedLineChartItems.ts';

type TestCase = {
  description: string;
  input: GetZoomedLineChartItemsParams;
  expectedOutput: Array<{ value: number }>;
};

const testCases: TestCase[] = [
  {
    description:
      'subtracts normalizationBaseline (min - range/zoom) from all values with default zoomIntensity=2',
    input: {
      items: [{ value: 20.1 }, { value: 20.2 }, { value: 20.3 }],
      minValue: 20.1,
      maxValue: 20.3,
    },
    expectedOutput: [
      { value: 0.10000000000000142 },
      { value: 0.1999999999999993 },
      { value: 0.3000000000000007 },
    ],
  },
  {
    description:
      'uses zoomIntensity to control padding (higher zoom => smaller padding => larger normalized values)',
    input: {
      items: [{ value: 20.1 }, { value: 20.3 }],
      minValue: 20.1,
      maxValue: 20.3,
      zoomIntensity: 4,
    },
    expectedOutput: [{ value: 0.05000000000000071 }, { value: 0.25 }],
  },
  {
    description: 'handles zero range by using fallback range=1',
    input: {
      items: [{ value: 10 }, { value: 10 }],
      minValue: 10,
      maxValue: 10,
      zoomIntensity: 2,
    },
    expectedOutput: [{ value: 0.5 }, { value: 0.5 }],
  },
];

describe('getZoomedLineChartItems', () => {
  it.each(testCases)('$description', ({ input, expectedOutput }) => {
    expect(getZoomedLineChartItems(input)).toEqual(expectedOutput);
  });
});
