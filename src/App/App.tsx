import { Main } from '@pages/Main';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LanguageProvider } from './providers/LanguageProvider/LanguageProvider';
import { QueryClientProvider } from './providers/QueryClientProvider/QueryClientProvider';

function App() {
  return (
   <QueryClientProvider>
     <LanguageProvider>
      <Main/>
    </LanguageProvider>
   </QueryClientProvider>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: 100,
    },
  });

export {
    App
}
