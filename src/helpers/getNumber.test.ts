import { getNumber } from './getNumber';

type TestCase = {
    description: string;
    input: unknown;
    fallback?: number;
    expected: number;
};

const testCases: TestCase[] = [
  {
    description: 'valid number',
    input: 42,
    expected: 42,
  },
  {
    description: 'negative number',
    input: -15,
    expected: -15,
  },
  {
    description: 'zero',
    input: 0,
    expected: 0,
  },

  {
    description: 'string integer',
    input: '123 ',
    expected: 123,
  },
  {
    description: 'string float',
    input: '1.5',
    expected: 1.5,
  },
  {
    description: 'invalid numeric string',
    input: 'abc',
    fallback: 7,
    expected: 7,
  },
  {
    description: 'string with comma',
    input: '1,1',
    fallback: 5,
    expected: 5,
  },
  {
    description: 'null → fallback',
    input: null,
    fallback: 9,
    expected: 9,
  },
  {
    description: 'undefined → fallback',
    input: undefined,
    fallback: 4,
    expected: 4,
  },
  {
    description: 'false → fallback',
    input: false,
    fallback: 3,
    expected: 3,
  },
  {
    description: 'empty string → fallback',
    input: '',
    fallback: 6,
    expected: 6,
  },

  {
    description: 'NaN → fallback',
    input: NaN,
    fallback: 8,
    expected: 8,
  },
  {
    description: 'Infinity → fallback',
    input: Infinity,
    fallback: -1,
    expected: -1,
  },
];

describe('getNumber', () => {
  test.each(testCases)(
    '$description',
    ({ input, fallback, expected }) => {
      expect(getNumber(input, fallback)).toBe(expected);
    },
  );
});