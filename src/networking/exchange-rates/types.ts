import { CnbCurrencyCode } from './constants.ts';

export type CnbCurrencyEntry = {
  currencyCode: CnbCurrencyCode;
  currencyName: string;
  countryName: string;
  czkRateTrendValues: number[];
};
