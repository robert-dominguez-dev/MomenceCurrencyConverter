import { useAppThemedColors } from '../../../../../../hooks/useAppThemedColors.ts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ViewStyle } from 'react-native';
import { AppSize } from '../../../../../../constants/common.ts';

/**
 * Tab bar height baseline (platform default differs).
 */
const TAB_BAR_HEIGHT_BASELINE = 56;

export const useTabBarStyle = (): ViewStyle => {
  const { surface, border } = useAppThemedColors();

  const { bottom: paddingBottom } = useSafeAreaInsets();

  const paddingTop = AppSize.s;
  const height = TAB_BAR_HEIGHT_BASELINE + paddingTop + paddingBottom;

  return {
    height,
    paddingTop,
    paddingBottom,
    backgroundColor: surface,
    borderTopColor: border,
    borderTopWidth: 1,
  };
};
