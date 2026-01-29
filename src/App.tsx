import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { QueryClientProvider } from '@tanstack/react-query';
import { AppNavigator } from './components/navigation/AppNavigator/AppNavigator.tsx';
import { queryClient } from './networking/constants.ts';
import { AppThemeProvider } from './contexts/AppThemeProvider.tsx';

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <SafeAreaProvider>
        <AppThemeProvider>
          <AppNavigator />
        </AppThemeProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  </QueryClientProvider>
);
