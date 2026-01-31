import Papa from 'papaparse';
import { isAfter, isValid } from 'date-fns';
import { PIPE } from '../../../constants/common.ts';
import { WANTED_CNB_EXCHANGE_RATES_HISTORY_IN_DAYS, } from '../constants.ts';
import { getDateBeforeDays } from '../../../helpers/getDateBeforeDays.ts';
import { composeCnbCurrencyCodeAmountMapFromRawMap } from './composeCnbCurrencyCodeAmountMapFromRawMap.ts';
import { CnbYearRatesInfo } from '../types.ts';
import { parseCnbDate } from './parseCnbDate.ts';

/**
 * Based on {@link https://www.cnb.cz/en/faq/Format-of-the-foreign-exchange-market-rates/}
 */
const DATE_FIELD_NAME = 'Date';

export const parseCnbYearRates = (text: string) => {
  const parsed = Papa.parse<Record<string, string>>(text, {
    header: true,
    delimiter: PIPE,
    skipEmptyLines: true,
  });

  if (parsed.errors.length) {
    throw new Error(parsed.errors.map(error => error.message).join('; '));
  }

  const startDate = getDateBeforeDays(
    WANTED_CNB_EXCHANGE_RATES_HISTORY_IN_DAYS,
  );

  return parsed.data
    .reduce<CnbYearRatesInfo[]>(
      (acc, { [DATE_FIELD_NAME]: dateString, ...rawCurrencyAmountMap }) => {
        const date = parseCnbDate(dateString);

        const isAfterStartDate: boolean =
          isValid(date) && isAfter(date, startDate);

        if (isAfterStartDate) {
          const ratesByCode =
            composeCnbCurrencyCodeAmountMapFromRawMap(rawCurrencyAmountMap);

          acc.push({ date, ratesByCode });
        }

        return acc;
      },
      [],
    )
    .sort((a, b) => a.date.getTime() - b.date.getTime());
};
