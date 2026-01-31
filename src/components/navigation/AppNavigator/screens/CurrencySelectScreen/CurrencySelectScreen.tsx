import { AppScreenLayout } from '../../../../common/AppScreenLayout/AppScreenLayout.tsx';
import { XIcon } from 'lucide-react-native';
import {
  AppSize,
  ICONS_SIZE,
  ICONS_STROKE_WIDTH,
} from '../../../../../constants/common.ts';
import { ScreenProps } from '../../../types.ts';
import { AppNavigatorScreen, AppNavigatorScreenParams } from '../../types.ts';
import { useAppThemedColors } from '../../../../../hooks/useAppThemedColors.ts';
import { AppQueryResolver } from '../../../../common/AppQueryResolver/AppQueryResolver.tsx';
import React from 'react';
import { useExchangeRates } from '../../../../../networking/useExchangeRates/useExchangeRates.ts';
import {
  CnbCurrencyEntry,
  CnbExchangeRatesInfo,
} from '../../../../../networking/useExchangeRates/types.ts';
import { CnbCurrencyCode } from '../../../../../networking/useExchangeRates/constants.ts';
import { ViewStyle } from 'react-native';
import { useFormContext } from 'react-hook-form';
import { ConverterFormValues } from '../TabsNavigator/screens/ConverterScreen/types.ts';
import { CurrencySelectItemList } from './components/CurrencySelectItemList.tsx';
import { czkCurrencyEntry } from './constants.ts';

const contentContainerStyle: ViewStyle = { paddingBottom: AppSize.m };

type CurrencySelectScreenProps = ScreenProps<
  AppNavigatorScreenParams,
  AppNavigatorScreen.CurrencySelectScreen
>;

export const CurrencySelectScreen = ({
  navigation,
  route: {
    params: { currencyFieldName },
  },
}: CurrencySelectScreenProps) => {
  const { data, isPending, error } = useExchangeRates();

  const { setValue, control } = useFormContext<ConverterFormValues>();

  const handleSelect = (currencyCode: CnbCurrencyCode) => {
    setValue(currencyFieldName, currencyCode);
    navigation.goBack();
  };

  const { icon } = useAppThemedColors();

  const headerLeftElement = (
    <XIcon
      color={icon}
      size={ICONS_SIZE}
      strokeWidth={ICONS_STROKE_WIDTH}
      onPress={navigation.goBack}
    />
  );

  const renderContent = ({ entries }: CnbExchangeRatesInfo) => {
    /**
     * We manually add the CZK currency entry,
     * since it is not included in the API response...
     */
    const entriesWithCzk: CnbCurrencyEntry[] = [czkCurrencyEntry, ...entries];
    return (
      <CurrencySelectItemList
        control={control}
        entries={entriesWithCzk}
        onSelect={handleSelect}
      />
    );
  };

  return (
    <AppScreenLayout
      title={'Currency list'}
      headerLeft={headerLeftElement}
      paddingTopOverride={AppSize.m}
      shouldUseScrollView={false}
      contentContainerStyle={contentContainerStyle}>
      <AppQueryResolver
        data={data}
        isPending={isPending}
        error={error}
        renderContent={renderContent}
      />
    </AppScreenLayout>
  );
};
