import { View } from 'react-native';
import { styles } from './styles';
import { Header as HeaderRNE, HeaderProps, Icon } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useGetUser } from '@app/providers/UserProvider/ui/UserProvider';
import { HStack } from '@shared/ui/HStack/HStack';
import { Button } from '@shared/ui/Button/ui/Button';

function Header() {
  const user = useGetUser();
  return (
    <SafeAreaProvider>
      <HeaderRNE
        rightComponent={
          <HStack
            alignItems="center"
            justifyContent={'center'}
            gap={4}
          >
            <Button>login</Button>
            <Button>
              <Icon
                name="menu"
                color="white"
              />
            </Button>
          </HStack>
        }
        centerComponent={{ text: 'Header', style: styles.heading }}
      />
    </SafeAreaProvider>
  );
}

export { Header };
