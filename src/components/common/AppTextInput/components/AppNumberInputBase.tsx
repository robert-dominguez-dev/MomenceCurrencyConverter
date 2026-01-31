import styled from 'styled-components/native';
import { memo } from 'react';
import { AppSize } from '../../../../constants/common.ts';
import { categoryConfigMap } from '../../AppText/constants.ts';
import { useAppThemedColors } from '../../../../hooks/useAppThemedColors.ts';
import { normalizeNumberInputText } from '../../../../helpers/normalizeNumberInputText.ts';
import { TextInputProps } from 'react-native';

export type AppNumberInputBaseProps = Pick<
  TextInputProps,
  'value' | 'placeholder' | 'autoFocus'
> & {
  onChange: (text: string) => void;
};

const _AppNumberInputBase = ({
  value,
  onChange,
  placeholder,
  autoFocus,
}: AppNumberInputBaseProps) => {
  const { surface, text, textMuted, border, accent } = useAppThemedColors();

  const onChangeText = (value: string) =>
    onChange(normalizeNumberInputText(value));

  return (
    <InputStyled
      autoFocus={autoFocus}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={textMuted}
      selectionColor={accent}
      cursorColor={accent}
      $bgColor={surface}
      $textColor={text}
      $borderColor={border}
      numberOfLines={1}
      inputMode={'decimal'}
      keyboardType={'decimal-pad'}
      underlineColorAndroid={'transparent'}
      autoCapitalize={'none'}
      textAlign={'right'}
      autoCorrect={false}
    />
  );
};

export const AppNumberInputBase = memo(_AppNumberInputBase);

type InputStyledProps = {
  $bgColor: string;
  $textColor: string;
  $borderColor?: string;
};

const { fontSize, fontWeight, lineHeight, fontFamily, letterSpacing } =
  categoryConfigMap.subtitle;

const InputStyled = styled.TextInput<InputStyledProps>`
  width: 100%;
  height: 56px;
  border-width: 1px;
  padding: 0 ${AppSize.s}px;
  border-radius: ${AppSize.s}px;
  background-color: ${({ $bgColor }) => $bgColor};
  color: ${({ $textColor }) => $textColor};
  border-color: ${({ $borderColor, $bgColor }) => $borderColor ?? $bgColor};
  font-size: ${fontSize}px;
  font-weight: ${fontWeight};
  line-height: ${lineHeight}px;
  font-family: ${fontFamily};
  letter-spacing: ${letterSpacing}px;
`;
