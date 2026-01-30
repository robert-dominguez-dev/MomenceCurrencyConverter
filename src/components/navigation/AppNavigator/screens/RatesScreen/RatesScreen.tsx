import { ScreenProps } from '../../../types.ts';
import { AppNavigatorScreen, AppNavigatorScreenParams } from '../../types.ts';
import { AppScreenLayout } from '../../../../common/AppScreenLayout/AppScreenLayout.tsx';
import { CurrencyRateItem } from './components/CurrencyRateItem.tsx';

import { getCurrencyRateDeltaInfo } from './helpers/getCurrencyRateDeltaProps.ts';
import { JSX } from 'react';
import styled from 'styled-components/native';
import { AppSize } from '../../../../../constants/common.ts';
import { CnbCurrencyEntry } from '../../../../../networking/useExchangeRates/types.ts';
import { CnbCurrencyCode } from '../../../../../networking/useExchangeRates/constants.ts';

const entries: CnbCurrencyEntry[] = [
  {
    countryName: 'Australia',
    currencyName: 'dollar',
    currencyCode: CnbCurrencyCode.AUD,
    czkRateTrendValues: [
      23.2, 23.234, 22.0, 23.232, 18.323, 20.232, 23.323, 15,
    ],
  },
  {
    countryName: 'USA',
    currencyName: 'dollar',
    currencyCode: CnbCurrencyCode.USD,
    czkRateTrendValues: [
      23.2, 23.234, 22.0, 23.232, 18.323, 20.232, 23.323, 30,
    ],
  },
  {
    countryName: 'Japan',
    currencyName: 'yen',
    currencyCode: CnbCurrencyCode.JPY,
    czkRateTrendValues: [
      23.2, 23.234, 22.0, 23.232, 22.323, 22.232, 23.323, 24,
    ],
  },
];

type RatesScreenProps = ScreenProps<
  AppNavigatorScreenParams,
  AppNavigatorScreen.RatesScreen
>;

export const RatesScreen = ({}: RatesScreenProps) => {
  const favorites: string[] = [CnbCurrencyCode.USD];

  const itemElements = entries.reduce<JSX.Element[]>((acc, entry) => {
    const deltaInfo = getCurrencyRateDeltaInfo(entry.czkRateTrendValues);

    if (deltaInfo) {
      const isFavorite = favorites.includes(entry.currencyCode);
      acc.push(
        <CurrencyRateItem
          key={entry.currencyCode}
          {...entry}
          deltaInfo={deltaInfo}
          isFavorite={isFavorite}
        />,
      );
    }

    return acc;
  }, []);

  return (
    <AppScreenLayout title={'Exchange Rates'}>
      <ListStyled>{itemElements}</ListStyled>
    </AppScreenLayout>
  );
};

const ListStyled = styled.View`
  gap: ${AppSize.s}px;
`;
