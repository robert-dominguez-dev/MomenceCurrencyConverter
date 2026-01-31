import { countConvertedAmountWithTargetCurrency } from './countConvertedAmountWithTargetCurrency.ts';
import { round } from 'lodash';
import { CurrencyCodeRateMap } from '../types.ts';
import { CnbCurrencyCode } from '../../../../../../../../networking/useExchangeRates/constants.ts';

const FROM_AMOUNT = 1;

type ComposeConversionRateTextParams = {
  fromCurrency: CnbCurrencyCode;
  toCurrency: CnbCurrencyCode;
  currencyCodeRateMap: CurrencyCodeRateMap;
};

export const composeConversionRateText = ({
  fromCurrency,
  toCurrency,
  currencyCodeRateMap,
}: ComposeConversionRateTextParams): string | undefined => {
  const toAmount = countConvertedAmountWithTargetCurrency({
    fromAmount: FROM_AMOUNT,
    fromCurrencyCzkRate: currencyCodeRateMap[fromCurrency],
    toCurrencyCzkRate: currencyCodeRateMap[toCurrency],
  });

  if (!toAmount) {
    return undefined;
  }

  return `${FROM_AMOUNT} ${fromCurrency} = ${round(toAmount, 3)} ${toCurrency}`;
};
