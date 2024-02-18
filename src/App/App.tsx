import { Main } from '@pages/Main';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LanguageProvider } from './providers/LanguageProvider/LanguageProvider';
import { QueryClientProvider } from './providers/QueryClientProvider/QueryClientProvider';
import { ThemeProvider } from './providers/ThemeProvider/ThemeProvider';
import { FontProvider } from './providers/FontProvider/FontProvider';

function App() {
  return (
    <QueryClientProvider>
      <LanguageProvider>
        <ThemeProvider>
          <FontProvider>
            <Main />
          </FontProvider>
        </ThemeProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export { App };
