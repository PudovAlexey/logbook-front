import { Button } from '@shared/ui/Button/ui/Button';
import { Typography } from '@shared/ui/Typography';
import Icon from 'react-native-vector-icons/AntDesign';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useGetUser } from '@app/providers/UserProvider/ui/UserProvider';
import { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { camelCaseIntoToken } from '@shared/lib/formatters/camelCaseIntoToken';
import { useStyles } from './styles';

function Header({ navigation }: NativeStackHeaderProps) {
  const styles = useStyles();
  const { user } = useGetUser();

  const { routes } = navigation.getState();

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

  const title = useMemo(() => {
    const word = navigation.getState().routes[navigation.getState().routes.length - 1].name;
    return word[0].toUpperCase() + word.slice(1);
  }, [navigation]);

  return (
    <View style={styles.headerContainer}>
      <View>
       {routes.length > 1 && (
<Button
          onPress={onBack}
          shape="square"
          size="s"
          type="clear"
>
          <Icon
            size={16}
            name="arrowleft"
          />
</Button>
)}
      </View>
      <View>
        <Typography.Title alignment="center">{camelCaseIntoToken({ value: title, token: ' ' })}</Typography.Title>
      </View>
      <View>
        <Button
          onPress={navToLogin}
          shape="square"
          size="s"
          type="clear"
        >
          {user ? (
            <Icon
              size={16}
              name="user"
            />
          ) : (
            <Icon
              size={16}
              name="login"
            />
          )}
        </Button>
      </View>
    </View>
  );
}

export { Header };
