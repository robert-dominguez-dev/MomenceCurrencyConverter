import React from 'react';
import styled from 'styled-components/native';
import { ChildrenProp } from '../../../types/common.ts';
import { AppTextCategory, AppTextConfig, AppTextStatus } from './types.ts';
import { categoryConfigMap } from './constants.ts';
import { useTextStatusColor } from './hooks/useTextStatusColor.ts';
import { TextProps } from 'react-native';

type AppTextProps = ChildrenProp &
  Pick<TextProps, 'numberOfLines'> & {
    status?: AppTextStatus;
    category?: AppTextCategory;
  };

export const AppText = ({
  children,
  numberOfLines,
  category = 'body',
  status = 'default',
}: AppTextProps) => {
  const color = useTextStatusColor(status);
  const preset = categoryConfigMap[category];

  return (
    <BaseTextStyled
      $color={color}
      $preset={preset}
      numberOfLines={numberOfLines}>
      {children}
    </BaseTextStyled>
  );
};

type BaseTextStyledProps = { $color: string; $preset: AppTextConfig };

const BaseTextStyled = styled.Text<BaseTextStyledProps>`
  color: ${({ $color }) => $color};
  font-size: ${({ $preset }) => $preset.fontSize}px;
  font-weight: ${({ $preset }) => $preset.fontWeight};
  line-height: ${({ $preset }) => $preset.lineHeight}px;
  font-family: ${({ $preset }) => $preset.fontFamily};
  letter-spacing: ${({ $preset }) => $preset.letterSpacing}px;
`;
