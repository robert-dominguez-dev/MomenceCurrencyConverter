import { formatSignedNumber } from './formatSignedNumber.ts';

type TestCase = {
  description: string;
  input: {
    value: number;
    options?: { decimals?: number; suffix?: string };
  };
  expectedOutput: string;
};

const testCases: TestCase[] = [
  {
    description: 'adds + for positive number with default decimals',
    input: { value: 1.234 },
    expectedOutput: '+1.2',
  },
  {
    description: 'adds - for negative number with default decimals',
    input: { value: -3.01 },
    expectedOutput: '-3.0',
  },
  {
    description: 'adds nothing for 0 with default decimals',
    input: { value: 0 },
    expectedOutput: '0.0',
  },
  {
    description: 'adds suffix and custom decimals for positive number',
    input: { value: 12.345, options: { decimals: 2, suffix: '%' } },
    expectedOutput: '+12.35%',
  },
  {
    description: 'adds suffix and custom decimals for negative number',
    input: { value: -12.344, options: { decimals: 2, suffix: '%' } },
    expectedOutput: '-12.34%',
  },
  {
    description: 'adds suffix and custom decimals for 0',
    input: { value: 0, options: { decimals: 2, suffix: '%' } },
    expectedOutput: '0.00%',
  },
];

describe('formatSignedNumber', () => {
  it.each(testCases)('$description', ({ input, expectedOutput }) => {
    expect(formatSignedNumber(input.value, input.options)).toBe(expectedOutput);
  });
});
