import { ScreenProps } from '../../../types.ts';
import { TabsNavigatorScreen, TabsNavigatorScreenParams } from '../../types.ts';
import { useExchangeRates } from '../../../../../networking/useExchangeRates/useExchangeRates.ts';
import { CnbExchangeRatesInfo } from '../../../../../networking/useExchangeRates/types.ts';
import { AppScreenLayout } from '../../../../common/AppScreenLayout/AppScreenLayout.tsx';
import { AppQueryResolver } from '../../../../common/AppQueryResolver/AppQueryResolver.tsx';
import React from 'react';
import { ConverterSubmitButton } from './components/ConverterSubmitButton.tsx';
import { composeExchangeRateDatesString } from '../RatesScreen/helpers/composeExchangeRateDatesString.ts';
import { AppNumberInput } from '../../../../common/AppTextInput/AppNumberInput.tsx';
import { useForm } from 'react-hook-form';
import { ConverterFieldName, ConverterFormValues } from './types.ts';
import { CnbCurrencyCode } from '../../../../../networking/useExchangeRates/constants.ts';
import {
  useFavoriteCurrencyCodes
} from '../../../../../contexts/FavoriteCurrencyCodesProvider/FavoriteCurrencyCodesProvider.tsx';
import styled from 'styled-components/native';
import { AppSize } from '../../../../../constants/common.ts';

type ConverterScreenProps = ScreenProps<
  TabsNavigatorScreenParams,
  TabsNavigatorScreen.ConverterScreen
>;

export const ConverterScreen = ({ navigation }: ConverterScreenProps) => {
  const { data, dataUpdatedAt, isPending, error } = useExchangeRates();

  const { favoriteCurrencyCodes } = useFavoriteCurrencyCodes();

  const { control, handleSubmit } = useForm<ConverterFormValues>({
    defaultValues: {
      [ConverterFieldName.fromAmount]: '',
      [ConverterFieldName.fromCurrency]: CnbCurrencyCode.CZK,
      [ConverterFieldName.toCurrency]:
        favoriteCurrencyCodes[0] ?? CnbCurrencyCode.EUR,
    },
  });

  const subtitle = composeExchangeRateDatesString({
    latestCnbRateEffectiveDate: data?.latestCnbRateEffectiveDate,
    dataUpdatedAt,
  });

  const renderContent = (entries: CnbExchangeRatesInfo) => (
    <AppNumberInput
      name={ConverterFieldName.fromAmount}
      placeholder={'0.000'}
      control={control}
      min={0}
      isRequired
      autoFocus
    />
  );

  const footerElement = (
    <ConverterSubmitButton
      control={control}
      handleSubmit={handleSubmit}
    />
  );

  return (
    <AppScreenLayout
      title={'Converter'}
      subtitle={subtitle}
      shouldUseScrollView={false}
      shouldUseSafeAreaBottomPadding={false}>
      <FormWrapperStyled>
        <AppQueryResolver
          data={data}
          isPending={isPending}
          error={error}
          renderContent={renderContent}
        />
        {footerElement}
      </FormWrapperStyled>
    </AppScreenLayout>
  );
};

const FormWrapperStyled = styled.View`
  gap: ${AppSize.m}px;
`;
