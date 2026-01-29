import { AppTheme } from '../constants/common.ts';

const appThemes = new Set<string>(Object.values(AppTheme));

export const checkIsAppTheme = (
  theme: string | undefined | null,
): theme is AppTheme => !!theme && appThemes.has(theme);
