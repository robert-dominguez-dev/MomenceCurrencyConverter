import { ConverterFieldName } from './screens/TabsNavigator/screens/ConverterScreen/types.ts';

export enum AppNavigatorScreen {
  TabsNavigator = 'TabsNavigator',
  CurrencySelectScreen = 'CurrencySelectScreen',
}

export type CurrencySelectScreenProps = {
  currencyFieldName:
    | ConverterFieldName.fromCurrency
    | ConverterFieldName.toCurrency;
};

export type AppNavigatorScreenParams = {
  [AppNavigatorScreen.TabsNavigator]: undefined;
  [AppNavigatorScreen.CurrencySelectScreen]: CurrencySelectScreenProps;
};
