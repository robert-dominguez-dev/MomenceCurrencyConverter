import {
  CurrencyRateItem,
  CurrencyRateItemProps,
} from './CurrencyRateItem.tsx';

import { getCurrencyRateDeltaInfo } from '../helpers/getCurrencyRateDeltaProps.ts';
import { memo } from 'react';
import styled from 'styled-components/native';
import { AppSize } from '../../../../../../../../constants/common.ts';
import { CnbCurrencyEntry } from '../../../../../../../../networking/useExchangeRates/types.ts';
import { AppText } from '../../../../../../../common/AppText/AppText.tsx';

type CurrencyRateListProps = Pick<
  CurrencyRateItemProps,
  'isFavorite' | 'onToggleFavorite'
> & {
  title: string | undefined;
  entries: CnbCurrencyEntry[];
};

const _CurrencyRateList = ({
  title,
  entries,
  isFavorite,
  onToggleFavorite,
}: CurrencyRateListProps) => {
  const itemElements = entries.map(item => {
    const deltaInfo = getCurrencyRateDeltaInfo(item.czkRateTrendValues);

    if (!deltaInfo) {
      return null;
    }

    return (
      <CurrencyRateItem
        key={item.currencyCode}
        {...item}
        isFavorite={isFavorite}
        deltaInfo={deltaInfo}
        onToggleFavorite={onToggleFavorite}
      />
    );
  });

  return (
    <ListWrapperStyled>
      {!!title && <AppText category={'title'}>{title}</AppText>}
      {itemElements}
    </ListWrapperStyled>
  );
};

export const CurrencyRateList = memo(_CurrencyRateList);

const ListWrapperStyled = styled.View`
  gap: ${AppSize.s}px;
`;
