import { CnbYearRatesInfo } from '../types.ts';
import { CnbCurrencyCode } from '../constants.ts';

export const composeCzkRateTrendValues = (
  yearlyRateItems: CnbYearRatesInfo[],
  currencyCode: CnbCurrencyCode,
) =>
  yearlyRateItems.reduce<number[]>((acc, item) => {
    const dailyCzkRate = item.ratesByCode[currencyCode];

    if (dailyCzkRate) {
      acc.push(dailyCzkRate);
    }

    return acc;
  }, []);
