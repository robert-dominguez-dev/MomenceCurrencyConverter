import Papa from 'papaparse';
import { parse } from 'date-fns';
import { PIPE } from '../../../constants/common.ts';
import { getNumber } from '../../../helpers/getNumber.ts';

export type CnbYearRatesRow = {
  date: Date;
  ratesByCode: Record<string, number>;
};

// TODO: Refactor
export const parseCnbYearRates = (text: string): CnbYearRatesRow[] => {
  const parsed = Papa.parse<Record<string, string>>(text, {
    header: true,
    delimiter: PIPE,
    skipEmptyLines: true,
  });

  if (parsed.errors.length) {
    throw new Error(parsed.errors.map(error => error.message).join('; '));
  }

  const headerFields = (parsed.meta.fields ?? []).map(field => field.trim());

  const amountByCurrencyCode = Object.fromEntries(
    headerFields
      .filter(field => field !== 'Date')
      .map(field => {
        const [amountString, currencyCode] = field.split(' ');
        return [currencyCode, Number(amountString)];
      }),
  ) as Record<string, number>;

  return parsed.data.map(row => {
    const dateString = String(row['Date']).trim();
    const date = parse(dateString, 'dd.MM.yyyy', new Date());

    const ratesByCode = Object.fromEntries(
      Object.entries(row)
        .filter(([columnName]) => columnName !== 'Date')
        .map(([columnName, valueString]) => {
          const [, currencyCode] = columnName.trim().split(' ');
          const amount = amountByCurrencyCode[currencyCode] ?? 1;
          const value = getNumber(valueString);
          return [currencyCode, value / amount];
        }),
    ) as Record<string, number>;

    return { date, ratesByCode };
  });
};
