import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabsNavigatorScreen, TabsNavigatorScreenParams } from './types.ts';
import { ConverterScreen } from './screens/ConverterScreen/ConverterScreen.tsx';
import { RatesScreen } from './screens/RatesScreen/RatesScreen.tsx';
import { ArrowLeftRight, Cog, List, LucideIcon } from 'lucide-react-native';
import { ICONS_STROKE_WIDTH } from '../../../../../constants/common.ts';
import { useAppThemedColors } from '../../../../../hooks/useAppThemedColors.ts';
import { AppText } from '../../../../common/AppText/AppText.tsx';
import { useTabBarStyle } from './hooks/useTabBarStyle.ts';
import { SettingsScreen } from './screens/SettingsScreen/SettingsScreen.tsx';

const screenNameTabIconComponentMap: Record<TabsNavigatorScreen, LucideIcon> = {
  [TabsNavigatorScreen.RatesScreen]: List,
  [TabsNavigatorScreen.ConverterScreen]: ArrowLeftRight,
  [TabsNavigatorScreen.SettingsScreen]: Cog,
};

const screenNameTabLabelMap: Record<TabsNavigatorScreen, string> = {
  [TabsNavigatorScreen.RatesScreen]: 'Rates',
  [TabsNavigatorScreen.ConverterScreen]: 'Converter',
  [TabsNavigatorScreen.SettingsScreen]: 'Settings',
};

const Tabs = createBottomTabNavigator<TabsNavigatorScreenParams, string>();

export const TabsNavigator = () => {
  const { accent, textMuted } = useAppThemedColors();

  const tabBarStyle = useTabBarStyle();

  return (
    <Tabs.Navigator
      id={TabsNavigator.name}
      initialRouteName={TabsNavigatorScreen.RatesScreen}
      screenOptions={({ route }) => ({
        tabBarStyle,
        tabBarActiveTintColor: accent,
        tabBarInactiveTintColor: textMuted,
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabel: ({ color }) => {
          const label = screenNameTabLabelMap[route.name];
          return (
            <AppText
              category={'caption'}
              colorOverride={color}>
              {label}
            </AppText>
          );
        },
        tabBarIcon: ({ color, size }) => {
          const IconComponent = screenNameTabIconComponentMap[route.name];
          return (
            <IconComponent
              color={color}
              size={size}
              strokeWidth={ICONS_STROKE_WIDTH}
            />
          );
        },
      })}>
      <Tabs.Screen
        name={TabsNavigatorScreen.SettingsScreen}
        component={SettingsScreen}
      />
      <Tabs.Screen
        name={TabsNavigatorScreen.RatesScreen}
        component={RatesScreen}
      />
      <Tabs.Screen
        name={TabsNavigatorScreen.ConverterScreen}
        component={ConverterScreen}
      />
    </Tabs.Navigator>
  );
};
