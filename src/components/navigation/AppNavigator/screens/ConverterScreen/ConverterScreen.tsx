import { ScreenProps } from '../../../types.ts';
import { Text } from 'react-native';
import { AppNavigatorScreen, AppNavigatorScreenParams } from '../../types.ts';

type ConverterScreenProps = ScreenProps<
  AppNavigatorScreenParams,
  AppNavigatorScreen.ConverterScreen
>;

export const ConverterScreen = ({}: ConverterScreenProps) => {
  return (
    <>
      <Text>ConverterScreen</Text>
    </>
  );
};
