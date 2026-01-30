import Papa from 'papaparse';
import { LINE_BREAK_SEPARATOR, PIPE } from '../../../constants/common.ts';
import { getNumber } from '../../../helpers/getNumber.ts';

export type CnbDailyRatesRow = {
  Country: string;
  Currency: string;
  Amount: string;
  Code: string;
  Rate: string;
};

export const parseCnbDailyRates = (txt: string) => {
  const [dateLine, ...rest] = txt.split(LINE_BREAK_SEPARATOR);

  const parsed = Papa.parse<CnbDailyRatesRow>(rest.join(LINE_BREAK_SEPARATOR), {
    header: true,
    delimiter: PIPE,
    skipEmptyLines: true,
  });

  if (parsed.errors.length) {
    throw new Error(parsed.errors.map(e => e.message).join('; '));
  }

  const rows = parsed.data.map(r => ({
    country: r.Country,
    currency: r.Currency,
    amount: getNumber(r.Amount),
    code: r.Code,
    rate: getNumber(r.Rate),
  }));

  return { dateLine: dateLine.trim(), rows };
};
