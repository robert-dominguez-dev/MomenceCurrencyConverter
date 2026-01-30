import { ScreenProps } from '../../../types.ts';
import { AppNavigatorScreen, AppNavigatorScreenParams } from '../../types.ts';
import { AppScreenLayout } from '../../../../common/AppScreenLayout/AppScreenLayout.tsx';
import { useExchangeRates } from '../../../../../networking/useExchangeRates/useExchangeRates.ts';
import { AppQueryResolver } from '../../../../common/AppQueryResolver/AppQueryResolver.tsx';
import { CnbCurrencyEntry } from '../../../../../networking/useExchangeRates/types.ts';
import { CurrencyRateContent } from './components/CurrencyRateContent.tsx';

type RatesScreenProps = ScreenProps<
  AppNavigatorScreenParams,
  AppNavigatorScreen.RatesScreen
>;

export const RatesScreen = ({}: RatesScreenProps) => {
  const { data, isPending, error } = useExchangeRates();

  const renderContent = (entries: CnbCurrencyEntry[]) => (
    <CurrencyRateContent entries={entries} />
  );

  return (
    <AppScreenLayout title={'Exchange Rates'}>
      <AppQueryResolver
        data={data}
        isPending={isPending}
        error={error}
        renderContent={renderContent}
      />
    </AppScreenLayout>
  );
};
