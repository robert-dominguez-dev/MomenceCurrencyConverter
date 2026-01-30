import React from 'react';
import { AppText } from './AppText/AppText.tsx';
import styled from 'styled-components/native';
import { ChildrenProp } from '../../types/common.ts';

export const AppScreenView = ({ children }: ChildrenProp) => (
  <WrapperStyled>
    <AppText category={'title'}>{children}</AppText>
  </WrapperStyled>
);

const WrapperStyled = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
