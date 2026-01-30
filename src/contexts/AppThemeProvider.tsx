import React, { createContext, useContext, useEffect, useState } from 'react';
import { AppTheme } from '../constants/common.ts';
import { ChildrenProp } from '../types/common.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appearance } from 'react-native';
import { checkIsAppTheme } from '../helpers/checkIsAppTheme.ts';

const APP_THEME_STORAGE_KEY = 'APP_THEME';

type AppThemeContextProps = {
  theme: AppTheme;
  toggleTheme: () => void;
};

const AppThemeContext = createContext<AppThemeContextProps | undefined>(
  undefined,
);

export const AppThemeProvider = ({ children }: ChildrenProp) => {
  const systemTheme: AppTheme =
    Appearance.getColorScheme() === 'light' ? AppTheme.light : AppTheme.dark;

  const [theme, setTheme] = useState<AppTheme>(systemTheme);

  useEffect(() => {
    AsyncStorage.getItem(APP_THEME_STORAGE_KEY).then(storedTheme => {
      const isAppTheme = checkIsAppTheme(storedTheme);
      if (isAppTheme) {
        setTheme(storedTheme);
      }
    });
  }, []);

  const toggleTheme = () =>
    setTheme(prev => {
      const newTheme = prev === AppTheme.light ? AppTheme.dark : AppTheme.light;
      AsyncStorage.setItem(APP_THEME_STORAGE_KEY, newTheme);
      return newTheme;
    });

  return (
    <AppThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}>
      {children}
    </AppThemeContext.Provider>
  );
};

export const useAppTheme = () => {
  const context = useContext(AppThemeContext);
  if (!context) {
    throw new Error(
      `${useAppTheme.name} must be used within a ${AppThemeProvider.name}`,
    );
  }
  return context;
};
