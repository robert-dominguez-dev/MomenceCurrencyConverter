import { useFormContext, useWatch } from 'react-hook-form';
import {
  ConverterFieldName,
  ConverterFormValues,
  CurrencyCodeRateMap,
} from '../types.ts';
import { getNumber } from '../../../../../../../../helpers/getNumber.ts';
import { countConvertedAmountWithTargetCurrency } from '../helpers/countConvertedAmountWithTargetCurrency.ts';
import { formatNumber } from '../../../../../../../../helpers/formatNumber.ts';
import { CURRENCY_AMOUNT_PLACEHOLDER } from '../constants.ts';

export const useConvertedAmountWithTargetCurrency = (
  currencyCodeRateMap: CurrencyCodeRateMap,
): string => {
  const { control } = useFormContext<ConverterFormValues>();

  const fromCurrency = useWatch({
    name: ConverterFieldName.fromCurrency,
    control,
  });

  const toCurrency = useWatch({
    name: ConverterFieldName.toCurrency,
    control,
  });

  const fromAmount = useWatch({
    name: ConverterFieldName.fromAmount,
    control,
  });

  const toAmount = countConvertedAmountWithTargetCurrency({
    fromAmount: getNumber(fromAmount),
    fromCurrencyCzkRate: currencyCodeRateMap[fromCurrency],
    toCurrencyCzkRate: currencyCodeRateMap[toCurrency],
  });

  if (!toAmount) {
    return `${CURRENCY_AMOUNT_PLACEHOLDER} ${toCurrency}`;
  }

  return `${formatNumber(toAmount, { decimals: 3 })} ${toCurrency}`;
};
