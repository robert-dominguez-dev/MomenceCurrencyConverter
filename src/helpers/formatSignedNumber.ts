type FormatNumberOptions = { decimals?: number; suffix?: string };

export const formatSignedNumber = (
  value: number,
  options?: FormatNumberOptions,
): string => {
  const { decimals = 1, suffix = '' }: FormatNumberOptions = options ?? {};

  if (value === 0) {
    return `${value.toFixed(decimals)}${suffix}`;
  }

  const sign: string = value > 0 ? '+' : '-';
  return `${sign}${Math.abs(value).toFixed(decimals)}${suffix}`;
};
