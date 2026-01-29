import isFinite from 'lodash/isFinite';

export const checkIsValidNumber = (
  maybeNumber: unknown,
): maybeNumber is number => isFinite(maybeNumber);
