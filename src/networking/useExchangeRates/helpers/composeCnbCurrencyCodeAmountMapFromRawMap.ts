import { CnbCurrencyCodeAmountMap } from '../types.ts';
import { parseCnbYearsHeaderFieldInfo } from './parseCnbYearsHeaderFieldInfo.ts';
import { getNumber } from '../../../helpers/getNumber.ts';

export const composeCnbCurrencyCodeAmountMapFromRawMap = (
  rawCurrencyAmountMap: Record<string, string>,
) =>
  Object.entries(rawCurrencyAmountMap).reduce<CnbCurrencyCodeAmountMap>(
    (acc, [headerField, czkRateString]) => {
      const headerFieldInfo = parseCnbYearsHeaderFieldInfo(headerField);
      const czkRate = getNumber(czkRateString);

      if (headerFieldInfo && czkRate > 0) {
        acc[headerFieldInfo.currencyCode] =
          czkRate / headerFieldInfo.unitsPerCzkRate;
      }

      return acc;
    },
    {},
  );
