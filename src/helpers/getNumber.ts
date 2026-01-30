import { checkIsValidNumber } from './checkIsValidNumber.ts';

export const getNumber = (maybeNumber: unknown, fallbackNumber = 0): number => {
  /**
   * If it's already a valid number,
   * don't need to waste computing on other evaluations...
   */
  if (checkIsValidNumber(maybeNumber)) {
    return maybeNumber;
  }

  /**
   * Handling falsy values like null, undefined, false, ""...
   */
  if (!maybeNumber) {
    return fallbackNumber;
  }

  const parsedNumber = Number(maybeNumber);

  return checkIsValidNumber(parsedNumber) ? parsedNumber : fallbackNumber;
};
