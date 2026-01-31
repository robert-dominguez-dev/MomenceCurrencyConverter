import { CnbCurrencyCode } from '../../../../../../../networking/useExchangeRates/constants.ts';

export enum ConverterFieldName {
  fromAmount = 'fromAmount',
  fromCurrency = 'fromCurrency',
  toCurrency = 'toCurrency',
}

export type ConverterFormValues = {
  [ConverterFieldName.fromAmount]: string;
  [ConverterFieldName.fromCurrency]: CnbCurrencyCode;
  [ConverterFieldName.toCurrency]: CnbCurrencyCode;
};

export type CurrencyCodeRateMap = Partial<Record<CnbCurrencyCode, number>>;
