import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import { AppSize } from '../../../../constants/common.ts';
import { ChildrenProp } from '../../../../types/common.ts';
import { AppText } from '../../AppText/AppText.tsx';

export type AppScreenHeaderProps = ChildrenProp & {
  headerLeft?: ReactNode;
  headerRight?: ReactNode;
};

export const AppScreenHeader = ({
  children,
  headerLeft,
  headerRight,
}: AppScreenHeaderProps) => (
  <HeaderStyled>
    <HeaderSideStyled>{headerLeft}</HeaderSideStyled>
    <HeaderCenterStyled>
      <AppText
        numberOfLines={1}
        category={'heading'}>
        {children}
      </AppText>
    </HeaderCenterStyled>
    <HeaderSideRightStyled>{headerRight}</HeaderSideRightStyled>
  </HeaderStyled>
);

const HEADER_HEIGHT = AppSize.xxl;
const HEADER_SIDE_MIN_WIDTH = AppSize.xl;

const HeaderStyled = styled.View`
  height: ${HEADER_HEIGHT}px;
  padding: 0 ${AppSize.m}px;
  flex-direction: row;
  align-items: center;
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
