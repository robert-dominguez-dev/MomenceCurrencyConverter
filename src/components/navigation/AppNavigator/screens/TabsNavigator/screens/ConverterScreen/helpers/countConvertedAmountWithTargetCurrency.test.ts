import {
  countConvertedAmountWithTargetCurrency,
  CountConvertedAmountWithTargetCurrencyParams,
} from './countConvertedAmountWithTargetCurrency.ts';

type TestCase = {
  description: string;
  input: CountConvertedAmountWithTargetCurrencyParams;
  expectedOutput: number | undefined;
};

const testCases: TestCase[] = [
  {
    description: 'counts exchange value (from CZK rate to CZK rate)',
    input: { fromAmount: 10, fromCurrencyCzkRate: 20, toCurrencyCzkRate: 5 },
    expectedOutput: 40,
  },
  {
    description: 'returns undefined when fromCurrencyCzkRate is undefined',
    input: {
      fromAmount: 10,
      fromCurrencyCzkRate: undefined,
      toCurrencyCzkRate: 5,
    },
    expectedOutput: undefined,
  },
  {
    description: 'returns undefined when toCurrencyCzkRate is undefined',
    input: {
      fromAmount: 10,
      fromCurrencyCzkRate: 20,
      toCurrencyCzkRate: undefined,
    },
    expectedOutput: undefined,
  },
  {
    description: 'returns undefined when fromCurrencyCzkRate is 0',
    input: { fromAmount: 10, fromCurrencyCzkRate: 0, toCurrencyCzkRate: 5 },
    expectedOutput: undefined,
  },
  {
    description: 'returns undefined when toCurrencyCzkRate is 0',
    input: { fromAmount: 10, fromCurrencyCzkRate: 20, toCurrencyCzkRate: 0 },
    expectedOutput: undefined,
  },
  {
    description: 'supports decimal values',
    input: {
      fromAmount: 2.5,
      fromCurrencyCzkRate: 20.5,
      toCurrencyCzkRate: 4.1,
    },
    expectedOutput: (2.5 * 20.5) / 4.1,
  },
];

describe('countConvertedAmountWithTargetCurrency', () => {
  it.each(testCases)('$description', ({ input, expectedOutput }) => {
    expect(countConvertedAmountWithTargetCurrency(input)).toBe(expectedOutput);
  });
});
