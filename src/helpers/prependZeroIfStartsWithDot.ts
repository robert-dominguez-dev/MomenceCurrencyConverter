import { DOT } from '../constants/common.ts';

export const prependZeroIfStartsWithDot = (text: string) => {
  const indexOfDot = text.indexOf(DOT);
  const startsWithDecimalSign = indexOfDot === 0;

  if (startsWithDecimalSign) {
    return ['0', text].join('');
  }

  return text;
};
