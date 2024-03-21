import cn from 'react-native-classnames';
import { GestureResponderEvent, View } from 'react-native';
import { styles } from './styles';
import { Header as HeaderRNE, HeaderProps } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useGetUser } from '@app/providers/UserProvider/ui/UserProvider';
import { HStack } from '@shared/ui/HStack/HStack';
import { Button } from '@shared/ui/Button/ui/Button';
import { Avatar } from '@shared/ui/Avatar/ui/Avatar';
import Icon from 'react-native-vector-icons/AntDesign';
import { VStack } from '@shared/ui/VStack/VStack';
import { Typography } from '@shared/ui/Typography';

function Header() {
  const user = useGetUser();

  function toLogin() {

  }

  function toProfile() {

  }


  return (
    <SafeAreaProvider>
      <HeaderRNE
        rightComponent={
          <HStack
            alignItems="center"
            justifyContent={'center'}
          >
            <Button onPress={() => user ? toProfile() : toLogin()} style={cn(styles, {
              userPlaceholder: !!user,
              user: !!user, 
            })}>
              {user ?  <Avatar
                renderPlaceholderContent={  <Icon
                  name="user"
                  color="white"
                />}
                /> : (
                <Avatar
                renderPlaceholderContent={(
                  <VStack>
                    <Icon
                  name="login"
                  color="white"
                />
                <Typography.Text style={styles.loginText}>log in</Typography.Text>
                  </VStack>
                )}
                />
              )}
            </Button>
            <Button>
              <Icon
                name="menu-unfold"
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
