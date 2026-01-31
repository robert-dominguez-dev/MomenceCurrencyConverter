import React from 'react';
import { Control, useWatch } from 'react-hook-form';
import { ConverterFormValues } from '../types.ts';
import styled from 'styled-components/native';
import {
  AppSize,
  ICONS_SIZE,
  ICONS_STROKE_WIDTH,
} from '../../../../../../../../constants/common.ts';
import { currencyCodeToFlagEmojiMap } from '../../../../../../../../networking/useExchangeRates/constants.ts';
import { useRootStackNavigation } from '../../../../../../hooks/useRootStackNavigation.ts';
import {
  AppNavigatorScreen,
  CurrencySelectScreenProps,
} from '../../../../../types.ts';
import { AppText } from '../../../../../../../common/AppText/AppText.tsx';
import { ArrowDown } from 'lucide-react-native';
import { useAppThemedColors } from '../../../../../../../../hooks/useAppThemedColors.ts';

type CurrencySelectProps = Pick<
  CurrencySelectScreenProps,
  'currencyFieldName'
> & {
  control: Control<ConverterFormValues>;
};

export const CurrencySelect = ({
  currencyFieldName,
  control,
}: CurrencySelectProps) => {
  const { icon, surface, text, border } = useAppThemedColors();

  const navigation = useRootStackNavigation();

  const currencyCode = useWatch({ name: currencyFieldName, control });

  const handlePress = () =>
    navigation.navigate(AppNavigatorScreen.CurrencySelectScreen, {
      currencyFieldName,
    });

  return (
    <PressableStyled onPress={handlePress}>
      <CurrencySelectsWrapperStyled
        $bgColor={surface}
        $textColor={text}
        $borderColor={border}>
        <LeftStyled>
          <AppText category={'heading'}>
            {currencyCodeToFlagEmojiMap[currencyCode]}
          </AppText>
          <AppText category={'title'}>{currencyCode}</AppText>
        </LeftStyled>
        <ArrowDown
          color={icon}
          size={ICONS_SIZE}
          strokeWidth={ICONS_STROKE_WIDTH}
        />
      </CurrencySelectsWrapperStyled>
    </PressableStyled>
  );
};

const PressableStyled = styled.Pressable`
  flex: 1;
`;

type CurrencySelectsWrapperStyledProps = {
  $bgColor: string;
  $textColor: string;
  $borderColor?: string;
};

const CurrencySelectsWrapperStyled = styled.View<CurrencySelectsWrapperStyledProps>`
  flex-direction: row;
  gap: ${AppSize.s}px;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  border-width: 1px;
  padding: 0 ${AppSize.s}px;
  border-radius: ${AppSize.s}px;
  background-color: ${({ $bgColor }) => $bgColor};
  color: ${({ $textColor }) => $textColor};
  border-color: ${({ $borderColor, $bgColor }) => $borderColor ?? $bgColor};
`;

const LeftStyled = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${AppSize.m}px;
`;
