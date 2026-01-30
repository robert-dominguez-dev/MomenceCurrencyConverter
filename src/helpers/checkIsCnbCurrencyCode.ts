import { checkIsEnumMember } from './checkIsEnumMember.ts';
import { CnbCurrencyCode } from '../networking/useExchangeRates/constants.ts';

export const checkIsCnbCurrencyCode = (currencyCode: string | undefined) =>
  checkIsEnumMember(CnbCurrencyCode, currencyCode);
