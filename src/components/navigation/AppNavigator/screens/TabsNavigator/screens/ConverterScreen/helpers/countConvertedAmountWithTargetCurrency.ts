export type CountConvertedAmountWithTargetCurrencyParams = {
  fromAmount: number;
  fromCurrencyCzkRate: number | undefined;
  toCurrencyCzkRate: number | undefined;
};

export const countConvertedAmountWithTargetCurrency = ({
  fromAmount,
  fromCurrencyCzkRate,
  toCurrencyCzkRate,
}: CountConvertedAmountWithTargetCurrencyParams): number | undefined => {
  if (!fromCurrencyCzkRate || !toCurrencyCzkRate) {
    return undefined;
  }

  return (fromAmount * fromCurrencyCzkRate) / toCurrencyCzkRate;
};
