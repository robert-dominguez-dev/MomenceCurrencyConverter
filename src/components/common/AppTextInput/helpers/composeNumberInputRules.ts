import { FieldPath, FieldValues, RegisterOptions } from 'react-hook-form';
import { checkIsValidNumber } from '../../../../helpers/checkIsValidNumber.ts';
import { getNumber } from '../../../../helpers/getNumber.ts';

export type ComposeNumberInputRulesParams = {
  min?: number;
  max?: number;
  isRequired?: boolean;
};

export const composeNumberInputRules = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  min,
  max,
  isRequired,
}: ComposeNumberInputRulesParams): RegisterOptions<TFieldValues, TName> => ({
  required: isRequired && 'This field is required.',
  validate: value => {
    /**
     * `Infinity` represents invalid number here...
     */
    const numberValue = getNumber(value, Infinity);

    if (!checkIsValidNumber(numberValue)) {
      return 'Entered number is invalid.';
    }

    if (checkIsValidNumber(min) && numberValue < min) {
      return `Min value is ${min}.`;
    }
    if (checkIsValidNumber(max) && numberValue > max) {
      return `Max value is ${max}.`;
    }

    return true;
  },
});
