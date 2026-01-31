import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppNavigatorScreen, AppNavigatorScreenParams } from './types.ts';

import { memo } from 'react';
import {
  commonAppNavigationOptions,
  ROOT_STACK_NAVIGATOR_ID,
} from '../constants.ts';
import { TabsNavigator } from './screens/TabsNavigator/TabsNavigator.tsx';
import { CurrencySelectScreen } from './screens/CurrencySelectScreen/CurrencySelectScreen.tsx';
import { FormProvider, useForm } from 'react-hook-form';
import {
  ConverterFieldName,
  ConverterFormValues,
} from './screens/TabsNavigator/screens/ConverterScreen/types.ts';
import { CnbCurrencyCode } from '../../../networking/useExchangeRates/constants.ts';
import { useFavoriteCurrencyCodes } from '../../../contexts/FavoriteCurrencyCodesProvider/FavoriteCurrencyCodesProvider.tsx';

const Stack = createNativeStackNavigator<AppNavigatorScreenParams, string>();

const AppNavigatorInner = () => (
  <Stack.Navigator
    id={ROOT_STACK_NAVIGATOR_ID}
    screenOptions={commonAppNavigationOptions}>
    <Stack.Screen
      name={AppNavigatorScreen.TabsNavigator}
      component={TabsNavigator}
    />
    <Stack.Screen
      name={AppNavigatorScreen.CurrencySelectScreen}
      component={CurrencySelectScreen}
      options={{
        presentation: 'pageSheet',
        sheetGrabberVisible: false,
      }}
    />
  </Stack.Navigator>
);

const _AppNavigator = () => {
  const { favoriteCurrencyCodes } = useFavoriteCurrencyCodes();

  const formProps = useForm<ConverterFormValues>({
    defaultValues: {
      [ConverterFieldName.fromAmount]: '',
      [ConverterFieldName.fromCurrency]: CnbCurrencyCode.CZK,
      [ConverterFieldName.toCurrency]:
        favoriteCurrencyCodes[0] ?? CnbCurrencyCode.EUR,
    },
  });

  return (
    <FormProvider {...formProps}>
      <AppNavigatorInner />
    </FormProvider>
  );
};

export const AppNavigator = memo(_AppNavigator);
