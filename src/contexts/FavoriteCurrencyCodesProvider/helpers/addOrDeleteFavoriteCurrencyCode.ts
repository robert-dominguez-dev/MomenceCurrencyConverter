import { CnbCurrencyCode } from '../../../networking/useExchangeRates/constants.ts';

export const addOrDeleteFavoriteCurrencyCode = (
  currencyCodes: CnbCurrencyCode[],
  currencyCode: CnbCurrencyCode,
) => {
  const currencyCodesSet = new Set<CnbCurrencyCode>(currencyCodes);

  if (currencyCodesSet.has(currencyCode)) {
    currencyCodesSet.delete(currencyCode);
  } else {
    currencyCodesSet.add(currencyCode);
  }

  return Array.from(currencyCodesSet);
};
