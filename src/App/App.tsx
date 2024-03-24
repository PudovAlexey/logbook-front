import { Main } from '@pages/Main';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LanguageProvider } from './providers/LanguageProvider/LanguageProvider';
import { QueryClientProvider } from './providers/QueryClientProvider/QueryClientProvider';
import { ThemeProvider } from './providers/ThemeProvider/ThemeProvider';
import { FontProvider } from './providers/FontProvider/FontProvider';
import { UserProvider } from './providers/UserProvider/ui/UserProvider';
import { NavigationProvider } from './providers/NavigationProvider/NavigationProvider';
import { AlertContextProvider } from '@shared/ui/AlertContext/ui/AlertContext';

function App() {
  return (
    <NavigationProvider navigateRenderProps={(navigation) => (
      <UserProvider>
      <QueryClientProvider>
        <LanguageProvider>
          <ThemeProvider>
            <FontProvider>
                <AlertContextProvider>
                {navigation}
                </AlertContextProvider>
            </FontProvider>
          </ThemeProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </UserProvider>
    )}/>
  );
}

export { App };
