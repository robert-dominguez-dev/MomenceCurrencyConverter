import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/core';
import {
  AppNavigatorScreen,
  AppNavigatorScreenParams,
} from '../AppNavigator/types.ts';
import { ROOT_STACK_NAVIGATOR_ID } from '../constants.ts';

type RootNavigation = NavigationProp<
  AppNavigatorScreenParams,
  AppNavigatorScreen,
  string
>;

/**
 * ⚠️ Make sure you use this hook inside the `AppNavigator`...
 */
export const useRootStackNavigation = (): RootNavigation => {
  const navigation = useNavigation<RootNavigation>();
  return navigation.getParent(ROOT_STACK_NAVIGATOR_ID);
};
