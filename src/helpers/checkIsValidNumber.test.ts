import { checkIsValidNumber } from './checkIsValidNumber.ts';

type TestCase = [unknown, boolean];

const testCases: TestCase[] = [
  [0, true],
  [42, true],
  [-5.5, true],
  [Number.MAX_SAFE_INTEGER, true],
  [Number.MIN_SAFE_INTEGER, true],
  [Infinity, false],
  [-Infinity, false],
  [NaN, false],
  ['42', false],
  [true, false],
  [null, false],
  [undefined, false],
  [[], false],
  [{}, false],
  [() => 42, false],
];

describe('checkIsValidNumber', () => {
  it.each(testCases)(
    'checkIsValidNumber(%p) -> %p',
    (input, expectedOutput) => {
      expect(checkIsValidNumber(input)).toBe(expectedOutput);
    },
  );
});
