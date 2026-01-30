import { CnbCurrencyCode } from '../../../networking/useExchangeRates/constants.ts';
import { checkIsCnbCurrencyCode } from '../../../helpers/checkIsCnbCurrencyCode.ts';

export const safeParseFavoriteCurrencyCodes = (
  storedCurrencyCodesUnsafe: string | null,
): CnbCurrencyCode[] => {
  if (!storedCurrencyCodesUnsafe) {
    return [];
  }

  const parsedCurrencyCodes: unknown = JSON.parse(storedCurrencyCodesUnsafe);

  if (!Array.isArray(parsedCurrencyCodes)) {
    return [];
  }

  return parsedCurrencyCodes.reduce<CnbCurrencyCode[]>(
    (acc, currencyCodeUnsafe) => {
      const isCnbCurrencyCode = checkIsCnbCurrencyCode(currencyCodeUnsafe);

      if (isCnbCurrencyCode) {
        acc.push(currencyCodeUnsafe);
      }

      return acc;
    },
    [],
  );
};
