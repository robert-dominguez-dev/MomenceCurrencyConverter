import React, { memo } from 'react';
import { AppNumberInput } from '../../../../../../../common/AppTextInput/AppNumberInput.tsx';
import { useFormContext, useWatch } from 'react-hook-form';
import {
  ConverterFieldName,
  ConverterFormValues,
  CurrencyCodeRateMap,
} from '../types.ts';
import { CURRENCY_AMOUNT_PLACEHOLDER } from '../constants.ts';
import { AppText } from '../../../../../../../common/AppText/AppText.tsx';
import styled from 'styled-components/native';
import { AppSize } from '../../../../../../../../constants/common.ts';
import { composeConversionRateText } from '../helpers/composeConversionRateText.ts';

type ConverterInputProps = {
  currencyCodeRateMap: CurrencyCodeRateMap;
};

const _ConverterInput = ({ currencyCodeRateMap }: ConverterInputProps) => {
  const { control } = useFormContext<ConverterFormValues>();

  const fromCurrency = useWatch({
    name: ConverterFieldName.fromCurrency,
    control,
  });

  const toCurrency = useWatch({
    name: ConverterFieldName.toCurrency,
    control,
  });

  const conversionRateCaption = composeConversionRateText({
    fromCurrency,
    toCurrency,
    currencyCodeRateMap,
  });

  const accessoryLeft = <AppText category={'subtitle'}>{fromCurrency}</AppText>;

  return (
    <InputWrapperStyled>
      <AppNumberInput
        name={ConverterFieldName.fromAmount}
        placeholder={CURRENCY_AMOUNT_PLACEHOLDER}
        control={control}
        accessoryLeft={accessoryLeft}
        isRequired
        autoFocus
      />
      {!!conversionRateCaption && (
        <AppText
          category={'caption'}
          status={'muted'}>
          {conversionRateCaption}
        </AppText>
      )}
    </InputWrapperStyled>
  );
};

export const ConverterInput = memo(_ConverterInput);

const InputWrapperStyled = styled.View`
  gap: ${AppSize.xs};
  align-items: flex-end;
`;
