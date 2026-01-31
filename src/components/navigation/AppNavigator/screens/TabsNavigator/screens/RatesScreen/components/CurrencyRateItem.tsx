import React, { memo } from 'react';
import styled from 'styled-components/native';
import { useAppThemedColors } from '../../../../../../../../hooks/useAppThemedColors.ts';
import { CurrencyRateDeltaInfo } from '../helpers/getCurrencyRateDeltaProps.ts';
import { formatNumber } from '../../../../../../../../helpers/formatNumber.ts';
import {
  AppSize,
  DASH,
  ICONS_SIZE,
  ICONS_STROKE_WIDTH,
} from '../../../../../../../../constants/common.ts';
import { HexColor } from '../../../../../../../../constants/colors.ts';
import { CurrencyItemChart } from './CurrencyItemChart.tsx';
import { AppText } from '../../../../../../../common/AppText/AppText.tsx';

import { AppTextStatus } from '../../../../../../../common/AppText/types.ts';
import { LucideIcon, Star, StarOff } from 'lucide-react-native';
import { CnbCurrencyEntry } from '../../../../../../../../networking/useExchangeRates/types.ts';
import {
  CnbCurrencyCode,
  currencyCodeToFlagEmojiMap,
} from '../../../../../../../../networking/useExchangeRates/constants.ts';
import { View } from 'react-native';

export type CurrencyRateItemProps = CnbCurrencyEntry & {
  deltaInfo: CurrencyRateDeltaInfo;
  isFavorite: boolean;
  onToggleFavorite: (currencyCode: CnbCurrencyCode) => void;
  onPress?: () => void;
};

const _CurrencyRateItem = ({
  currencyCode,
  currencyName,
  czkRateTrendValues,
  isFavorite,
  onPress,
  onToggleFavorite,
  deltaInfo: {
    last: currentCzkRate,
    delta,
    deltaPercents,
    isBullish,
    minValue,
    maxValue,
  },
}: CurrencyRateItemProps) => {
  const { surface, border, accent, danger, icon } = useAppThemedColors();

  const trendColor: HexColor = isBullish ? accent : danger;
  const trendTextStatus: AppTextStatus = isBullish ? 'success' : 'danger';

  const deltaFormatted: string = deltaPercents
    ? formatNumber(delta, { decimals: 3, suffix: ' CZK', signed: true })
    : DASH;

  const deltaPercentsFormatted: string = deltaPercents
    ? formatNumber(deltaPercents, { suffix: '%', signed: true })
    : DASH;

  const currentCzkRateFormatted = formatNumber(currentCzkRate, {
    decimals: 3,
    suffix: ' CZK',
  });

  const flagEmoji = currencyCodeToFlagEmojiMap[currencyCode];

  const FavoriteIcon: LucideIcon = isFavorite ? StarOff : Star;

  const handleFavoriteIconPress = () => onToggleFavorite(currencyCode);

  return (
    <ItemWrapperStyled
      onPress={onPress}
      $bgColor={surface}
      $borderColor={border}>
      <LeftStyled>
        <FlagWrapperStyled>
          <AppText category={'heading'}>{flagEmoji}</AppText>
        </FlagWrapperStyled>
        <View>
          <AppText
            category={'subtitle'}
            status={'default'}>
            {currencyCode}
          </AppText>
          <AppText
            category={'caption'}
            status={'muted'}>
            {currencyName}
          </AppText>
        </View>
      </LeftStyled>
      <CurrencyItemChart
        czkRateTrendValues={czkRateTrendValues}
        trendColor={trendColor}
        minValue={minValue}
        maxValue={maxValue}
      />
      <RightStyled>
        <AppText category={'subtitle'}>{currentCzkRateFormatted}</AppText>
        <AppText
          status={trendTextStatus}
          category={'caption'}>
          {deltaFormatted} ({deltaPercentsFormatted})
        </AppText>
      </RightStyled>
      <FavoriteIcon
        onPress={handleFavoriteIconPress}
        color={icon}
        size={ICONS_SIZE}
        strokeWidth={ICONS_STROKE_WIDTH}
      />
    </ItemWrapperStyled>
  );
};

export const CurrencyRateItem = memo(_CurrencyRateItem);

type ItemWrapperStyledProps = { $bgColor: string; $borderColor: string };

const ItemWrapperStyled = styled.Pressable<ItemWrapperStyledProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${AppSize.m}px;
  padding-left: ${AppSize.m}px;
  padding-right: ${AppSize.m}px;
  padding-top: ${AppSize.s}px;
  padding-bottom: ${AppSize.s}px;
  border-radius: ${AppSize.s}px;
  border-width: 1px;
  border-color: ${({ $borderColor }) => $borderColor};
  background-color: ${({ $bgColor }) => $bgColor};
`;

const LeftStyled = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${AppSize.m}px;
`;

const FlagWrapperStyled = styled.View`
  width: ${AppSize.l}px;
  align-items: center;
  justify-content: center;
`;

const RightStyled = styled.View`
  align-items: flex-end;
  justify-content: center;
`;
