/* eslint-disable no-unused-vars */
import { NavigationContainer } from '@react-navigation/native';
import {
 createContext,
} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from '@app/ui/Header/ui/Header';
import { AvailableScreensConfig, availableScreensConfig } from './availableScreensConfig';

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
    <>
      {navigateRenderProps(
        <NavigationContainer>
          <Stack.Navigator>
          {availableScreensConfig.map(({ name, component }) => (
            <Stack.Screen
options={{
              // eslint-disable-next-line react/no-unstable-nested-components
              header: (props) => <Header {...props} />,
            }}
name={name}
component={component}
            />
          ))}
          </Stack.Navigator>
        </NavigationContainer>,
      )}
    </>
  );
}

export { NavigationProvider };
