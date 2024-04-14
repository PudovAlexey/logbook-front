import { HStack } from '@shared/ui/HStack/HStack';
import { Input } from '@shared/ui/Input/Input';
import { VStack } from '@shared/ui/VStack/VStack';
import { useState } from 'react';
import { Button } from '@shared/ui/Button/ui/Button';
import { useNotification } from '@shared/ui/AlertContext/ui/AlertContext';
import { useLazyQuery } from '@shared/lib/queryHooks/useLazyQuery';
import { loginEndpoints } from '@shared/api/loginEndpoints/loginEndpoints';

type FormData = {
  email: string;
  secretCode: string;
  password: string;
  confirmPassword: string;
};

function ForgotPasswordPage({ navigation }) {
  const notify = useNotification();
  const sendVerificationMutation = useLazyQuery(loginEndpoints.requestVerificationCode);
  const submitChangePasswordMutation = useLazyQuery(loginEndpoints.submitChangePassword);
  const [loginForm, setLoginForm] = useState<FormData>({
    email: '',
    secretCode: '',
    password: '',
    confirmPassword: '',
  });

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
            notify?.notify({
                status: 'success',
                message: 'verification code was sended',
                description: 'please check your email address',
            });
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
    <VStack>
      <Input
        value={loginForm.email}
        onChangeText={(e) => onChangeValue({ value: e, token: 'email' })}
        label="email"
      />
      <Input
        value={loginForm.secretCode}
        label="secret code"
        onChangeText={(e) => onChangeValue({ value: e, token: 'secretCode' })}
        addonAfter={<Button onPress={requestVerificationCode}>send email code</Button>}
      />
      <Input
        value={loginForm.password}
        label="password"
        secureTextEntry
        onChangeText={(e) => onChangeValue({ value: e, token: 'password' })}
      />
      <Input
        secureTextEntry
        value={loginForm.confirmPassword}
        label="confirm password"
        onChangeText={(e) => onChangeValue({ value: e, token: 'confirmPassword' })}
      />
      <Button onPress={submitResetPasswordHandler}>submit</Button>
    </VStack>
  );
}

export { ForgotPasswordPage };
