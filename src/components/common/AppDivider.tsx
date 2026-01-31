import React from 'react';
import styled from 'styled-components/native';
import { useAppThemedColors } from '../../hooks/useAppThemedColors.ts';

export const AppDivider = () => {
  const { border } = useAppThemedColors();
  return <DividerStyled $color={border} />;
};

type DividerStyledProps = { $color: string };

const DividerStyled = styled.View<DividerStyledProps>`
  height: 1px;
  background-color: ${({ $color }) => $color};
`;
