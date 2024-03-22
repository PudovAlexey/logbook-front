import { NavigationContainer } from '@react-navigation/native';
import { createContext, useCallback, useMemo, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AvailableScreensConfig, availableScreensConfig } from './availableScreensConfig';
import { Text } from 'react-native';
import { HStack } from '@shared/ui/HStack/HStack';
import { Button } from '@shared/ui/Button/ui/Button';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';

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
  const [navigationState, setNavigationState] = useState<{ name: string; component: JSX.Element  }[]>([
    {
      name: 'home',
      component: availableScreensConfig['home'].body,
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
            {navigationState.map(({ name, component, header }) => (
              <Stack.Screen
              // header={({navi}) => {
              //   console.log()
              //  return <Text>test</Text>
              // }}
                key={name}
                name={name}
                component={component}
                options={{ header: () => (
                  <HStack style={styles.headerContainer} width={'100%'} justifyContent='space-between' alignItems='center'>
                    <Button type='clear'>
                  <Icon name='arrowleft'/>
                    </Button>
                    <Text>{name}</Text>
                    {/* <Text>{'My home'}</Text> */}
                    <HStack gap={10} width="auto">
                      <Button type='clear'>
                        <Icon name='login' />
                      </Button>
                      <Button type='clear'>
                      <Icon name='menu-unfold'/>
                      </Button>
                    </HStack>
                  </HStack>
                ) }}
              ></Stack.Screen>
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
