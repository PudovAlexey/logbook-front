import { NavigationContainer } from '@react-navigation/native';
import { createContext, useCallback, useMemo, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
  const [navigationState, setNavigationState] = useState<{ name: string; component: JSX.Element }[]>([
    {
      name: 'home',
      component: availableScreensConfig['home'],
    },
  ]);

  const moveForward: NavigationContextValue['moveForward'] = useCallback((cb: FireCallback) => {

    setNavigationState((prev) => {
      const clone = {...prev};

      clone.unshift(availableScreensConfig[cb(availableScreensConfig)])

      return clone
    })


}, [])

  const moveBackward: NavigationContextValue['moveBackward'] = useCallback(() => {
    setNavigationState((prev) => prev.slice(1,))
  }, [])

  return (
    <NavigationContext.Provider value={useMemo(() => ({
        moveForward,
        moveBackward
    }), [])}>
      {navigateRenderProps(
        <NavigationContainer>
          <Stack.Navigator>
            {navigationState.map(({ name, component }) => (
              <Stack.Screen
                key={name}
                name={name}
                component={component}
              ></Stack.Screen>
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
