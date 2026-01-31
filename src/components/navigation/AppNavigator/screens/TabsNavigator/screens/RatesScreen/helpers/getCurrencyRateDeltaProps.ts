import { checkIsValidNumber } from '../../../../../../../../helpers/checkIsValidNumber.ts';

export type CurrencyRateDeltaInfo = {
  first: number;
  last: number;
  minValue: number;
  maxValue: number;
  delta: number;
  deltaPercents: number;
  isBullish: boolean;
};

export const getCurrencyRateDeltaInfo = (
  values: number[],
): CurrencyRateDeltaInfo | undefined => {
  const first = values[0];
  const last = values[values.length - 1];

  const isFirstValid = checkIsValidNumber(first);
  const isLastValid = checkIsValidNumber(last);

  if (!isFirstValid || !isLastValid) {
    return undefined;
  }

  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);

  const delta = last - first;
  const deltaPercents: number = first === 0 ? 0 : (delta / first) * 100;
  const isBullish = delta >= 0;

  return {
    first,
    last,
    minValue,
    maxValue,
    delta,
    deltaPercents,
    isBullish,
  };
};
