import { axiosInstance } from '../constants.ts';
import { useQuery } from '@tanstack/react-query';
import { ONE_HOUR_IN_MS } from '../../constants/common.ts';
import { CnbExchangeRatesInfo } from './types.ts';
import { getYearsForLastDays } from '../../helpers/getYearsForLastDays.ts';
import { WANTED_CNB_EXCHANGE_RATES_HISTORY_IN_DAYS } from './constants.ts';
import { composeCnbCurrencyRateEntries } from './helpers/composeCnbCurrencyRateEntries.ts';

const CNB_BASE_URI =
  'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing';

const CNB_DAILY_URI = `${CNB_BASE_URI}/daily.txt`;
const CNB_YEAR_URI = `${CNB_BASE_URI}/year.txt`;

const fetchCnbDaily = async (): Promise<string> => {
  const { data } = await axiosInstance.get<string>(CNB_DAILY_URI, {
    responseType: 'text',
  });
  return data;
};

const fetchCnbYear = async (year: number): Promise<string> => {
  const { data } = await axiosInstance.get<string>(CNB_YEAR_URI, {
    params: { year },
    responseType: 'text',
  });
  return data;
};

const fetchAndProcessCnbData = async (
  yearsFromOldest: number[],
): Promise<CnbExchangeRatesInfo> => {
  const dailyCurrencyRatesDataPromise = fetchCnbDaily();
  const yearlyCurrencyRatesDataPromises = yearsFromOldest.map(year =>
    fetchCnbYear(year),
  );

  const [dailyCurrencyRatesDataString, ...yearlyCurrencyRatesDataStrings] =
    await Promise.all([
      dailyCurrencyRatesDataPromise,
      ...yearlyCurrencyRatesDataPromises,
    ]);

  return composeCnbCurrencyRateEntries({
    dailyCurrencyRatesDataString,
    yearlyCurrencyRatesDataStrings,
  });
};

export const useExchangeRates = () => {
  const yearsFromOldest = getYearsForLastDays(
    WANTED_CNB_EXCHANGE_RATES_HISTORY_IN_DAYS,
  );

  const { data, dataUpdatedAt, isPending, error } = useQuery({
    queryKey: ['cnb', 'rates', ...yearsFromOldest],
    queryFn: () => fetchAndProcessCnbData(yearsFromOldest),
    staleTime: ONE_HOUR_IN_MS,
    gcTime: ONE_HOUR_IN_MS,
  });

  return {
    data,
    dataUpdatedAt,
    isPending,
    error,
  };
};
