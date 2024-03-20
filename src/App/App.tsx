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

function App() {
  return (
    <UserProvider>
      <QueryClientProvider>
        <LanguageProvider>
          <ThemeProvider>
            <FontProvider>
              <View style={styles.space}>
                <View style={styles.header}>
                <Header />
                </View>
                <Main />
              </View>
            </FontProvider>
          </ThemeProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </UserProvider>
  );
}

export { App };
