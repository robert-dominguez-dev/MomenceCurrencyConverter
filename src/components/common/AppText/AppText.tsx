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
    colorOverride?: string;
  };

export const AppText = ({
  children,
  numberOfLines,
  colorOverride,
  category = 'body',
  status = 'default',
}: AppTextProps) => {
  const color = useTextStatusColor(status);
  const preset = categoryConfigMap[category];
  const colorEvaluated: string = colorOverride || color;

  return (
    <BaseTextStyled
      $color={colorEvaluated}
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
