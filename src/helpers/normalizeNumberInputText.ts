import { prependZeroIfStartsWithDot } from './prependZeroIfStartsWithDot.ts';
import { DOT } from '../constants/common.ts';

const ONLY_DIGITS_AND_DECIMAL_SEPARATORS_REGEXP: RegExp = /[^\d.,]/g;
const COMMA_OR_DOT_REGEXP: RegExp = /[,.]/;
const ZEROES_BEFORE_OTHER_DIGIT_REGEXP: RegExp = /^0+(?=\d)/;
const INDEX_OF_SECOND_PART = 1;

export const normalizeNumberInputText = (text: string): string => {
  const sanitized = text.replace(ONLY_DIGITS_AND_DECIMAL_SEPARATORS_REGEXP, '');
  const parts = sanitized.split(COMMA_OR_DOT_REGEXP);

  const beforeDecimalPart = parts[0];
  const beforeDecimal = beforeDecimalPart.replace(
    ZEROES_BEFORE_OTHER_DIGIT_REGEXP,
    '',
  );

  const afterDecimalParts = parts.slice(INDEX_OF_SECOND_PART);
  const afterDecimal = afterDecimalParts.length
    ? DOT + afterDecimalParts.join('')
    : '';

  const decimalNumber = beforeDecimal + afterDecimal;

  return prependZeroIfStartsWithDot(decimalNumber);
};
