import { ScreenProps } from '../../../types.ts';
import { AppNavigatorScreen, AppNavigatorScreenParams } from '../../types.ts';
import { AppScreenLayout } from '../../../../common/AppScreenLayout/AppScreenLayout.tsx';
import { useExchangeRates } from '../../../../../networking/useExchangeRates/useExchangeRates.ts';
import { AppQueryResolver } from '../../../../common/AppQueryResolver/AppQueryResolver.tsx';
import { CnbExchangeRatesInfo } from '../../../../../networking/useExchangeRates/types.ts';
import { CurrencyRateContent } from './components/CurrencyRateContent.tsx';
import React from 'react';
import { RatesScreenFooter } from './components/RatesScreenFooter.tsx';
import { AppThemeToggleButton } from '../../../../common/AppThemeToggleButton.tsx';
import { composeExchangeRateDatesString } from './helpers/composeExchangeRateDatesString.ts';

const headerRightElement = <AppThemeToggleButton />;

type RatesScreenProps = ScreenProps<
  AppNavigatorScreenParams,
  AppNavigatorScreen.RatesScreen
>;

export const RatesScreen = ({ navigation }: RatesScreenProps) => {
  const { data, dataUpdatedAt, isPending, error } = useExchangeRates();

  const subtitle = composeExchangeRateDatesString({
    latestCnbRateEffectiveDate: data?.latestCnbRateEffectiveDate,
    dataUpdatedAt,
  });

  const renderContent = ({ entries }: CnbExchangeRatesInfo) => (
    <CurrencyRateContent entries={entries} />
  );

  const handleButtonPress = () =>
    navigation.navigate(AppNavigatorScreen.ConverterScreen);

  const footerElement = <RatesScreenFooter onPress={handleButtonPress} />;

  return (
    <AppScreenLayout
      title={'Exchange Rates'}
      subtitle={subtitle}
      headerRight={headerRightElement}
      footer={footerElement}>
      <AppQueryResolver
        data={data}
        isPending={isPending}
        error={error}
        renderContent={renderContent}
      />
    </AppScreenLayout>
  );
};
