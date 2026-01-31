import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ConverterFieldName, ConverterFormValues } from '../types.ts';
import styled from 'styled-components/native';
import {
  AppSize,
  ICONS_SIZE,
  ICONS_STROKE_WIDTH,
} from '../../../../../../../../constants/common.ts';
import { CurrencySelect } from './CurrencySelect.tsx';
import { ArrowLeftRight } from 'lucide-react-native';
import { useAppThemedColors } from '../../../../../../../../hooks/useAppThemedColors.ts';

export const CurrencySelectsRow = () => {
  const { icon } = useAppThemedColors();

  const { control, setValue, getValues } =
    useFormContext<ConverterFormValues>();

  const switchCurrencies = () => {
    const { fromCurrency, toCurrency } = getValues();
    setValue(ConverterFieldName.fromCurrency, toCurrency);
    setValue(ConverterFieldName.toCurrency, fromCurrency);
  };

  return (
    <SelectsWrapperStyled>
      <CurrencySelect
        control={control}
        currencyFieldName={ConverterFieldName.fromCurrency}
      />
      <ArrowLeftRight
        color={icon}
        onPress={switchCurrencies}
        size={ICONS_SIZE}
        strokeWidth={ICONS_STROKE_WIDTH}
      />
      <CurrencySelect
        control={control}
        currencyFieldName={ConverterFieldName.toCurrency}
      />
    </SelectsWrapperStyled>
  );
};

const SelectsWrapperStyled = styled.View`
  flex-direction: row;
  gap: ${AppSize.m}px;
  align-items: center;
`;
