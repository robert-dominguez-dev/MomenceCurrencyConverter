import { ScreenProps } from '../../../../../types.ts';
import { TabsNavigatorScreen, TabsNavigatorScreenParams } from '../../types.ts';
import { AppScreenLayout } from '../../../../../../common/AppScreenLayout/AppScreenLayout.tsx';
import { useExchangeRates } from '../../../../../../../networking/useExchangeRates/useExchangeRates.ts';
import { AppQueryResolver } from '../../../../../../common/AppQueryResolver/AppQueryResolver.tsx';
import { CnbExchangeRatesInfo } from '../../../../../../../networking/useExchangeRates/types.ts';
import { CurrencyRateContent } from './components/CurrencyRateContent.tsx';
import React from 'react';
import { composeExchangeRateDatesString } from './helpers/composeExchangeRateDatesString.ts';

type RatesScreenProps = ScreenProps<
  TabsNavigatorScreenParams,
  TabsNavigatorScreen.RatesScreen
>;

export const RatesScreen = ({}: RatesScreenProps) => {
  const { data, dataUpdatedAt, isPending, error } = useExchangeRates();

  const subtitle = composeExchangeRateDatesString({
    latestCnbRateEffectiveDate: data?.latestCnbRateEffectiveDate,
    dataUpdatedAt,
  });

  const renderContent = ({ entries }: CnbExchangeRatesInfo) => (
    <CurrencyRateContent entries={entries} />
  );

  return (
    <AppScreenLayout
      title={'Exchange Rates'}
      subtitle={subtitle}>
      <AppQueryResolver
        data={data}
        isPending={isPending}
        error={error}
        renderContent={renderContent}
      />
    </AppScreenLayout>
  );
};
