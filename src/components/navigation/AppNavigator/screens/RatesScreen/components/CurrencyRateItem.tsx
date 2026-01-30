import React, { memo } from 'react';
import styled from 'styled-components/native';
import { useAppThemedColors } from '../../../../../../hooks/useAppThemedColors.ts';
import { CurrencyRateDeltaInfo } from '../helpers/getCurrencyRateDeltaProps.ts';
import { formatNumber } from '../../../../../../helpers/formatNumber.ts';
import { AppSize, DASH } from '../../../../../../constants/common.ts';
import { HexColor } from '../../../../../../constants/colors.ts';
import { CurrencyItemChart } from './CurrencyItemChart.tsx';
import { AppText } from '../../../../../common/AppText/AppText.tsx';
import { CnbCurrencyEntry } from '../../../../../../networking/exchange-rates/types.ts';
import { cnbCountryNameToFlagEmojiMap } from '../../../../../../networking/exchange-rates/constants.ts';
import { AppTextStatus } from '../../../../../common/AppText/types.ts';
import { View } from 'react-native';

type CurrencyRateItemProps = CnbCurrencyEntry & {
  deltaInfo: CurrencyRateDeltaInfo;
  onPress?: () => void;
};

const _CurrencyRateItem = ({
  currencyCode,
  countryName,
  currencyName,
  czkRateTrendValues,
  onPress,
  deltaInfo: { last: currentCzkRate, delta, deltaPercents, isBullish },
}: CurrencyRateItemProps) => {
  const { surface, border, accent, danger } = useAppThemedColors();

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

  const flagEmoji = cnbCountryNameToFlagEmojiMap[countryName];

  return (
    <ItemWrapperStyled
      onPress={onPress}
      $bgColor={surface}
      $borderColor={border}>
      <LeftStyled>
        <FlagWrapStyled>
          <AppText category={'heading'}>{flagEmoji}</AppText>
        </FlagWrapStyled>
        <View>
          <AppText
            category={'subtitle'}
            status={'default'}>
            {currencyCode}
          </AppText>
          <AppText
            category={'caption'}
            status={'muted'}>
            {countryName}
          </AppText>
          <AppText
            category={'caption'}
            status={'muted'}>
            ({currencyName})
          </AppText>
        </View>
      </LeftStyled>
      <CurrencyItemChart
        czkRateTrendValues={czkRateTrendValues}
        trendColor={trendColor}
      />
      <RightStyled>
        <AppText category={'subtitle'}>{currentCzkRateFormatted}</AppText>
        <AppText
          status={trendTextStatus}
          category={'caption'}>
          {deltaFormatted} ({deltaPercentsFormatted})
        </AppText>
      </RightStyled>
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
  flex: 1;
  flex-grow: 0;
  flex-direction: row;
  align-items: center;
  gap: ${AppSize.m}px;
`;

const FlagWrapStyled = styled.View`
  width: ${AppSize.l}px;
  align-items: center;
  justify-content: center;
`;

const RightStyled = styled.View`
  align-items: flex-end;
  justify-content: center;
`;
