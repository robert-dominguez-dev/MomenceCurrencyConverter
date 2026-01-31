import { CnbCurrencyEntry } from '../../../../../networking/useExchangeRates/types.ts';
import { CnbCurrencyCode } from '../../../../../networking/useExchangeRates/constants.ts';

export const czkCurrencyEntry: CnbCurrencyEntry = {
  currencyCode: CnbCurrencyCode.CZK,
  countryName: 'Czechia',
  currencyName: 'crown',
  /**
   * CZK to CZK is always 1:1...
   */
  czkRateTrendValues: [1],
};
