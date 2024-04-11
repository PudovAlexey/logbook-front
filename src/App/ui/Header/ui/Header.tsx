import { HStack } from '@shared/ui/HStack/HStack';
import { Button } from '@shared/ui/Button/ui/Button';
import { Typography } from '@shared/ui/Typography';
import Icon from 'react-native-vector-icons/AntDesign';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useGetUser } from '@app/providers/UserProvider/ui/UserProvider';
import { useCallback } from 'react';
import { styles } from './styles';

function Header({ navigation }: NativeStackHeaderProps) {
    const { user } = useGetUser();

    const navToLogin = useCallback(() => {
        if (user) {
            navigation.push('profile');
        } else {
            navigation.push('login');
        }
    }, [user, navigation]);

    const onBack = () => {
        navigation.pop();
    };

  return (
        <HStack style={styles.headerContainer} width="100%" justifyContent="space-between" alignItems="center">
          <Button onPress={onBack} type="clear">
        <Icon name="arrowleft" />
          </Button>
            <Typography.Title>Name</Typography.Title>
          <HStack gap={10} width="auto">
            <Button onPress={navToLogin} type="clear">
              <Icon name="login" />
            </Button>
            <Button type="clear">
            <Icon name="menu-unfold" />
            </Button>
          </HStack>
        </HStack>
  );
}

export {
    Header,
};
