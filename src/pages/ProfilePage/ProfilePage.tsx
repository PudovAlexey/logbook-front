import { useGetUser, useLoginHandlers } from '@app/providers/UserProvider/ui/UserProvider';
import { UserAvatarEditor } from '@features/UserAvatarEditor/ui/UserAvatarEditor';
import { formatDate } from '@shared/lib/formatters/formatDate';
import { Button } from '@shared/ui/Button/ui/Button';
import { Typography } from '@shared/ui/Typography';
import { VStack } from '@shared/ui/VStack/VStack';
import { useCallback } from 'react';

function ProfilePage() {
  const { user } = useGetUser();
  const loginHandlers = useLoginHandlers();

  const logoutHandler = useCallback(() => {
    loginHandlers?.logoutUserHandler();
  }, [loginHandlers]);

  const removeAccauntHandler = useCallback(() => {
    loginHandlers?.removeUserHandler();
  }, [loginHandlers]);

  if (!user) {
    return null;
  }

  return (
    <VStack
gap={16}
justifyContent="center"
style={{
      height: '100%',
    }}
    >
      <UserAvatarEditor />
      <Typography.Text>{user.email}</Typography.Text>
      <Typography.Text>
{formatDate({
        date: user.date_of_birth,
      })}
      </Typography.Text>
      <Button onPress={logoutHandler}>logout</Button>
      <Button onPress={removeAccauntHandler}>remove accaunt</Button>
    </VStack>
  );
}

export {
    ProfilePage,
};
