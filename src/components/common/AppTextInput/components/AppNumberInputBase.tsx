import styled from 'styled-components/native';
import { JSX, memo } from 'react';
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
  accessoryLeft?: JSX.Element;
};

const _AppNumberInputBase = ({
  value,
  onChange,
  placeholder,
  autoFocus,
  accessoryLeft,
}: AppNumberInputBaseProps) => {
  const { surface, text, textMuted, border, accent } = useAppThemedColors();

  const onChangeText = (nextValue: string) =>
    onChange(normalizeNumberInputText(nextValue));

  return (
    <WrapperStyled
      $bgColor={surface}
      $borderColor={border}>
      {!!accessoryLeft && <LeftStyled>{accessoryLeft}</LeftStyled>}
      <InputStyled
        $textColor={text}
        autoFocus={autoFocus}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={textMuted}
        selectionColor={accent}
        cursorColor={accent}
        numberOfLines={1}
        inputMode={'decimal'}
        keyboardType={'decimal-pad'}
        underlineColorAndroid={'transparent'}
        autoCapitalize={'none'}
        textAlign={'right'}
        autoCorrect={false}
      />
    </WrapperStyled>
  );
};

export const AppNumberInputBase = memo(_AppNumberInputBase);

type WrapperStyledProps = {
  $bgColor: string;
  $borderColor: string;
};

const WrapperStyled = styled.View<WrapperStyledProps>`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 56px;
  border-width: 1px;
  border-radius: ${AppSize.s}px;
  padding: 0 ${AppSize.s}px;
  background-color: ${({ $bgColor }) => $bgColor};
  border-color: ${({ $borderColor }) => $borderColor};
`;

const LeftStyled = styled.View`
  padding-right: ${AppSize.s}px;
`;

type InputStyledProps = {
  $textColor: string;
};

const { fontSize, fontWeight, lineHeight, fontFamily, letterSpacing } =
  categoryConfigMap.subtitle;

const InputStyled = styled.TextInput<InputStyledProps>`
  flex: 1;
  height: 100%;
  color: ${({ $textColor }) => $textColor};
  font-size: ${fontSize}px;
  font-weight: ${fontWeight};
  line-height: ${lineHeight}px;
  font-family: ${fontFamily};
  letter-spacing: ${letterSpacing}px;
`;
