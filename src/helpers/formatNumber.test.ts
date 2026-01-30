import { formatNumber } from './formatNumber.ts';

type TestCase = {
  description: string;
  input: {
    value: number;
    options?: { decimals?: number; suffix?: string; signed?: boolean };
  };
  expectedOutput: string;
};

const testCases: TestCase[] = [
  {
    description: 'default (1 decimal), no options',
    input: { value: 1.234 },
    expectedOutput: '1.2',
  },
  {
    description: 'custom decimals',
    input: { value: 1.234, options: { decimals: 2 } },
    expectedOutput: '1.23',
  },
  {
    description: 'suffix',
    input: { value: 1.234, options: { suffix: '%' } },
    expectedOutput: '1.2%',
  },

  {
    description: 'signed undefined -> no sign',
    input: { value: 1.234, options: { signed: undefined } },
    expectedOutput: '1.2',
  },
  {
    description: 'signed false -> no sign',
    input: { value: 1.234, options: { signed: false } },
    expectedOutput: '1.2',
  },

  {
    description: 'signed true -> + for positive',
    input: { value: 1.234, options: { signed: true } },
    expectedOutput: '+1.2',
  },
  {
    description: 'signed true -> - for negative',
    input: { value: -3.01, options: { signed: true } },
    expectedOutput: '-3.0',
  },
  {
    description: 'signed true -> no sign for 0',
    input: { value: 0, options: { signed: true } },
    expectedOutput: '0.0',
  },

  {
    description: 'signed true + decimals + suffix (positive)',
    input: {
      value: 12.345,
      options: { signed: true, decimals: 2, suffix: '%' },
    },
    expectedOutput: '+12.35%',
  },
  {
    description: 'signed true + decimals + suffix (negative)',
    input: {
      value: -12.344,
      options: { signed: true, decimals: 2, suffix: '%' },
    },
    expectedOutput: '-12.34%',
  },
  {
    description: 'signed false + decimals + suffix (negative)',
    input: {
      value: -12.344,
      options: { signed: false, decimals: 2, suffix: '%' },
    },
    expectedOutput: '-12.34%',
  },
];

describe('formatNumber', () => {
  it.each(testCases)('$description', ({ input, expectedOutput }) => {
    expect(formatNumber(input.value, input.options)).toBe(expectedOutput);
  });
});
