import React from 'react';
import styled from 'styled-components/native';
import { AppSize } from '../../../../constants/common.ts';
import { useAppThemedColors } from '../../../../hooks/useAppThemedColors.ts';
import { ChildrenProp } from '../../../../types/common.ts';

export const AppScreenFooterWrapper = ({ children }: ChildrenProp) => {
  const { border } = useAppThemedColors();
  return (
    <FooterWrapperStyled $borderColor={border}>{children}</FooterWrapperStyled>
  );
};

type FooterWrapperStyledProps = { $borderColor: string };

const FooterWrapperStyled = styled.View<FooterWrapperStyledProps>`
  padding-top: ${AppSize.m}px;
  padding-bottom: ${AppSize.m}px;
  border-top-width: 1px;
  border-top-color: ${({ $borderColor }) => $borderColor};
`;
