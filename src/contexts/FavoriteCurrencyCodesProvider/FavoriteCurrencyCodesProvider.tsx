import React, { createContext, useContext, useEffect, useState } from 'react';
import { ChildrenProp } from '../../types/common.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CnbCurrencyCode } from '../../networking/useExchangeRates/constants.ts';
import { safeParseFavoriteCurrencyCodes } from './helpers/safeParseFavoriteCurrencyCodes.ts';
import { addOrRemoveFavoriteCurrencyCode } from './helpers/addOrRemoveFavoriteCurrencyCode.ts';

const FAVORITE_CURRENCY_RATES_STORAGE_KEY = 'FAVORITE_CURRENCY_RATES';

type FavoriteCurrencyCodesContextProps = {
  favoriteCurrencyCodes: CnbCurrencyCode[];
  toggleFavoriteCurrencyCode: (currencyCode: CnbCurrencyCode) => void;
};

const FavoriteCurrencyCodesContext = createContext<
  FavoriteCurrencyCodesContextProps | undefined
>(undefined);

export const FavoriteCurrencyCodesProvider = ({ children }: ChildrenProp) => {
  const [favoriteCurrencyCodes, setFavoriteCurrencyCodes] = useState<
    CnbCurrencyCode[]
  >([]);

  useEffect(() => {
    AsyncStorage.getItem(FAVORITE_CURRENCY_RATES_STORAGE_KEY).then(
      storedCurrencyCodes =>
        setFavoriteCurrencyCodes(
          safeParseFavoriteCurrencyCodes(storedCurrencyCodes),
        ),
    );
  }, []);

  const toggleFavoriteCurrencyCode = (currencyCode: CnbCurrencyCode) =>
    setFavoriteCurrencyCodes(prev => {
      const updatedCurrencyCodes = addOrRemoveFavoriteCurrencyCode(
        prev,
        currencyCode,
      );

      AsyncStorage.setItem(
        FAVORITE_CURRENCY_RATES_STORAGE_KEY,
        JSON.stringify(updatedCurrencyCodes),
      );

      return updatedCurrencyCodes;
    });

  return (
    <FavoriteCurrencyCodesContext.Provider
      value={{
        favoriteCurrencyCodes,
        toggleFavoriteCurrencyCode,
      }}>
      {children}
    </FavoriteCurrencyCodesContext.Provider>
  );
};

export const useFavoriteCurrencyCodes = () => {
  const context = useContext(FavoriteCurrencyCodesContext);
  if (!context) {
    throw new Error(
      `${useFavoriteCurrencyCodes.name} must be used within a ${FavoriteCurrencyCodesProvider.name}`,
    );
  }
  return context;
};
