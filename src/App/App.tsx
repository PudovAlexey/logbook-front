import { Main } from '@pages/Main';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function App() {
  return <Main/>
  return (
    <View>
      <Main/>
  </View>
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
