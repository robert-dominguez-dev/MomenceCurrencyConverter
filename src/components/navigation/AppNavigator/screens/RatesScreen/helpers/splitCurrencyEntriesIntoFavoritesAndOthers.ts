import { CnbCurrencyEntry } from '../../../../../../networking/useExchangeRates/types.ts';
import { CnbCurrencyCode } from '../../../../../../networking/useExchangeRates/constants.ts';

type FavoritesAndOthersEntries = {
  favorites: CnbCurrencyEntry[];
  others: CnbCurrencyEntry[];
};

export const splitCurrencyEntriesIntoFavoritesAndOthers = (
  entries: CnbCurrencyEntry[],
  favoriteCurrencyCodes: CnbCurrencyCode[],
) =>
  entries.reduce<FavoritesAndOthersEntries>(
    (acc, entry) => {
      const isFavorite = favoriteCurrencyCodes.includes(entry.currencyCode);

      if (isFavorite) {
        acc.favorites.push(entry);
      } else {
        acc.others.push(entry);
      }

      return acc;
    },
    {
      favorites: [],
      others: [],
    },
  );
