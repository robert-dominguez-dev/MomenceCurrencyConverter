import { CnbCurrencyCode } from '../../../networking/useExchangeRates/constants.ts';

export const addOrRemoveFavoriteCurrencyCode = (
  currencyCodes: CnbCurrencyCode[],
  currencyCode: CnbCurrencyCode,
) => {
  const currencyCodesCopy: CnbCurrencyCode[] = [...currencyCodes];

  const shouldRemove = currencyCodesCopy.includes(currencyCode);

  if (shouldRemove) {
    return currencyCodesCopy.filter(code => code !== currencyCode);
  }

  currencyCodesCopy.push(currencyCode);
  return currencyCodesCopy;
};
