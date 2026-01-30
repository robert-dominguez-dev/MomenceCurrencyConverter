type FormatNumberOptions = {
  decimals?: number;
  suffix?: string;
  signed?: boolean;
};

export const formatNumber = (
  value: number,
  options?: FormatNumberOptions,
): string => {
  const {
    decimals = 1,
    suffix = '',
    signed,
  }: FormatNumberOptions = options ?? {};

  if (value === 0 || !signed) {
    return `${value.toFixed(decimals)}${suffix}`;
  }

  const sign: string = value > 0 ? '+' : '-';
  return `${sign}${Math.abs(value).toFixed(decimals)}${suffix}`;
};
