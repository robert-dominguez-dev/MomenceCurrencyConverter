import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import { AppSize } from '../../../../constants/common.ts';
import { AppText } from '../../AppText/AppText.tsx';
import { useAppThemedColors } from '../../../../hooks/useAppThemedColors.ts';

export type AppScreenHeaderProps = {
  title: string;
  subtitle?: string;
  headerLeft?: ReactNode;
  headerRight?: ReactNode;
};

export const AppScreenHeader = ({
  title,
  subtitle,
  headerLeft,
  headerRight,
}: AppScreenHeaderProps) => {
  const { border } = useAppThemedColors();
  return (
    <HeaderStyled $borderColor={border}>
      <HeaderContentStyled>
        <HeaderSideStyled>{headerLeft}</HeaderSideStyled>
        <HeaderCenterStyled>
          <AppText
            numberOfLines={1}
            category={'heading'}>
            {title}
          </AppText>
        </HeaderCenterStyled>
        <HeaderSideRightStyled>{headerRight}</HeaderSideRightStyled>
      </HeaderContentStyled>
      {!!subtitle && (
        <AppText
          numberOfLines={1}
          category={'caption'}
          status={'muted'}>
          {subtitle}
        </AppText>
      )}
    </HeaderStyled>
  );
};

const HEADER_SIDE_MIN_WIDTH = AppSize.xl;

type HeaderStyledProps = {
  $borderColor: string;
};

const HeaderStyled = styled.View<HeaderStyledProps>`
  align-items: center;
  padding-bottom: ${AppSize.m}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ $borderColor }) => $borderColor};
`;

const HeaderContentStyled = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderSideStyled = styled.View`
  min-width: ${HEADER_SIDE_MIN_WIDTH}px;
  align-items: flex-start;
  justify-content: center;
`;

const HeaderSideRightStyled = styled.View`
  min-width: ${HEADER_SIDE_MIN_WIDTH}px;
  align-items: flex-end;
  justify-content: center;
`;

const HeaderCenterStyled = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 ${AppSize.s}px;
`;
