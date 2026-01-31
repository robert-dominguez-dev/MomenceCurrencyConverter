import { memo } from 'react';
import styled from 'styled-components/native';
import { AppSize } from '../../../../../../../../constants/common.ts';
import { CnbCurrencyEntry } from '../../../../../../../../networking/useExchangeRates/types.ts';
import { useFavoriteCurrencyCodes } from '../../../../../../../../contexts/FavoriteCurrencyCodesProvider/FavoriteCurrencyCodesProvider.tsx';
import { splitCurrencyEntriesIntoFavoritesAndOthers } from '../helpers/splitCurrencyEntriesIntoFavoritesAndOthers.ts';
import { CurrencyRateList } from './CurrencyRateList.tsx';

type CurrencyRateContentProps = {
  entries: CnbCurrencyEntry[];
};

const _CurrencyRateContent = ({ entries }: CurrencyRateContentProps) => {
  const { favoriteCurrencyCodes, toggleFavoriteCurrencyCode } =
    useFavoriteCurrencyCodes();

  const { favorites, others } = splitCurrencyEntriesIntoFavoritesAndOthers(
    entries,
    favoriteCurrencyCodes,
  );

  const hasFavorites = !!favorites.length;
  const hasOthers = !!others.length;

  const shouldDisplayListTitles: boolean = hasOthers && hasFavorites;

  const maybeFavoritesTitle: string | undefined = shouldDisplayListTitles
    ? 'Favorites'
    : undefined;
  const maybeOthersTitle: string | undefined = shouldDisplayListTitles
    ? 'Others'
    : undefined;

  return (
    <ContentWrapperStyled>
      {hasFavorites && (
        <CurrencyRateList
          isFavorite
          title={maybeFavoritesTitle}
          entries={favorites}
          onToggleFavorite={toggleFavoriteCurrencyCode}
        />
      )}
      {hasOthers && (
        <CurrencyRateList
          title={maybeOthersTitle}
          entries={others}
          isFavorite={false}
          onToggleFavorite={toggleFavoriteCurrencyCode}
        />
      )}
    </ContentWrapperStyled>
  );
};

export const CurrencyRateContent = memo(_CurrencyRateContent);

const ContentWrapperStyled = styled.View`
  gap: ${AppSize.m}px;
`;
