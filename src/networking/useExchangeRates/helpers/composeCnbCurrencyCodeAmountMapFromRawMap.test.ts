import { composeCnbCurrencyCodeAmountMapFromRawMap } from './composeCnbCurrencyCodeAmountMapFromRawMap.ts';
import { CnbCurrencyCode } from '../constants.ts';

type TestCase = {
  description: string;
  input: { rawCurrencyAmountMap: Record<string, string> };
  expectedOutput: Partial<Record<CnbCurrencyCode, number>>;
};

const testCases: TestCase[] = [
  {
    description:
      'normalizes CZK rates by unitsPerCzkRate from header (e.g. 100 HUF -> rate/100)',
    input: {
      rawCurrencyAmountMap: {
        '1 USD': '20.611',
        '100 HUF': '6.304',
        '1000 IDR': '1.233',
      },
    },
    expectedOutput: {
      [CnbCurrencyCode.USD]: 20.611,
      [CnbCurrencyCode.HUF]: 0.06304,
      [CnbCurrencyCode.IDR]: 0.0012330000000000002,
    },
  },
  {
    description: 'ignores non-currency header fields',
    input: {
      rawCurrencyAmountMap: {
        Date: '02.01.2026',
        '1 USD': '20.611',
      },
    },
    expectedOutput: {
      [CnbCurrencyCode.USD]: 20.611,
    },
  },
  {
    description: 'ignores zero and negative CZK rates',
    input: {
      rawCurrencyAmountMap: {
        '1 USD': '0',
        '100 HUF': '-6.304',
        '1000 IDR': '1.233',
      },
    },
    expectedOutput: {
      [CnbCurrencyCode.IDR]: 0.0012330000000000002,
    },
  },
  {
    description: 'ignores unknown currency codes',
    input: {
      rawCurrencyAmountMap: {
        '1 ABC': '123.456',
        '1 USD': '20.611',
      },
    },
    expectedOutput: {
      [CnbCurrencyCode.USD]: 20.611,
    },
  },
  {
    description: 'trims well',
    input: {
      rawCurrencyAmountMap: {
        '  1   ABC ': '123.456',
        '1 USD ': '20.611',
      },
    },
    expectedOutput: {
      [CnbCurrencyCode.USD]: 20.611,
    },
  },
];

describe('composeCnbCurrencyCodeAmountMapFromRawMap', () => {
  it.each(testCases)('$description', ({ input, expectedOutput }) => {
    expect(
      composeCnbCurrencyCodeAmountMapFromRawMap(input.rawCurrencyAmountMap),
    ).toEqual(expectedOutput);
  });
});
