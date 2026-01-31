/**
 * Based on {@link https://www.cnb.cz/en/faq/Format-of-the-foreign-exchange-market-rates/}
 */
export const CNB_DATE_FORMAT = 'dd.MM.yyyy';

/**
 * Based on {@link https://www.cnb.cz/en/faq/Format-of-the-foreign-exchange-market-rates/}
 */
export enum CnbCurrencyCode {
  CZK = 'CZK',
  AUD = 'AUD',
  BRL = 'BRL',
  CAD = 'CAD',
  CNY = 'CNY',
  DKK = 'DKK',
  EUR = 'EUR',
  HKD = 'HKD',
  HUF = 'HUF',
  ISK = 'ISK',
  XDR = 'XDR',
  INR = 'INR',
  IDR = 'IDR',
  ILS = 'ILS',
  JPY = 'JPY',
  MYR = 'MYR',
  MXN = 'MXN',
  NZD = 'NZD',
  NOK = 'NOK',
  PHP = 'PHP',
  PLN = 'PLN',
  RON = 'RON',
  SGD = 'SGD',
  ZAR = 'ZAR',
  KRW = 'KRW',
  SEK = 'SEK',
  CHF = 'CHF',
  THB = 'THB',
  TRY = 'TRY',
  GBP = 'GBP',
  USD = 'USD',
}

export const currencyCodeToFlagEmojiMap: Record<CnbCurrencyCode, string> = {
  [CnbCurrencyCode.CZK]: '🇨🇿',
  [CnbCurrencyCode.AUD]: '🇦🇺',
  [CnbCurrencyCode.BRL]: '🇧🇷',
  [CnbCurrencyCode.CAD]: '🇨🇦',
  [CnbCurrencyCode.CNY]: '🇨🇳',
  [CnbCurrencyCode.DKK]: '🇩🇰',
  [CnbCurrencyCode.EUR]: '🇪🇺',
  [CnbCurrencyCode.HKD]: '🇭🇰',
  [CnbCurrencyCode.HUF]: '🇭🇺',
  [CnbCurrencyCode.ISK]: '🇮🇸',
  [CnbCurrencyCode.XDR]: '🌐',
  [CnbCurrencyCode.INR]: '🇮🇳',
  [CnbCurrencyCode.IDR]: '🇮🇩',
  [CnbCurrencyCode.ILS]: '🇮🇱',
  [CnbCurrencyCode.JPY]: '🇯🇵',
  [CnbCurrencyCode.MYR]: '🇲🇾',
  [CnbCurrencyCode.MXN]: '🇲🇽',
  [CnbCurrencyCode.NZD]: '🇳🇿',
  [CnbCurrencyCode.NOK]: '🇳🇴',
  [CnbCurrencyCode.PHP]: '🇵🇭',
  [CnbCurrencyCode.PLN]: '🇵🇱',
  [CnbCurrencyCode.RON]: '🇷🇴',
  [CnbCurrencyCode.SGD]: '🇸🇬',
  [CnbCurrencyCode.ZAR]: '🇿🇦',
  [CnbCurrencyCode.KRW]: '🇰🇷',
  [CnbCurrencyCode.SEK]: '🇸🇪',
  [CnbCurrencyCode.CHF]: '🇨🇭',
  [CnbCurrencyCode.THB]: '🇹🇭',
  [CnbCurrencyCode.TRY]: '🇹🇷',
  [CnbCurrencyCode.GBP]: '🇬🇧',
  [CnbCurrencyCode.USD]: '🇺🇸',
};

export const WANTED_CNB_EXCHANGE_RATES_HISTORY_IN_DAYS = 90;
