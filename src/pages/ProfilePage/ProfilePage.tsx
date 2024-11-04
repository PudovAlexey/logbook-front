import { useGetUser, useLoginHandlers } from '@app/providers/UserProvider/ui/UserProvider';
import { UserAvatarEditor } from '@features/UserAvatarEditor/ui/UserAvatarEditor';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Button } from '@shared/ui/Button/ui/Button';
import { Typography } from '@shared/ui/Typography';
import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useLazyQuery } from '@shared/lib/queryHooks/useLazyQuery';
import { loginEndpoints } from '@shared/api/loginEndpoints/loginEndpoints';
import { useStyles } from './useStyles';

// const uploadImage = async (image: any, user: string) => {
//   const fileName = image.fileName || 'image.jpg'; // Имя файла
//   const mimeType = image.mimeType || 'image/jpeg'; // Тип файла

//   // Добавляем изображение в FormData

//   const formData = new FormData();
//   formData.append('image', {
//     uri: image.uri,
//     name: fileName,
//     type: mimeType,
//   });

//   try {
//     const response = await fetch(`${process.env.API_URL}set_avatar/${user}`, {
//       method: 'POST',
//       body: formData,
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });

//     const data = await response.json();
//     console.log(data); // Обработка ответа сервера
//   } catch (error) {
//     console.error('Error uploading image:', error);
//   }
// };

function ProfilePage({ navigation }: NativeStackHeaderProps) {
  const getAvatarUrl = useLazyQuery(loginEndpoints.getUserAvatarQuery);
  const [imageUrl, setImageUrl] = useState<string>('');
  const { user } = useGetUser();

  useEffect(() => {
    if (user?.id) {
      getAvatarUrl({ id: user.id })
      .then(({ data }) => {
        setImageUrl(data);
      });
    }
  }, [user, getAvatarUrl]);

  const pickImage = async () => {
    const formData = new FormData();
    // Запрос разрешения на доступ к галерее
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    // Запуск выбора изображения
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

  formData.append('image', {
    uri: result.assets[0].uri,
    name: result.assets[0].fileName,
    type: result.assets[0].mimeType,
  });

    fetch(`${process.env.API_URL}set_avatar/${user?.id}`, {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => res.json())
    .then(({ data }) => {
      setImageUrl(data);
    });
  };
  const loginHandlers = useLoginHandlers();
  const { wrapper, buttonBlock, mainBlock } = useStyles();

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
    <View style={wrapper}>
      <View style={mainBlock}>
      <UserAvatarEditor onAvatarChange={pickImage} avatarUrl={imageUrl} />
      <Typography.Text>{user?.email}</Typography.Text>
      </View>
      <View style={buttonBlock}>
        <Button onPress={logoutHandler}>logout</Button>
        <Button onPress={removeAccauntHandler}>remove accaunt</Button>
      </View>
    </View>
    //     <View>
    //       <UserAvatarEditor />
    //       <Typography.Text>{user?.email}</Typography.Text>
    //       <Text>
    // {formatDate({
    //         date: user?.date_of_birth,
    //       })}
    //       </Text>
    //     </View>
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
