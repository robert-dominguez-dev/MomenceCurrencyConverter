import React, { useMemo } from 'react';
import styled from 'styled-components/native';
import { AppSize } from '../../../../../../../../constants/common.ts';
import { ConvertedAmountWithTargetCurrency } from './ConvertedAmountWithTargetCurrency.tsx';
import { CurrencySelectsRow } from './CurrencySelectsRow.tsx';
import { ConverterInput } from './ConverterInput.tsx';
import { composeCurrencyCodeRateMap } from '../helpers/composeCurrencyCodeRateMap.ts';
import { CnbCurrencyEntry } from '../../../../../../../../networking/useExchangeRates/types.ts';

type ConverterFormProps = { entries: CnbCurrencyEntry[] };

export const ConverterForm = ({ entries }: ConverterFormProps) => {
  const currencyCodeRateMap = useMemo(
    () => composeCurrencyCodeRateMap(entries),
    [entries],
  );

  return (
    <FormWrapperStyled>
      <ConvertedAmountWithTargetCurrency
        currencyCodeRateMap={currencyCodeRateMap}
      />
      <ConverterInput currencyCodeRateMap={currencyCodeRateMap} />
      <CurrencySelectsRow />
    </FormWrapperStyled>
  );
};

const FormWrapperStyled = styled.View`
  gap: ${AppSize.m}px;
`;
