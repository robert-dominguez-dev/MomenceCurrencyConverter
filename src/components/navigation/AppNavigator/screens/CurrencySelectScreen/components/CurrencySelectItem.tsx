import React, { memo } from 'react';
import styled from 'styled-components/native';
import { CnbCurrencyEntry } from '../../../../../../networking/useExchangeRates/types.ts';
import { useAppThemedColors } from '../../../../../../hooks/useAppThemedColors.ts';
import { AppSize } from '../../../../../../constants/common.ts';
import { AppText } from '../../../../../common/AppText/AppText.tsx';
import {
  CnbCurrencyCode,
  currencyCodeToFlagEmojiMap,
} from '../../../../../../networking/useExchangeRates/constants.ts';

export type CurrencySelectItemProps = CnbCurrencyEntry & {
  onPress: (currencyCode: CnbCurrencyCode) => void;
};

const _CurrencySelectItem = ({
  currencyCode,
  currencyName,
  countryName,
  onPress,
}: CurrencySelectItemProps) => {
  const { surface, border } = useAppThemedColors();

  const flagEmoji = currencyCodeToFlagEmojiMap[currencyCode];

  const handlePress = () => onPress(currencyCode);

  return (
    <ItemWrapperStyled
      onPress={handlePress}
      $bgColor={surface}
      $borderColor={border}>
      <LeftStyled>
        <FlagWrapperStyled>
          <AppText category={'heading'}>{flagEmoji}</AppText>
        </FlagWrapperStyled>
        <AppText
          category={'subtitle'}
          status={'default'}>
          {currencyCode}
        </AppText>
      </LeftStyled>
      <AppText
        category={'caption'}
        status={'muted'}>
        {countryName} | {currencyName}
      </AppText>
    </ItemWrapperStyled>
  );
};

export const CurrencySelectItem = memo(_CurrencySelectItem);

type ItemWrapperStyledProps = { $bgColor: string; $borderColor: string };

const ItemWrapperStyled = styled.Pressable<ItemWrapperStyledProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${AppSize.m}px;
  padding-top: ${AppSize.s}px;
  padding-bottom: ${AppSize.s}px;
`;

const LeftStyled = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${AppSize.m}px;
`;

const FlagWrapperStyled = styled.View`
  width: ${AppSize.l}px;
  align-items: center;
  justify-content: center;
`;
