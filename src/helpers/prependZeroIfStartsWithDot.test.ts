import { prependZeroIfStartsWithDot } from './prependZeroIfStartsWithDot.ts';

describe('prependZeroIfStartsWithDot', () => {
  it.each([
    ['12.34', '12.34'],
    ['100000.000', '100000.000'],
    ['.42', '0.42'],
    ['123', '123'],
    ['0.56', '0.56'],
    ['.000', '0.000'],
    ['1.23', '1.23'],
    ['2000', '2000'],
  ])(
    'replaces first comma with dot correctly for input "%s"',
    (input, expected) => {
      expect(prependZeroIfStartsWithDot(input)).toBe(expected);
    },
  );
});
