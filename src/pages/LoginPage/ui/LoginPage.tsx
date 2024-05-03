import { Button } from '@shared/ui/Button/ui/Button';
import { HStack } from '@shared/ui/HStack/HStack';
import { Input } from '@shared/ui/Input/Input';
import { VStack } from '@shared/ui/VStack/VStack';
import { useEffect, useState } from 'react';
import { useGetUser, useLoginHandlers } from '@app/providers/UserProvider/ui/UserProvider';
import { useBackandStatuses } from '@shared/lib/apiHooks/useBackandErrors';
import { useNotification } from '@shared/ui/AlertContext/ui/AlertContext';
import { PageWrapper } from '@shared/ui/PageWrapper/ui/PageWrapper';
import { StyleSheet, Text, View } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

type LoginState = {
  login: string;
  password: string;
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    rowGap: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 8,
    // backgroundColor: 'aliceblue',
    // maxHeight: 400,
    // flexWrap: 'wrap',
    // alignContent: 'flex-start',
    // padding: 10,
  },

  formContainer: {},
});

function LoginPage({ navigation }: NativeStackHeaderProps) {
  const { user } = useGetUser();
  const notify = useNotification();
  const { validationErrors, setValidationErrors } = useBackandStatuses();
  const loginHandlers = useLoginHandlers();

  const [loginForm, setLoginForm] = useState<LoginState>({
    login: '',
    password: '',
  });

  const createAccauntHandler = () => {
    navigation.push('register');
  };

  const loginHandler = async () => {
    const res = await loginHandlers?.loginUserHandler({
      login: loginForm.login,
      password: loginForm.password,
    });

    if (res.error && res.error.detail) {
      setValidationErrors(res.error.detail);
    } else if (res.error) {
      notify?.notify({
        status: 'error',
        message: res.error,
      });
    } else {
      navigation.replace('main');

      notify?.notify({
        status: 'success',
        message: 'success',
      });
    }
  };

  const forgotPasswordHandler = () => {
    navigation.push('forgotPassword');
  };

  useEffect(() => {
    if (user) {
      navigation.replace('main');
    }
  }, [user, navigation]);

  return (
    <PageWrapper>
      <VStack
        justifyContent="center"
        gap={10}
      >
        <Input
          labelProps={{
            label: 'login',
            validationText: validationErrors?.email?.message,
            required: true,
          }}
          onChangeText={(e) => setLoginForm((prev) => ({
              ...prev,
              login: e,
            }))}
          value={loginForm.login}
        />

        <Input
          labelProps={{
            label: 'password',
            validationText: validationErrors?.password?.message,
            status: 'error',
            required: true,
          }}
          secureTextEntry
          onChangeText={(e) => setLoginForm((prev) => ({
              ...prev,
              password: e,
            }))}
          value={loginForm.password}
        />

        <VStack
          height="auto"
          gap={4}
        >
          <Button onPress={loginHandler}>login</Button>
          <Button
            type="clear"
            onPress={createAccauntHandler}
          >
            create accaunt
          </Button>
          <Button
            type="clear"
            onPress={forgotPasswordHandler}
          >
            forgot password
          </Button>
        </VStack>
      </VStack>
    </PageWrapper>
  );
}

export { LoginPage };
