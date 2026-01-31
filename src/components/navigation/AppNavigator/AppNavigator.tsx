import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppNavigatorScreen, AppNavigatorScreenParams } from './types.ts';

import { memo } from 'react';
import { commonAppNavigationOptions } from '../constants.ts';
import { TabsNavigator } from '../TabsNavigator/TabsNavigator.tsx';

const Stack = createNativeStackNavigator<AppNavigatorScreenParams, string>();

const _AppNavigator = () => (
  <Stack.Navigator
    id={AppNavigator.name}
    screenOptions={commonAppNavigationOptions}>
    <Stack.Screen
      name={AppNavigatorScreen.TabsNavigator}
      component={TabsNavigator}
    />
  </Stack.Navigator>
);

export const AppNavigator = memo(_AppNavigator);
