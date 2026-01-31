import {
  AppButton,
  AppButtonProps,
} from '../../../../../../../common/AppButton.tsx';
import { ArrowLeftRight } from 'lucide-react-native';
import {
  ICONS_SIZE,
  ICONS_STROKE_WIDTH,
} from '../../../../../../../../constants/common.ts';
import React from 'react';
import { useAppThemedColors } from '../../../../../../../../hooks/useAppThemedColors.ts';

type RatesScreenFooterProps = Pick<AppButtonProps, 'onPress'>;

export const RatesScreenFooter = ({ onPress }: RatesScreenFooterProps) => {
  const { icon } = useAppThemedColors();

  const buttonIconElement = (
    <ArrowLeftRight
      color={icon}
      size={ICONS_SIZE}
      strokeWidth={ICONS_STROKE_WIDTH}
    />
  );

  return (
    <AppButton
      title={'Converter'}
      onPress={onPress}
      iconElement={buttonIconElement}
    />
  );
};
