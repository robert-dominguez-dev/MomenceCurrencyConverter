import { addOrRemoveFavoriteCurrencyCode } from './addOrRemoveFavoriteCurrencyCode.ts';
import { CnbCurrencyCode } from '../../../networking/useExchangeRates/constants.ts';

type TestCase = {
  description: string;
  input: {
    currencyCodes: CnbCurrencyCode[];
    currencyCode: CnbCurrencyCode;
  };
  expectedOutput: CnbCurrencyCode[];
};

const testCases: TestCase[] = [
  {
    description: 'adds currencyCode when it is not present',
    input: {
      currencyCodes: [CnbCurrencyCode.USD, CnbCurrencyCode.EUR],
      currencyCode: CnbCurrencyCode.AUD,
    },
    expectedOutput: [
      CnbCurrencyCode.USD,
      CnbCurrencyCode.EUR,
      CnbCurrencyCode.AUD,
    ],
  },
  {
    description: 'deletes currencyCode when it is present',
    input: {
      currencyCodes: [CnbCurrencyCode.USD, CnbCurrencyCode.EUR],
      currencyCode: CnbCurrencyCode.EUR,
    },
    expectedOutput: [CnbCurrencyCode.USD],
  },
  {
    description: 'returns single-item array when adding into empty array',
    input: {
      currencyCodes: [],
      currencyCode: CnbCurrencyCode.GBP,
    },
    expectedOutput: [CnbCurrencyCode.GBP],
  },
  {
    description:
      'removes duplicates when input contains duplicates and deletes target',
    input: {
      currencyCodes: [
        CnbCurrencyCode.USD,
        CnbCurrencyCode.USD,
        CnbCurrencyCode.EUR,
      ],
      currencyCode: CnbCurrencyCode.USD,
    },
    expectedOutput: [CnbCurrencyCode.EUR],
  },
];

describe('addOrRemoveFavoriteCurrencyCode', () => {
  it.each(testCases)('$description', ({ input, expectedOutput }) => {
    expect(
      addOrRemoveFavoriteCurrencyCode(input.currencyCodes, input.currencyCode),
    ).toEqual(expectedOutput);
  });
});
