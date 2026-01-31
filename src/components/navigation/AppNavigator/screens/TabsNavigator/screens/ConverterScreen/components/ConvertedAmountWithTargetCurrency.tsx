import { AppText } from '../../../../../../../common/AppText/AppText.tsx';
import { useConvertedAmountWithTargetCurrency } from '../hooks/useConvertedAmountWithTargetCurrency.tsx';
import styled from 'styled-components/native';
import { AppSize } from '../../../../../../../../constants/common.ts';
import { CurrencyCodeRateMap } from '../types.ts';

export type ConvertedAmountWithTargetCurrencyProps = {
  currencyCodeRateMap: CurrencyCodeRateMap;
};

export const ConvertedAmountWithTargetCurrency = ({
  currencyCodeRateMap,
}: ConvertedAmountWithTargetCurrencyProps) => {
  const result = useConvertedAmountWithTargetCurrency(currencyCodeRateMap);

  return (
    <ContentWrapperStyled>
      <AppText
        category={'heading'}
        numberOfLines={1}>
        {result}
      </AppText>
    </ContentWrapperStyled>
  );
};

const ContentWrapperStyled = styled.View`
  padding-top: ${AppSize.l}px;
  padding-bottom: ${AppSize.l}px;
  align-items: center;
`;
