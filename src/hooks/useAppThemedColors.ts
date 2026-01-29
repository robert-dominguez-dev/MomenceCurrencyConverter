import { AppTheme } from '../constants/common.ts';
import {
  AppColors,
  appColorsDark,
  appColorsLight,
} from '../constants/colors.ts';
import { useAppTheme } from '../contexts/AppThemeProvider.tsx';

const appColors: Record<AppTheme, AppColors> = {
  [AppTheme.light]: appColorsLight,
  [AppTheme.dark]: appColorsDark,
};

export const useAppThemedColors = () => {
  const { theme } = useAppTheme();
  return appColors[theme];
};
