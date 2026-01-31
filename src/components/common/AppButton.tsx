import React, { JSX } from 'react';
import { Pressable } from 'react-native';
import styled from 'styled-components/native';
import { AppText } from './AppText/AppText.tsx';
import { AppSize } from '../../constants/common.ts';
import { useAppThemedColors } from '../../hooks/useAppThemedColors.ts';

export type AppButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  iconElement?: JSX.Element;
};

export const AppButton = ({
  title,
  onPress,
  iconElement,
  disabled = false,
}: AppButtonProps) => {
  const { surfaceAlt } = useAppThemedColors();

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}>
      {({ pressed }) => (
        <ButtonContentStyled
          $bgColor={surfaceAlt}
          $disabled={disabled}
          $pressed={pressed}>
          <AppText category={'title'}>{title}</AppText>
          {iconElement}
        </ButtonContentStyled>
      )}
    </Pressable>
  );
};

type ButtonContentStyledProps = {
  $disabled: boolean;
  $pressed: boolean;
  $bgColor: string;
};

const ButtonContentStyled = styled.View<ButtonContentStyledProps>`
  flex-direction: row;
  gap: ${AppSize.s}px;
  width: 100%;
  min-height: 56px;
  padding-top: ${AppSize.s}px;
  padding-bottom: ${AppSize.s}px;
  border-radius: ${AppSize.s}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ $bgColor }) => $bgColor};
  opacity: ${({ $disabled, $pressed }) =>
    $disabled ? 0.5 : $pressed ? 0.85 : 1};
`;
