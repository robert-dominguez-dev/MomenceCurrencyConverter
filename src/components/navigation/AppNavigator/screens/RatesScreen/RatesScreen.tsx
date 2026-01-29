import { ScreenProps } from '../../../types.ts';
import { Text } from 'react-native';
import { AppNavigatorScreen, AppNavigatorScreenParams } from '../../types.ts';

type RatesScreenProps = ScreenProps<
  AppNavigatorScreenParams,
  AppNavigatorScreen.RatesScreen
>;

export const RatesScreen = ({}: RatesScreenProps) => {
  return (
    <>
      <Text>RatesScreen</Text>
    </>
  );
};
