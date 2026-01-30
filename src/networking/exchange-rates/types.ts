import { CnbCountryName, CnbCurrencyCode } from './constants.ts';

export type CnbCurrencyEntry = {
  countryName: CnbCountryName;
  currencyCode: CnbCurrencyCode;
  currencyName: string;
  czkRateTrendValues: number[];
};
