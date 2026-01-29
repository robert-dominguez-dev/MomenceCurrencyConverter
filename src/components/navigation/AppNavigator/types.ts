export enum AppNavigatorScreen {
  RatesScreen = 'RatesScreen',
  ConverterScreen = 'ConverterScreen',
}

export type AppNavigatorScreenParams = {
  [AppNavigatorScreen.RatesScreen]: undefined;
  [AppNavigatorScreen.ConverterScreen]: undefined;
};
