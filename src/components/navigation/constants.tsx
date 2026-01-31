import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export const commonAppNavigationOptions = {
  headerShown: false,
  gestureEnabled: false,
} as const satisfies NativeStackNavigationOptions;

export const ROOT_STACK_NAVIGATOR_ID = 'ROOT_STACK_NAVIGATOR_ID';
