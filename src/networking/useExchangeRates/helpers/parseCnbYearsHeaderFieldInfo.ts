import { getNumber } from '../../../helpers/getNumber.ts';
import { CnbCurrencyCode } from '../constants.ts';
import { checkIsCnbCurrencyCode } from '../../../helpers/checkIsCnbCurrencyCode.ts';
import { EMPTY_SPACES_REGEXP } from '../../../constants/common.ts';

type CnbYearsHeaderFieldInfo = {
  currencyCode: CnbCurrencyCode;
  unitsPerCzkRate: number;
};

export const parseCnbYearsHeaderFieldInfo = (
  headerField: string,
): CnbYearsHeaderFieldInfo | undefined => {
  const [unitsPerCzkRateString, currencyCode] = headerField
    .trim()
    .split(EMPTY_SPACES_REGEXP);

  const isCnbCurrencyCode = checkIsCnbCurrencyCode(currencyCode);

  if (!isCnbCurrencyCode) {
    return undefined;
  }

  return {
    currencyCode,
    unitsPerCzkRate: getNumber(unitsPerCzkRateString),
  };
};
