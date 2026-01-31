import { useExchangeRates } from '../../../../../../../networking/useExchangeRates/useExchangeRates.ts';
import { CnbExchangeRatesInfo } from '../../../../../../../networking/useExchangeRates/types.ts';
import { AppScreenLayout } from '../../../../../../common/AppScreenLayout/AppScreenLayout.tsx';
import { AppQueryResolver } from '../../../../../../common/AppQueryResolver/AppQueryResolver.tsx';
import React from 'react';
import { composeExchangeRateDatesString } from '../RatesScreen/helpers/composeExchangeRateDatesString.ts';
import styled from 'styled-components/native';
import { ConverterForm } from './components/ConverterForm.tsx';
import { AppSize } from '../../../../../../../constants/common.ts';

export const ConverterScreen = () => {
  const { data, dataUpdatedAt, isPending, error } = useExchangeRates();

  const subtitle = composeExchangeRateDatesString({
    latestCnbRateEffectiveDate: data?.latestCnbRateEffectiveDate,
    dataUpdatedAt,
  });

  const renderContent = ({ entries }: CnbExchangeRatesInfo) => (
    <ConverterForm entries={entries} />
  );

  return (
    <AppScreenLayout
      title={'Converter'}
      subtitle={subtitle}
      shouldUseScrollView={false}>
      <ContentWrapperStyled>
        <AppQueryResolver
          data={data}
          isPending={isPending}
          error={error}
          renderContent={renderContent}
        />
      </ContentWrapperStyled>
    </AppScreenLayout>
  );
};

const ContentWrapperStyled = styled.View`
  flex: 1;
  gap: ${AppSize.m}px;
`;
