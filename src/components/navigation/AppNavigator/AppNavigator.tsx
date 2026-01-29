import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppNavigatorScreen, AppNavigatorScreenParams } from './types.ts';
import {
  commonAppNavigationOptions,
  ROOT_STACK_NAVIGATOR_ID,
} from '../constants.ts';

import { memo } from 'react';
import { ConverterScreen } from './screens/ConverterScreen/ConverterScreen.tsx';
import { RatesScreen } from './screens/RatesScreen/RatesScreen.tsx';

const Stack = createNativeStackNavigator<AppNavigatorScreenParams, string>();

const _AppNavigator = () => (
  <Stack.Navigator
    id={ROOT_STACK_NAVIGATOR_ID}
    screenOptions={commonAppNavigationOptions}>
    <Stack.Screen
      name={AppNavigatorScreen.RatesScreen}
      component={RatesScreen}
    />
    <Stack.Screen
      name={AppNavigatorScreen.ConverterScreen}
      component={ConverterScreen}
    />
  </Stack.Navigator>
);

export const AppNavigator = memo(_AppNavigator);
