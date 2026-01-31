import { AppTextStatus } from '../types.ts';
import { useAppThemedColors } from '../../../../hooks/useAppThemedColors.ts';

export const useTextStatusColor = (status: AppTextStatus) => {
  const { text, textMuted, accent, danger } = useAppThemedColors();

  const textStatusColorMap: Record<AppTextStatus, string> = {
    default: text,
    muted: textMuted,
    success: accent,
    danger,
  };

  return textStatusColorMap[status];
};
