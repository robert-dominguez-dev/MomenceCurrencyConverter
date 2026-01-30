import { getYearsForLastDays } from './getYearsForLastDays.ts';

type TestCase = {
  description: string;
  input: { days: number; now: Date };
  expectedOutput: number[];
};

const testCases: TestCase[] = [
  {
    description: '90 days back from 2026-01-15 spans two years -> [2025, 2026]',
    input: { days: 90, now: new Date('2026-01-15') },
    expectedOutput: [2025, 2026],
  },
  {
    description: '30 days back from 2026-03-15 stays in same year -> [2026]',
    input: { days: 30, now: new Date('2026-03-15') },
    expectedOutput: [2026],
  },
  {
    description:
      '365 days back from 2026-01-01 spans two years -> [2025, 2026]',
    input: { days: 365, now: new Date('2026-01-01') },
    expectedOutput: [2025, 2026],
  },
  {
    description:
      '366 days back from 2026-01-01 spans two years -> [2024, 2025, 2026]',
    input: { days: 366, now: new Date('2026-01-01') },
    expectedOutput: [2024, 2025, 2026],
  },
  {
    description: '1 day back from 2027-01-01 returns [2026, 2027]',
    input: { days: 1, now: new Date('2027-01-01') },
    expectedOutput: [2026, 2027],
  },
];

describe('getYearsForLastDays', () => {
  it.each(testCases)('$description', ({ input, expectedOutput }) => {
    expect(getYearsForLastDays(input.days, input.now)).toEqual(expectedOutput);
  });
});
