import { CurrencyRateItem } from './CurrencyRateItem.tsx';

import { getCurrencyRateDeltaInfo } from '../helpers/getCurrencyRateDeltaProps.ts';
import { JSX, memo } from 'react';
import styled from 'styled-components/native';
import { AppSize } from '../../../../../../constants/common.ts';
import { CnbCurrencyCode } from '../../../../../../networking/useExchangeRates/constants.ts';
import { CnbCurrencyEntry } from '../../../../../../networking/useExchangeRates/types.ts';

type CurrencyRateListProps = {
  entries: CnbCurrencyEntry[];
};

const _CurrencyRateList = ({ entries }: CurrencyRateListProps) => {
  const favorites: string[] = [CnbCurrencyCode.USD];

  const itemElements = entries.reduce<JSX.Element[]>((acc, entry) => {
    const deltaInfo = getCurrencyRateDeltaInfo(entry.czkRateTrendValues);

    if (deltaInfo) {
      const isFavorite = favorites.includes(entry.currencyCode);
      acc.push(
        <CurrencyRateItem
          key={entry.currencyCode}
          {...entry}
          deltaInfo={deltaInfo}
          isFavorite={isFavorite}
        />,
      );
    }

    return acc;
  }, []);

  return <ListStyled>{itemElements}</ListStyled>;
};

export const CurrencyRateList = memo(_CurrencyRateList);

const ListStyled = styled.View`
  gap: ${AppSize.s}px;
`;
