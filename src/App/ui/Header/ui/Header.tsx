import { HStack } from '@shared/ui/HStack/HStack';
import { Button } from '@shared/ui/Button/ui/Button';
import { Typography } from '@shared/ui/Typography';
import Icon from 'react-native-vector-icons/AntDesign';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useGetUser } from '@app/providers/UserProvider/ui/UserProvider';
import { useCallback, useMemo } from 'react';
import { View } from 'react-native';
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

   const title = useMemo(() => {
    const word = navigation.getState().routes[navigation.getState().routes.length - 1].name;
    return word[0].toUpperCase() + word.slice(1);
   }, [navigation]);

  return (
  <View style={styles.headerContainer}>
    <View>
<Button onPress={onBack} shape="square" size="s" type="clear">
    <Icon size={16} name="arrowleft" />
</Button>
    </View>
    <View style={styles.headerItem}>
<Typography.Title alignment="center">{title}</Typography.Title>
    </View>
    <View>
<Button onPress={navToLogin} shape="square" size="s" type="clear">
    {user ? <Icon size={16} name="user" /> : <Icon size={16} name="login" />}
</Button>
    </View>
  </View>
  );
}

export {
    Header,
};
