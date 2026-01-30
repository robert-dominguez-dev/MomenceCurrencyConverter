import { CnbYearRatesRow, parseCnbYearRates } from './parseCnbYearRates.ts';

type TestCase = {
  description: string;
  input: { text: string };
  expectedOutput: CnbYearRatesRow[];
};

const testCases: TestCase[] = [
  {
    description: 'normalizes rates by header amount (split by space)',
    input: {
      text: `Date|1 USD|100 HUF|1000 IDR
02.01.2026|20.611|6.304|1.233
29.01.2026|20.345|6.389|1.215
`,
    },
    expectedOutput: [
      {
        date: new Date(2026, 0, 2),
        ratesByCode: { USD: 20.611, HUF: 0.06304, IDR: 0.0012330000000000002 },
      },
      {
        date: new Date(2026, 0, 29),
        ratesByCode: { USD: 20.345, HUF: 0.06389, IDR: 0.0012150000000000002 },
      },
    ],
  },
];

describe('parseCnbYearRates', () => {
  it.each(testCases)('$description', ({ input, expectedOutput }) => {
    expect(parseCnbYearRates(input.text)).toEqual(expectedOutput);
  });
});
