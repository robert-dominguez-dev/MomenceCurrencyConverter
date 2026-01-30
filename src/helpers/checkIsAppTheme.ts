import { AppTheme } from '../constants/common.ts';
import { checkIsEnumMember } from './checkIsEnumMember.ts';

export const checkIsAppTheme = (theme: string | undefined | null) =>
  checkIsEnumMember(AppTheme, theme);
