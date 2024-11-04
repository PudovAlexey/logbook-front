import { useGetUser } from '@app/providers/UserProvider/ui/UserProvider';
import { formatUserName } from '@shared/lib/formatters/formatUserName';
import { Avatar } from '@shared/ui/Avatar/ui/Avatar';
import { Typography } from '@shared/ui/Typography';
import { VStack } from '@shared/ui/VStack/VStack';

type UserAvatarEditorProps = {
    avatarUrl?: string
    onAvatarChange?: () => void
}

function UserAvatarEditor({ avatarUrl, onAvatarChange }: UserAvatarEditorProps) {
    const { user } = useGetUser();

    if (!user) {
        return null;
    }

  return (
    <VStack>
        {avatarUrl ? (
<Avatar
            rounded
            onPress={onAvatarChange}
            source={{ uri: avatarUrl }}
/>
) : (
            <Avatar
            rounded
            onPress={onAvatarChange}
            // icon={{ name: "pencil", type: "font-awesome" }}
            title={formatUserName({
                name: user.name,
                surname: user.surname,
                patronymic: user.patronymic,
                type: 'char',
            })}
            containerStyle={{ backgroundColor: '#9700b9' }}
            />
        )}
        <Typography.Text>
{formatUserName({
            name: user.name,
            surname: user.surname,
            patronymic: user.patronymic,
        })}
        </Typography.Text>
    </VStack>
  );
}

export {
    UserAvatarEditor,
};
