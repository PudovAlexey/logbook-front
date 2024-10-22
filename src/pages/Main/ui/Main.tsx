import React from 'react';
import { Tab, Text, TabView, useTheme } from '@rneui/themed';
import { View, StyleSheet, Dimensions, } from 'react-native';
import { LogbookTab } from '@widgets/LogBookTab/ui/LogbookTab/LogbookTab';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { ChatsListTab } from '@widgets/ChatsListTab/ui/ChatsListTab';

const tabsHeight = 300;

function Main(navigator: NativeStackHeaderProps) {
  const windowHeight = Dimensions.get('window').height;

    const [index, setIndex] = React.useState(0);

    const { theme } = useTheme();

    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
    });

    return (
        <View style={styles.container}>
          <TabView
value={index}
onChange={setIndex}
animationType="spring"
          >
            <TabView.Item style={{ backgroundColor: 'white', width: '100%', height: windowHeight - tabsHeight }}>
              <LogbookTab navigator={navigator} />
              {/* <Button onPress={handleNotificationTest}>ckick</Button> */}
            </TabView.Item>
            <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
              <Text h1>Favorite new</Text>
            </TabView.Item>
            <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
              <Text h1>Cart</Text>
            </TabView.Item>
            <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
              <ChatsListTab/>
            </TabView.Item>
          </TabView>
          <Tab
            dense
            value={index}
            onChange={(e) => setIndex(e)}
            // indicatorStyle={{
            //   backgroundColor: 'white',
            //   height: 3,
            // }}
            containerStyle={{
              backgroundColor: theme.colors.colorFillPrimary(),
            }}
            // variant="primary"
          >
            <Tab.Item
              title="logbook"
              titleStyle={{ fontSize: 12, color: 'white' }}
              icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
              containerStyle={{
                backgroundColor: theme.colors.colorFillPrimary(),
                borderTopLeftRadius: 12,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 0,
              }}
              // containerStyle={{
              //   backgroundColor: 'rgba(0, 0, 0, .6)',
              //   borderRadius: 0,
              //   // borderTopLeftRadius: 12,
              //   // borderTopRightRadius: 12,
              // }}
            />
            <Tab.Item
              // buttonStyle={{
              //   backgroundColor: 'transparent',
              // }}
              title="map"
              titleStyle={{ fontSize: 12, color: 'white' }}
              icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
            />
            <Tab.Item
              title="ekip"
              titleStyle={{ fontSize: 12, color: 'white' }}
              icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
            />
            <Tab.Item
              title="chats"
              titleStyle={{ fontSize: 12, color: 'white' }}
              icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
              containerStyle={{
                backgroundColor: theme.colors.colorFillPrimary(),
                borderTopRightRadius: 12,
              }}
            />
          </Tab>
        </View>
      );
}

export {
    Main,
};
