import { ScreenProps } from '../../../types.ts';
import { AppNavigatorScreen, AppNavigatorScreenParams } from '../../types.ts';
import { useAppThemedColors } from '../../../../../hooks/useAppThemedColors.ts';
import { useExchangeRates } from '../../../../../networking/useExchangeRates/useExchangeRates.ts';
import { CnbCurrencyEntry } from '../../../../../networking/useExchangeRates/types.ts';
import { ArrowLeft, ArrowLeftRight } from 'lucide-react-native';
import {
  ICONS_SIZE,
  ICONS_STROKE_WIDTH,
} from '../../../../../constants/common.ts';
import { AppButton } from '../../../../common/AppButton.tsx';
import { AppScreenLayout } from '../../../../common/AppScreenLayout/AppScreenLayout.tsx';
import { AppQueryResolver } from '../../../../common/AppQueryResolver/AppQueryResolver.tsx';
import React from 'react';
import { AppText } from '../../../../common/AppText/AppText.tsx';

type ConverterScreenProps = ScreenProps<
  AppNavigatorScreenParams,
  AppNavigatorScreen.ConverterScreen
>;

export const ConverterScreen = ({ navigation }: ConverterScreenProps) => {
  const { icon } = useAppThemedColors();

  const { data, isPending, error } = useExchangeRates();

  const renderContent = (entries: CnbCurrencyEntry[]) => (
    <AppText>CONVERTER</AppText>
  );

  const handlePress = () => console.log('CALCULATE');

  const headerLeftElement = (
    <ArrowLeft
      color={icon}
      size={ICONS_SIZE}
      strokeWidth={ICONS_STROKE_WIDTH}
      onPress={navigation.goBack}
    />
  );

  const buttonIconElement = (
    <ArrowLeftRight
      color={icon}
      size={ICONS_SIZE}
      strokeWidth={ICONS_STROKE_WIDTH}
    />
  );

  const footerElement = (
    <AppButton
      title={'Convert'}
      onPress={handlePress}
      iconElement={buttonIconElement}
    />
  );

  return (
    <AppScreenLayout
      title={'Converter'}
      headerLeft={headerLeftElement}
      footer={footerElement}
      shouldUseScrollView={false}>
      <AppQueryResolver
        data={data}
        isPending={isPending}
        error={error}
        renderContent={renderContent}
      />
    </AppScreenLayout>
  );
};
