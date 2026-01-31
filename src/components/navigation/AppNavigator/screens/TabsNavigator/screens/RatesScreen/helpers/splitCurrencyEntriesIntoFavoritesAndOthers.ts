import { CnbCurrencyEntry } from '../../../../../../../../networking/useExchangeRates/types.ts';
import { CnbCurrencyCode } from '../../../../../../../../networking/useExchangeRates/constants.ts';

type FavoritesEntriesMapAndOthers = {
  favoritesMap: Partial<Record<CnbCurrencyCode, CnbCurrencyEntry>>;
  others: CnbCurrencyEntry[];
};

type FavoritesAndOthersEntries = Pick<
  FavoritesEntriesMapAndOthers,
  'others'
> & {
  favorites: CnbCurrencyEntry[];
};

export const splitCurrencyEntriesIntoFavoritesAndOthers = (
  entries: CnbCurrencyEntry[],
  favoriteCurrencyCodes: CnbCurrencyCode[],
): FavoritesAndOthersEntries => {
  const { favoritesMap, others } = entries.reduce<FavoritesEntriesMapAndOthers>(
    (acc, entry) => {
      const isFavorite = favoriteCurrencyCodes.includes(entry.currencyCode);

      if (isFavorite) {
        acc.favoritesMap[entry.currencyCode] = entry;
      } else {
        acc.others.push(entry);
      }

      return acc;
    },
    {
      favoritesMap: {},
      others: [],
    },
  );

  /**
   * We want the favorites array to follow the user-defined order (in `favoriteCurrencyCodes`)...
   */
  const favorites = favoriteCurrencyCodes.reduce<CnbCurrencyEntry[]>(
    (acc, currencyCode) => {
      const entry = favoritesMap[currencyCode];

      if (entry) {
        acc.push(entry);
      }

      return acc;
    },
    [],
  );

  return { favorites, others };
};
