import { useGetUser } from '@app/providers/UserProvider/ui/UserProvider';
import { formatUserName } from '@shared/lib/formatters/formatUserName';
import { Avatar } from '@shared/ui/Avatar/ui/Avatar';
import { Typography } from '@shared/ui/Typography';
import { VStack } from '@shared/ui/VStack/VStack';
import {View} from 'react-native';

function UserAvatarEditor() {
    const {user} = useGetUser();

    if (!user) {
        return null;
    }

  return (
    <VStack>
        <Avatar
            rounded
            // icon={{ name: "pencil", type: "font-awesome" }}
            title={formatUserName({
                name: user.name,
                surname: user.surname,
                patronymic: user.patronymic,
                type: 'char',
            })}
            containerStyle={{ backgroundColor: "#9700b9" }}
        />
        <Typography.Text>{formatUserName({
            name: user.name,
            surname: user.surname,
            patronymic: user.patronymic,
        })}</Typography.Text>
    </VStack>
  )
}

export {
    UserAvatarEditor
}
