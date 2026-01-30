import { parseCnbDailyRates } from './parseCnbDailyRates.ts';

type TestCase = {
  description: string;
  input: { txt: string };
  expectedOutput: {
    dateLine: string;
    rows: Array<{
      country: string;
      currency: string;
      amount: number;
      code: string;
      rate: number;
    }>;
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
          country: 'Australia',
          currency: 'dollar',
          amount: 1,
          code: 'AUD',
          rate: 14.368,
        },
        {
          country: 'Hungary',
          currency: 'forint',
          amount: 100,
          code: 'HUF',
          rate: 6.389,
        },
        {
          country: 'USA',
          currency: 'dollar',
          amount: 1,
          code: 'USD',
          rate: 20.345,
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
          country: 'Australia',
          currency: 'dollar',
          amount: 1,
          code: 'AUD',
          rate: 14.368,
        },
        {
          country: 'USA',
          currency: 'dollar',
          amount: 1,
          code: 'USD',
          rate: 20.345,
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
