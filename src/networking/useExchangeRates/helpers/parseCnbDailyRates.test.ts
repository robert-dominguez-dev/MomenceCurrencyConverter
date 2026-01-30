import { parseCnbDailyRates } from './parseCnbDailyRates.ts';
import { CnbCurrencyCode } from '../constants.ts';
import { CnbDailyRatesInfo } from '../types.ts';

type TestCase = {
  description: string;
  input: { txt: string };
  expectedOutput: {
    dateLine: string;
    rows: CnbDailyRatesInfo[];
  };
};

const testCases: TestCase[] = [
  {
    description: 'parses CNB daily.txt pipe-separated content',
    input: {
      txt: `29 Jan 2026 #20
Country|Currency|Amount|Code|Rate
Australia|dollar|1|AUD|14.368
Hungary|forint|100|HUF|6.389
USA|dollar|1|USD|20.345
`,
    },
    expectedOutput: {
      dateLine: '29 Jan 2026 #20',
      rows: [
        {
          countryName: 'Australia',
          currencyName: 'dollar',
          currencyCode: CnbCurrencyCode.AUD,
          czkRate: 14.368,
        },
        {
          countryName: 'Hungary',
          currencyName: 'forint',
          currencyCode: CnbCurrencyCode.HUF,
          czkRate: 6.389,
        },
        {
          countryName: 'USA',
          currencyName: 'dollar',
          currencyCode: CnbCurrencyCode.USD,
          czkRate: 20.345,
        },
      ],
    },
  },
  {
    description: 'trims dateLine and skips empty lines',
    input: {
      txt: `  29 Jan 2026 #20  
Country|Currency|Amount|Code|Rate

Australia|dollar|1|AUD|14.368

USA|dollar|1|USD|20.345

`,
    },
    expectedOutput: {
      dateLine: '29 Jan 2026 #20',
      rows: [
        {
          countryName: 'Australia',
          currencyName: 'dollar',
          currencyCode: CnbCurrencyCode.AUD,
          czkRate: 14.368,
        },
        {
          countryName: 'USA',
          currencyName: 'dollar',
          currencyCode: CnbCurrencyCode.USD,
          czkRate: 20.345,
        },
      ],
    },
  },
];

describe('parseCnbDailyRates', () => {
  it.each(testCases)('$description', ({ input, expectedOutput }) => {
    expect(parseCnbDailyRates(input.txt)).toEqual(expectedOutput);
  });
});
