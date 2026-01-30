import { axiosInstance } from '../constants.ts';
import { useQuery } from '@tanstack/react-query';
import { ONE_HOUR_IN_MS } from '../../constants/common.ts';
import { CnbCurrencyEntry } from './types.ts';
import { getYearsForLastDays } from '../../helpers/getYearsForLastDays.ts';
import { parseCnbDailyRates } from './helpers/parseCnbDailyRates.ts';
import { parseCnbYearRates } from './helpers/parseCnbYearRates.ts';

const CNB_BASE_URI =
  'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing';

const CNB_DAILY_URI = `${CNB_BASE_URI}/daily.txt`;
const CNB_YEAR_URI = `${CNB_BASE_URI}/year.txt`;

const EXCHANGE_RATES_HISTORY_IN_DAYS = 90;

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
  years: number[],
): Promise<CnbCurrencyEntry[]> => {
  const dailyTextPromise = fetchCnbDaily();
  const yearlyTextPromises = years.map(year => fetchCnbYear(year));

  const [dailyText, ...yearlyTexts] = await Promise.all([
    dailyTextPromise,
    ...yearlyTextPromises,
  ]);
  console.log(parseCnbDailyRates(dailyText));
  console.log(yearlyTexts.map(parseCnbYearRates));
  const entries: CnbCurrencyEntry[] = [];
  return entries;
};

export const useExchangeRates = () => {
  const years = getYearsForLastDays(EXCHANGE_RATES_HISTORY_IN_DAYS);

  const { data, isPending, error } = useQuery({
    queryKey: ['cnb', 'rates', ...years],
    queryFn: () => fetchAndProcessCnbData(years),
    staleTime: ONE_HOUR_IN_MS,
    gcTime: ONE_HOUR_IN_MS,
  });

  return {
    data,
    isPending,
    error,
  };
};
