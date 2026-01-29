import { NavigationProp, RouteProp } from '@react-navigation/core';
import type { ParamListBase } from '@react-navigation/routers';

export type ScreenProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = keyof ParamList,
> = {
  route: RouteProp<ParamList, RouteName>;
  navigation: NavigationProp<ParamList, RouteName>;
};
