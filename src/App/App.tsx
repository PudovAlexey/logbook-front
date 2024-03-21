import { Main } from '@pages/Main';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LanguageProvider } from './providers/LanguageProvider/LanguageProvider';
import { QueryClientProvider } from './providers/QueryClientProvider/QueryClientProvider';
import { ThemeProvider } from './providers/ThemeProvider/ThemeProvider';
import { FontProvider } from './providers/FontProvider/FontProvider';
import { UserProvider } from './providers/UserProvider/ui/UserProvider';
import { Header } from './ui/Header/Header';
import { styles } from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationProvider } from './providers/NavigationProvider/NavigationProvider';

function App() {
  return (
    <NavigationProvider navigateRenderProps={(navigation) => (
      <UserProvider>
      <QueryClientProvider>
        <LanguageProvider>
          <ThemeProvider>
            <FontProvider>
              {navigation}
            </FontProvider>
          </ThemeProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </UserProvider>
    )}/>
  );
}

export { App };
