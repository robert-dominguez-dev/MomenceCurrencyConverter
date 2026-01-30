import { isValid } from 'date-fns';

import { getValidDate } from './getValidDate';

describe('getValidDate', () => {
  it.each([
    ['2025-03-11', true],
    ['invalid-date', false],
    [new Date('2025-03-11'), true],
    [new Date('invalid-date'), false],
    [new Date(''), false],
  ])(
    'validation of %s should be evaluated as %s',
    (input, isDateExpectedToBeValid) => {
      const maybeValidDate = getValidDate(input);
      const isDateValid = isValid(maybeValidDate);
      expect(isDateValid).toBe(isDateExpectedToBeValid);
    },
  );
});
