import { CnbCurrencyEntry, CnbExchangeRatesInfo } from '../types.ts';
import { parseCnbYearRates } from './parseCnbYearRates.ts';
import { parseCnbDailyRates } from './parseCnbDailyRates.ts';
import { composeCzkRateTrendValues } from './composeCzkRateTrendValues.ts';

type ComposeCnbCurrencyRateEntries = {
  dailyCurrencyRatesDataString: string;
  yearlyCurrencyRatesDataStrings: string[];
};

export const composeCnbCurrencyRateEntries = ({
  dailyCurrencyRatesDataString,
  yearlyCurrencyRatesDataStrings,
}: ComposeCnbCurrencyRateEntries): CnbExchangeRatesInfo => {
  const dailyRateItems = parseCnbDailyRates(dailyCurrencyRatesDataString);
  const yearlyRateItems =
    yearlyCurrencyRatesDataStrings.flatMap(parseCnbYearRates);

  const entries = dailyRateItems.reduce<CnbCurrencyEntry[]>(
    (acc, { currencyCode, currencyName, countryName, czkRate }) => {
      const czkRateTrendValues = composeCzkRateTrendValues(
        yearlyRateItems,
        currencyCode,
      );

      const lastCzkRate = czkRateTrendValues[czkRateTrendValues.length - 1];

      const isLastCzkRateUpToDate = lastCzkRate === czkRate;

      if (!isLastCzkRateUpToDate) {
        czkRateTrendValues.push(czkRate);
      }

      const entry: CnbCurrencyEntry = {
        currencyCode,
        currencyName,
        countryName,
        czkRateTrendValues,
      };

      acc.push(entry);
      return acc;
    },
    [],
  );

  const latestCnbRateEffectiveDate =
    yearlyRateItems[yearlyRateItems.length - 1].date;

  return {
    latestCnbRateEffectiveDate,
    entries,
  };
};
