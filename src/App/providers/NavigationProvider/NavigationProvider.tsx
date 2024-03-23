import { NavigationContainer } from '@react-navigation/native';
import { createContext, useCallback, useMemo, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AvailableScreensConfig, availableScreensConfig } from './availableScreensConfig';
import { Text } from 'react-native';
import { HStack } from '@shared/ui/HStack/HStack';
import { Button } from '@shared/ui/Button/ui/Button';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';
import { Header } from '@app/ui/Header/ui/Header';

type FireCallback = (value: AvailableScreensConfig) => keyof AvailableScreensConfig;

type NavigationContextValue = {
    moveBackward?: () => void
    moveForward?: (fireCallback: FireCallback) => void
}

const NavigationContext = createContext<NavigationContextValue>({});

type NavigationProviderProps = {
  navigateRenderProps: (value: JSX.Element) => JSX.Element;
};

const Stack = createNativeStackNavigator();

function NavigationProvider({ navigateRenderProps }: NavigationProviderProps) {

  return (
    <NavigationContext.Provider value={null}>
      {navigateRenderProps(
        <NavigationContainer>
          <Stack.Navigator>
          {availableScreensConfig.map(({name, component}) => (
            <Stack.Screen options={{
              header: (props) => <Header {...props}/>
            }} name={name} component={component}/>
          ))}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
