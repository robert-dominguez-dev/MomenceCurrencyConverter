import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export const commonAppNavigationOptions = {
  headerShown: false,
  gestureEnabled: false,
} as const satisfies NativeStackNavigationOptions;
