import { useGetUser, useLoginHandlers } from '@app/providers/UserProvider/ui/UserProvider';
import { UserAvatarEditor } from '@features/UserAvatarEditor/ui/UserAvatarEditor';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { formatDate } from '@shared/lib/formatters/formatDate';
import { Button } from '@shared/ui/Button/ui/Button';
import { Typography } from '@shared/ui/Typography';
import { VStack } from '@shared/ui/VStack/VStack';
import { useCallback } from 'react';
import { View, Text } from 'react-native';

function ProfilePage({ navigation }: NativeStackHeaderProps) {
  const { user } = useGetUser();
  const loginHandlers = useLoginHandlers();

  const logoutHandler = useCallback(() => {
    loginHandlers?.logoutUserHandler();
    navigation.push('login');
  }, [loginHandlers, navigation]);

  const removeAccauntHandler = useCallback(() => {
    loginHandlers?.removeUserHandler();
  }, [loginHandlers]);

  if (!user) {
    return null;
  }

  return (
    <View>
      <UserAvatarEditor />
      <Typography.Text>{user?.email}</Typography.Text>
      <Text>
{formatDate({
        date: user?.date_of_birth,
      })}
      </Text>
      <Button onPress={logoutHandler}>logout</Button>
      <Button onPress={removeAccauntHandler}>remove accaunt</Button>
    </View>
  );

  // return (
  //   <VStack
  //     gap={16}
  //     justifyContent="center"
  //     style={{
  //       flex: '1',
  //     }}
  //   >
  //     <UserAvatarEditor />
  //     <Typography.Text>{user?.email}</Typography.Text>
  //     <Typography.Text>
  //       {user?.date_of_birth}
  //       {/* {formatDate({
  //       date: user.date_of_birth,
  //     })} */}
  //     </Typography.Text>
  //     <Button onPress={logoutHandler}>logout</Button>
  //     <Button onPress={removeAccauntHandler}>remove accaunt</Button>
  //   </VStack>
  // );
}

export { ProfilePage };
