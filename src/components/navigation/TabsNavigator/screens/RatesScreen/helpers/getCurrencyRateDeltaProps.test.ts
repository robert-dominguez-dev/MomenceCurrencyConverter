import {
  CurrencyRateDeltaInfo,
  getCurrencyRateDeltaInfo,
} from './getCurrencyRateDeltaProps.ts';

type TestCase = {
  description: string;
  input: number[];
  expectedOutput: CurrencyRateDeltaInfo | undefined;
};

const testCases: TestCase[] = [
  {
    description: 'bullish movement',
    input: [10, 12],
    expectedOutput: {
      first: 10,
      last: 12,
      minValue: 10,
      maxValue: 12,
      delta: 2,
      deltaPercents: 20,
      isBullish: true,
    },
  },
  {
    description: 'bearish movement',
    input: [12, 10],
    expectedOutput: {
      first: 12,
      last: 10,
      minValue: 10,
      maxValue: 12,
      delta: -2,
      deltaPercents: -16.666666666666664,
      isBullish: false,
    },
  },
  {
    description: 'first is 0 -> deltaPercents is 0',
    input: [0, 10],
    expectedOutput: {
      first: 0,
      last: 10,
      minValue: 0,
      maxValue: 10,
      delta: 10,
      deltaPercents: 0,
      isBullish: true,
    },
  },
  {
    description: 'only one item',
    input: [10],
    expectedOutput: {
      first: 10,
      last: 10,
      minValue: 10,
      maxValue: 10,
      delta: 0,
      deltaPercents: 0,
      isBullish: true,
    },
  },
  {
    description: 'invalid first -> undefined',
    input: [NaN, 10],
    expectedOutput: undefined,
  },
  {
    description: 'invalid last -> undefined',
    input: [10, NaN],
    expectedOutput: undefined,
  },
  {
    description: 'infinite first -> undefined',
    input: [Infinity, 10],
    expectedOutput: undefined,
  },
  {
    description: 'infinite last -> undefined',
    input: [10, Infinity],
    expectedOutput: undefined,
  },
  {
    description: 'empty array -> undefined',
    input: [],
    expectedOutput: undefined,
  },
];

describe('getCurrencyRateDeltaInfo', () => {
  it.each(testCases)('$description', ({ input, expectedOutput }) => {
    const result = getCurrencyRateDeltaInfo(input);
    expect(result).toEqual(expectedOutput);
  });
});
