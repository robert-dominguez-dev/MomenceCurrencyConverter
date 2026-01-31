import { CnbCurrencyEntry } from '../../../../../../../../networking/useExchangeRates/types.ts';
import { CnbCurrencyCode } from '../../../../../../../../networking/useExchangeRates/constants.ts';
import { CurrencyCodeRateMap } from '../types.ts';

export const composeCurrencyCodeRateMap = (entries: CnbCurrencyEntry[]) =>
  entries.reduce<CurrencyCodeRateMap>(
    (acc, { currencyCode, czkRateTrendValues }) => {
      const currentCzkRateIndex = czkRateTrendValues.length - 1;
      acc[currencyCode] = czkRateTrendValues[currentCzkRateIndex];
      return acc;
    },
    {
      [CnbCurrencyCode.CZK]: 1,
    },
  );
