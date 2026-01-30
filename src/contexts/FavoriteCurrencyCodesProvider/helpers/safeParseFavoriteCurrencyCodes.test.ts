import { safeParseFavoriteCurrencyCodes } from './safeParseFavoriteCurrencyCodes.ts';
import { CnbCurrencyCode } from '../../../networking/useExchangeRates/constants.ts';

type TestCase = {
  description: string;
  input: string | null;
  expectedOutput: CnbCurrencyCode[];
};

const testCases: TestCase[] = [
  {
    description: 'returns empty array for null',
    input: null,
    expectedOutput: [],
  },
  {
    description: 'returns empty array for empty string',
    input: '',
    expectedOutput: [],
  },
  {
    description: 'returns empty array when parsed value is not an array',
    input: JSON.stringify({ USD: true }),
    expectedOutput: [],
  },
  {
    description:
      'filters out invalid currency codes and keeps only valid CnbCurrencyCode values',
    input: JSON.stringify([
      CnbCurrencyCode.USD,
      'XXX',
      CnbCurrencyCode.EUR,
      123,
      null,
      'AUD',
    ]),
    expectedOutput: [
      CnbCurrencyCode.USD,
      CnbCurrencyCode.EUR,
      CnbCurrencyCode.AUD,
    ],
  },
  {
    description: 'returns empty array for empty array',
    input: JSON.stringify([]),
    expectedOutput: [],
  },
];

describe('safeParseFavoriteCurrencyCodes', () => {
  it.each(testCases)('$description', ({ input, expectedOutput }) => {
    expect(safeParseFavoriteCurrencyCodes(input)).toEqual(expectedOutput);
  });
});
