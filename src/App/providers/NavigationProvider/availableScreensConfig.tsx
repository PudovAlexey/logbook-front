import { View, Text} from 'react-native';

type AvailableScreensConfig = Record<string, {
    body: any
}>

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
}

function DetailsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
}

const availableScreensConfig: AvailableScreensConfig = {
    home: {
        body: HomeScreen,
    },
    detail: {
        body: DetailsScreen
    },

}

export {
    availableScreensConfig
}

export type {
    AvailableScreensConfig
}