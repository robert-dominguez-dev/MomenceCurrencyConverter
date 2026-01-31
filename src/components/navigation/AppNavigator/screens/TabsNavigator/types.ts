export enum TabsNavigatorScreen {
  RatesScreen = 'RatesScreen',
  ConverterScreen = 'ConverterScreen',
  SettingsScreen = 'SettingsScreen',
}

export type TabsNavigatorScreenParams = {
  [TabsNavigatorScreen.RatesScreen]: undefined;
  [TabsNavigatorScreen.ConverterScreen]: undefined;
  [TabsNavigatorScreen.SettingsScreen]: undefined;
};
