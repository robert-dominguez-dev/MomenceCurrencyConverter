import { Controller, ControllerProps, FieldPath, FieldValues, } from 'react-hook-form';
import { AppNumberInputBase, AppNumberInputBaseProps, } from './components/AppNumberInputBase.tsx';
import { composeNumberInputRules, ComposeNumberInputRulesParams, } from './helpers/composeNumberInputRules.ts';

type AppNumberInputProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = ComposeNumberInputRulesParams &
  Pick<ControllerProps<TFieldValues, TName>, 'control' | 'name'> &
  Pick<AppNumberInputBaseProps, 'placeholder' | 'autoFocus' | 'accessoryLeft'>;

export const AppNumberInput = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  control,
  name,
  placeholder,
  autoFocus,
  accessoryLeft,
  isRequired,
  min,
  max,
}: AppNumberInputProps<TFieldValues, TName>) => (
  <Controller
    control={control}
    name={name}
    rules={composeNumberInputRules<TFieldValues, TName>({
      isRequired,
      min,
      max,
    })}
    render={({ field: { value, onChange } }) => (
      <AppNumberInputBase
        value={value}
        placeholder={placeholder}
        autoFocus={autoFocus}
        accessoryLeft={accessoryLeft}
        onChange={onChange}
      />
    )}
  />
);
