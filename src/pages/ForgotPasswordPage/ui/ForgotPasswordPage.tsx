import { HStack } from '@shared/ui/HStack/HStack';
import { Input } from '@shared/ui/Input/Input';
import { VStack } from '@shared/ui/VStack/VStack';
import { useEffect, useState } from 'react';
import { Button } from '@shared/ui/Button/ui/Button';
import { useNotification } from '@shared/ui/AlertContext/ui/AlertContext';
import { loginEndpoints } from '@shared/api/loginEndpoints/loginEndpoints';
import { useLazyMutation } from '@shared/lib/queryHooks/UseLazyMutation';
import { PageWrapper } from '@shared/ui/PageWrapper/ui/PageWrapper';
import Icon from 'react-native-vector-icons/AntDesign';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

type FormData = {
  email: string;
  secretCode: number | null;
  password: string;
  confirmPassword: string;
};

function ForgotPasswordPage({ navigation }: NativeStackHeaderProps) {
  const [expireSend, setExpireSend] = useState(0);
  const notify = useNotification();
  const sendVerificationMutation = useLazyMutation(loginEndpoints.requestVerificationCode);
  const submitChangePasswordMutation = useLazyMutation(loginEndpoints.submitChangePassword);
  const [loginForm, setLoginForm] = useState<FormData>({
    email: '',
    secretCode: null,
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    if (expireSend > 0) {
      setTimeout(() => {
        setExpireSend((prev) => prev - 1);
      }, 1000);
    }
  }, [expireSend]);

  const onChangeValue = ({ value, token }: { value: string; token: keyof FormData }) => {
    setLoginForm((prev) => ({
      ...prev,
      [token]: value,
    }));
  };

  const requestVerificationCode = async () => {
    const verificationCode = await sendVerificationMutation({
      email: loginForm.email,
    });

    if (verificationCode.data) {
      setExpireSend(verificationCode.data.timer);
    } else {
      notify?.notify({
        status: 'error',
        message: 'failed to send verification code',
      });
    }
  };

  const submitResetPasswordHandler = async () => {
    const { email, ...body } = loginForm;
    const submitResult = await submitChangePasswordMutation({
      email,
      body,
    });

    if (submitResult.data) {
      navigation.replace('login');
    } else {
      notify?.notify({
        status: 'error',
        message: 'failed to change password, please try again',
      });
    }
  };

  return (
    <PageWrapper mode="centered">
      <VStack
        justifyContent="center"
        gap={10}
      >
        <Input
          labelProps={{
            label: 'email',
            required: true,
          }}
          value={loginForm.email}
          onChangeText={(e) => onChangeValue({ value: e, token: 'email' })}
        />
        <Input
          value={loginForm.secretCode ? String(loginForm.secretCode) : ''}
          labelProps={{
            label: 'secret code',
            required: true,
          }}
          onChangeText={(e) => onChangeValue({ value: +e, token: 'secretCode' })}
          addonAfter={(
            <Button
              size="xl"
              shape="square"
              disabled={expireSend > 0}
              onPress={requestVerificationCode}
            >
              {expireSend > 0 ? (
                expireSend
              ) : (
                <Icon
                  size={24}
                  name="mail"
                />
              )}
            </Button>
          )}
        />
        <Input
          value={loginForm.password}
          labelProps={{
            label: 'password',
            required: true,
          }}
          secureTextEntry
          onChangeText={(e) => onChangeValue({ value: e, token: 'password' })}
        />
        <Input
          secureTextEntry
          value={loginForm.confirmPassword}
          labelProps={{
            label: 'confirm password',
            required: true,
          }}
          onChangeText={(e) => onChangeValue({ value: e, token: 'confirmPassword' })}
        />
        <Button onPress={submitResetPasswordHandler}>submit</Button>
      </VStack>
    </PageWrapper>
  );
}

export { ForgotPasswordPage };
