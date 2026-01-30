import Papa from 'papaparse';
import { LINE_BREAK_SEPARATOR, PIPE } from '../../../constants/common.ts';
import { getNumber } from '../../../helpers/getNumber.ts';
import { checkIsCnbCurrencyCode } from '../../../helpers/checkIsCnbCurrencyCode.ts';
import { CnbDailyRatesInfo } from '../types.ts';

type CnbDailyRatesRow = {
  Country: string;
  Currency: string;
  Amount: string;
  Code: string;
  Rate: string;
};

export const parseCnbDailyRates = (txt: string) => {
  const [_dateLine, ...rest] = txt.split(LINE_BREAK_SEPARATOR);

  const parsed = Papa.parse<CnbDailyRatesRow>(rest.join(LINE_BREAK_SEPARATOR), {
    header: true,
    delimiter: PIPE,
    skipEmptyLines: true,
  });

  if (parsed.errors.length) {
    throw new Error(parsed.errors.map(e => e.message).join('; '));
  }

  return parsed.data.reduce<CnbDailyRatesInfo[]>(
    (
      acc,
      {
        Country: countryName,
        Currency: currencyName,
        Amount: amount,
        Code: currencyCode,
        Rate: rate,
      },
    ) => {
      const isCnbCurrencyCode = checkIsCnbCurrencyCode(currencyCode);

      const czkRate = getNumber(rate) / getNumber(amount);

      if (isCnbCurrencyCode) {
        acc.push({
          currencyCode,
          currencyName,
          countryName,
          czkRate,
        });
      }

      return acc;
    },
    [],
  );
};
