import { CnbCurrencyCode } from './constants.ts';

export type CnbCurrencyCodeAmountMap = Partial<Record<CnbCurrencyCode, number>>;

export type CnbDailyRatesInfo = {
  currencyCode: CnbCurrencyCode;
  currencyName: string;
  countryName: string;
  czkRate: number;
};

export type CnbCurrencyEntry = Pick<
  CnbDailyRatesInfo,
  'currencyCode' | 'currencyName' | 'countryName'
> & {
  czkRateTrendValues: number[];
};

export type CnbYearRatesInfo = {
  date: Date;
  ratesByCode: CnbCurrencyCodeAmountMap;
};

export type CnbExchangeRatesInfo = {
  latestCnbRateEffectiveDate: Date;
  entries: CnbCurrencyEntry[];
};
