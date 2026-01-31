import { splitCurrencyEntriesIntoFavoritesAndOthers } from './splitCurrencyEntriesIntoFavoritesAndOthers.ts';
import { CnbCurrencyCode } from '../../../../../../../../networking/useExchangeRates/constants.ts';
import { CnbCurrencyEntry } from '../../../../../../../../networking/useExchangeRates/types.ts';

type TestCase = {
  description: string;
  input: {
    entries: CnbCurrencyEntry[];
    favoriteCurrencyCodes: CnbCurrencyCode[];
  };
  expectedOutput: {
    favorites: CnbCurrencyEntry[];
    others: CnbCurrencyEntry[];
  };
};

const makeEntry = (currencyCode: CnbCurrencyCode): CnbCurrencyEntry => ({
  currencyCode,
  currencyName: 'name',
  countryName: 'country',
  czkRateTrendValues: [1, 2, 3],
});

const entryUSD = makeEntry(CnbCurrencyCode.USD);
const entryEUR = makeEntry(CnbCurrencyCode.EUR);
const entryAUD = makeEntry(CnbCurrencyCode.AUD);
const entryGBP = makeEntry(CnbCurrencyCode.GBP);

const testCases: TestCase[] = [
  {
    description:
      'splits entries into favorites and others and keeps favorites in the order of favoriteCurrencyCodes',
    input: {
      entries: [entryUSD, entryEUR, entryAUD, entryGBP],
      favoriteCurrencyCodes: [CnbCurrencyCode.AUD, CnbCurrencyCode.USD],
    },
    expectedOutput: {
      favorites: [entryAUD, entryUSD],
      others: [entryEUR, entryGBP],
    },
  },
  {
    description:
      'returns empty favorites when none of the favoriteCurrencyCodes exist in entries',
    input: {
      entries: [entryUSD, entryEUR],
      favoriteCurrencyCodes: [CnbCurrencyCode.AUD, CnbCurrencyCode.GBP],
    },
    expectedOutput: {
      favorites: [],
      others: [entryUSD, entryEUR],
    },
  },
  {
    description:
      'returns empty others when all entries are favorites and orders favorites by favoriteCurrencyCodes',
    input: {
      entries: [entryUSD, entryEUR],
      favoriteCurrencyCodes: [CnbCurrencyCode.EUR, CnbCurrencyCode.USD],
    },
    expectedOutput: {
      favorites: [entryEUR, entryUSD],
      others: [],
    },
  },
  {
    description: 'handles empty entries input',
    input: {
      entries: [],
      favoriteCurrencyCodes: [CnbCurrencyCode.USD],
    },
    expectedOutput: {
      favorites: [],
      others: [],
    },
  },
  {
    description:
      'ignores favoriteCurrencyCodes that are not present in entries while still preserving order of those that are present',
    input: {
      entries: [entryUSD, entryEUR],
      favoriteCurrencyCodes: [
        CnbCurrencyCode.AUD,
        CnbCurrencyCode.EUR,
        CnbCurrencyCode.GBP,
        CnbCurrencyCode.USD,
      ],
    },
    expectedOutput: {
      favorites: [entryEUR, entryUSD],
      others: [],
    },
  },
];

describe('splitCurrencyEntriesIntoFavoritesAndOthers', () => {
  it.each(testCases)('$description', ({ input, expectedOutput }) => {
    expect(
      splitCurrencyEntriesIntoFavoritesAndOthers(
        input.entries,
        input.favoriteCurrencyCodes,
      ),
    ).toEqual(expectedOutput);
  });
});
