import { AppTextCategory, AppTextConfig } from './types.ts';
import { AppSize } from '../../../constants/common.ts';

enum AppFontFamily {
  QuicksandRegular = 'Quicksand-Regular',
  QuicksandMedium = 'Quicksand-Medium',
  QuicksandSemiBold = 'Quicksand-SemiBold',
  QuicksandBold = 'Quicksand-Bold',
}

export const categoryConfigMap: Record<AppTextCategory, AppTextConfig> = {
  heading: {
    fontFamily: AppFontFamily.QuicksandBold,
    fontSize: AppSize.l,
    fontWeight: 800,
    lineHeight: AppSize.xl,
    letterSpacing: 0.2,
  },
  title: {
    fontFamily: AppFontFamily.QuicksandSemiBold,
    fontSize: AppSize.ml,
    fontWeight: 700,
    lineHeight: AppSize.l,
    letterSpacing: 0.1,
  },
  subtitle: {
    fontFamily: AppFontFamily.QuicksandSemiBold,
    fontSize: 20,
    fontWeight: 600,
    lineHeight: AppSize.ml,
    letterSpacing: 0.1,
  },
  body: {
    fontFamily: AppFontFamily.QuicksandRegular,
    fontSize: AppSize.m,
    fontWeight: 500,
    lineHeight: AppSize.ml,
    letterSpacing: 0,
  },
  caption: {
    fontFamily: AppFontFamily.QuicksandMedium,
    fontSize: 12,
    fontWeight: 600,
    lineHeight: AppSize.m,
    letterSpacing: 0,
  },
};
