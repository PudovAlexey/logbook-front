import { Button } from '@shared/ui/Button/ui/Button';
import { HStack } from '@shared/ui/HStack/HStack';
import { Input } from '@shared/ui/Input/Input';
import { VStack } from '@shared/ui/VStack/VStack';
import { useState } from 'react';
import { useLoginHandlers } from '@app/providers/UserProvider/ui/UserProvider';
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

    // console.log(navigation);

    if (res.error) {
      setValidationErrors(res.error.detail);
    } else {
      navigation.replace('main');

      notify?.notify({
        status: 'success',
        message: JSON.stringify(res),
      });
    }
  };

  const forgotPasswordHandler = () => {
    navigation.push('forgotPassword');
  };

  return (
    <PageWrapper>
      <VStack
        justifyContent="center"
        gap={10}
      >
        <Input
          status="error"
          validationText={validationErrors?.email?.message}
          label="login"
          onChangeText={(e) => setLoginForm((prev) => ({
              ...prev,
              login: e,
            }))}
          value={loginForm.login}
        />

        <Input
          secureTextEntry
          label="password"
          status="error"
          validationText={validationErrors?.password?.message}
          onChangeText={(e) => setLoginForm((prev) => ({
              ...prev,
              password: e,
            }))}
          value={loginForm.password}
        />

        <VStack height="auto" gap={4}>
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
