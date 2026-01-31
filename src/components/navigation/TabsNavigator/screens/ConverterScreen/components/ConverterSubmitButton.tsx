import { AppButton } from '../../../../../common/AppButton.tsx';
import React, { memo } from 'react';
import { Control, UseFormHandleSubmit, useFormState } from 'react-hook-form';
import { ConverterFormValues } from '../types.ts';

type ConverterSubmitButtonProps = {
  control: Control<ConverterFormValues>;
  handleSubmit: UseFormHandleSubmit<ConverterFormValues>;
};

const _ConverterSubmitButton = ({
  control,
  handleSubmit,
}: ConverterSubmitButtonProps) => {
  const { isValid } = useFormState<ConverterFormValues>({ control });

  const handleSubmissionValid = ({ fromAmount }: ConverterFormValues) =>
    console.log(fromAmount);

  const handlePress = handleSubmit(handleSubmissionValid);

  return (
    <AppButton
      title={'Convert'}
      onPress={handlePress}
      disabled={!isValid}
    />
  );
};

export const ConverterSubmitButton = memo(_ConverterSubmitButton);
