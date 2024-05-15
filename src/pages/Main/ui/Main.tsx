import React from 'react';
import { Tab, Text, TabView } from '@rneui/themed';
import { View, StyleSheet } from 'react-native';
import { Button } from '@shared/ui/Button/ui/Button';
import { useNotification } from '@shared/ui/AlertContext/ui/AlertContext';
import { LogbookTab } from '@widgets/LogBookTab/ui/LogbookTab/LogbookTab';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

function Main(navigator: NativeStackHeaderProps) {
  const notify = useNotification();
  //  const {t} = useTranslation();
    const [index, setIndex] = React.useState(0);

    const handleNotificationTest = () => {
      notify?.notify({
        status: 'error',
        time: 2000,
        message: 'Error message',
        description: 'error descr',
      });
    };

    const styles = StyleSheet.create({
      container: {
        flex: 1,
      //   backgroundColor: '#fff',
      //   alignItems: 'center',
      //   justifyContent: 'center',
      //   width: 100,
      },
    });

    return (
        <View style={styles.container}>
          <TabView value={index} onChange={setIndex} animationType="spring">
            <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
              <LogbookTab navigator={navigator} />
              {/* <Button onPress={handleNotificationTest}>ckick</Button> */}
            </TabView.Item>
            <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
              <Text h1>Favorite new</Text>
            </TabView.Item>
            <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
              <Text h1>Cart</Text>
            </TabView.Item>
          </TabView>
          <Tab
            value={index}
            onChange={(e) => setIndex(e)}
            // indicatorStyle={{
            //   backgroundColor: 'white',
            //   height: 3,
            // }}
            variant="primary"
          >
            <Tab.Item
              title="logbook"
              titleStyle={{ fontSize: 12 }}
              icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
            />
            <Tab.Item
              title="map"
              titleStyle={{ fontSize: 12 }}
              icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
            />
            <Tab.Item
              title="ekip"
              titleStyle={{ fontSize: 12 }}
              icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
            />
          </Tab>
        </View>
      );
}

export {
    Main,
};
