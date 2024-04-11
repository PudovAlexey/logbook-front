/* eslint-disable global-require */
import { Text } from '@rneui/base';
import { useFonts } from 'expo-font';
import React, { PropsWithChildren } from 'react';

 function FontProvider({ children }: PropsWithChildren) {
    const [fontsLoaded] = useFonts({
        'Anta': require('@assets/fonts/Anta-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <Text>Fonts is loading</Text>;
    }

  return children;
}

export {
    FontProvider,
};
