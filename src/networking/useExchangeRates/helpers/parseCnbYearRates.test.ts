import { parseCnbYearRates } from './parseCnbYearRates.ts';

type TestCase = {
  description: string;
  input: string;
  expectedOutput: ReturnType<typeof parseCnbYearRates>;
};

const testCases: TestCase[] = [
  {
    description:
      'sorts rows by date ascending (oldest first) and normalizes by header units (with extra spaces in header)',
    input: `Date|  1   USD |  100    HUF  |  1000   IDR  
29.01.2026|20.345|6.389|1.215
02.01.2026|20.611|6.304|1.233
15.01.2026|20.884|6.295|1.237
08.01.2026|20.785|6.306|1.238
`,
    expectedOutput: [
      {
        date: new Date(2026, 0, 2),
        ratesByCode: { USD: 20.611, HUF: 0.06304, IDR: 0.0012330000000000002 },
      },
      {
        date: new Date(2026, 0, 8),
        ratesByCode: { USD: 20.785, HUF: 0.06306, IDR: 0.001238 },
      },
      {
        date: new Date(2026, 0, 15),
        ratesByCode: { USD: 20.884, HUF: 0.06295, IDR: 0.001237 },
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
    expect(parseCnbYearRates(input)).toEqual(expectedOutput);
  });
});
