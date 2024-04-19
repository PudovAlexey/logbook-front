import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { loginEndpoints } from '@shared/api/loginEndpoints/loginEndpoints';
import { RegisterUserParams } from '@shared/api/loginEndpoints/types';
import { useLazyMutation } from '@shared/lib/queryHooks/UseLazyMutation';
import { useNotification } from '@shared/ui/AlertContext/ui/AlertContext';
import { Button } from '@shared/ui/Button/ui/Button';
import { Input } from '@shared/ui/Input/Input';
import { PageWrapper } from '@shared/ui/PageWrapper/ui/PageWrapper';
import { VStack } from '@shared/ui/VStack/VStack';
import { useState } from 'react';

function RegisterPage({ navigation }: NativeStackHeaderProps) {
  const notify = useNotification();
  const registerUserMutation = useLazyMutation(loginEndpoints.registerUser);
  const [registerForm, setRegisterForm] = useState<Partial<RegisterUserParams['body']>>({});

  const onCreateUser = async () => {
    registerUserMutation({
           body: registerForm as RegisterUserParams['body'],
    })
    .then(({ data, error }: any) => {
        if (error) {
            notify?.notify({
                status: 'error',
                message: 'creating',
                description: JSON.stringify(error),
            });
        } else {
            navigation.push('verificationCode');
        }
    });
  };

  return (
    <PageWrapper>
      <VStack
        justifyContent="center"
        gap={10}
      >

<Input
          labelProps={{
            label: 'email',
            status: 'error',
          }}
          //   validationText={validationErrors?.password?.message}
          onChangeText={(e) => setRegisterForm((prev) => ({
              ...prev,
              email: e,
            }))}
          value={registerForm.email}
/>

        <Input
          labelProps={{
            label: 'name',
            status: 'error',
          }}
          //   validationText={validationErrors?.password?.message}
          onChangeText={(e) => setRegisterForm((prev) => ({
              ...prev,
              name: e,
            }))}
          value={registerForm.name}
        />

        <Input
          labelProps={{
            label: 'surname',
            status: 'error',
          }}
          //   validationText={validationErrors?.password?.message}
          onChangeText={(e) => setRegisterForm((prev) => ({
              ...prev,
              surname: e,
            }))}
          value={registerForm.surname}
        />

        <Input
          labelProps={{
            label: 'patronymic',
            status: 'error',
          }}
          //   validationText={validationErrors?.password?.message}
          onChangeText={(e) => setRegisterForm((prev) => ({
              ...prev,
              patronymic: e,
            }))}
          value={registerForm.patronymic}
        />

        <Input
          secureTextEntry
          labelProps={{
            label: 'date of birth',
            status: 'error',
          }}
          //   validationText={validationErrors?.password?.message}
          onChangeText={(e) => setRegisterForm((prev) => ({
              ...prev,
              dateOfBirth: e,
            }))}
          value={registerForm.dateOfBirth}
        />

        <Input
          secureTextEntry
          labelProps={{
            label: 'password',
            status: 'error',
          }}
          //   label="date of birth"
          //   status="error"
          //   validationText={validationErrors?.password?.message}
          onChangeText={(e) => setRegisterForm((prev) => ({
              ...prev,
              password: e,
            }))}
          value={registerForm.password}
        />

        <Input
          secureTextEntry
          labelProps={{
            label: 'confirm password',
            status: 'error',
          }}
          //   label="confirm password"
          //   status="error"
          //   validationText={validationErrors?.password?.message}
          onChangeText={(e) => setRegisterForm((prev) => ({
              ...prev,
              confirmPassword: e,
            }))}
          value={registerForm.confirmPassword}
        />

        <Button onPress={onCreateUser}>create accaunt</Button>
      </VStack>
    </PageWrapper>
  );
}

export { RegisterPage };
