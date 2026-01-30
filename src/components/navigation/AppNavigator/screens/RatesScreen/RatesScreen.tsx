import { ScreenProps } from '../../../types.ts';
import { Text } from 'react-native';
import { AppNavigatorScreen, AppNavigatorScreenParams } from '../../types.ts';
import { AppScreenLayout } from '../../../../common/AppScreenLayout/AppScreenLayout.tsx';
import { CurrencyRateItem } from './components/CurrencyRateItem.tsx';
import { CnbCurrencyEntry } from '../../../../../networking/exchange-rates/types.ts';
import {
  CnbCountryName,
  CnbCurrencyCode,
} from '../../../../../networking/exchange-rates/constants.ts';
import { getCurrencyRateDeltaInfo } from './helpers/getCurrencyRateDeltaProps.ts';

const mock: CnbCurrencyEntry = {
  countryName: CnbCountryName.Australia,
  currencyName: 'dollar',
  currencyCode: CnbCurrencyCode.AUD,
  czkRateTrendValues: [23.2, 23.234, 22.0, 23.232],
};

type RatesScreenProps = ScreenProps<
  AppNavigatorScreenParams,
  AppNavigatorScreen.RatesScreen
>;

export const RatesScreen = ({}: RatesScreenProps) => {
  const footerElement = <Text>Footer</Text>;

  const deltaInfo = getCurrencyRateDeltaInfo(mock.czkRateTrendValues);
  return (
    <AppScreenLayout
      title={'Exchange Rates'}
      footer={footerElement}>
      {deltaInfo && (
        <CurrencyRateItem
          {...mock}
          deltaInfo={deltaInfo}
        />
      )}
    </AppScreenLayout>
  );
};
