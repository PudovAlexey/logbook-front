import { useGetUser } from '@app/providers/UserProvider/ui/UserProvider';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { loginEndpoints } from '@shared/api/loginEndpoints/loginEndpoints';
import { useLazyMutation } from '@shared/lib/queryHooks/UseLazyMutation';
import { useNotification } from '@shared/ui/AlertContext/ui/AlertContext';
import { Button } from '@shared/ui/Button/ui/Button';
import { Input } from '@shared/ui/Input/Input';
import { PageWrapper } from '@shared/ui/PageWrapper/ui/PageWrapper';
import { VStack } from '@shared/ui/VStack/VStack';
import { useState } from 'react';

function RegisterVerificationCodePage({ navigation }: NativeStackHeaderProps) {
    const notify = useNotification();
    const verfificationCodeMutation = useLazyMutation(loginEndpoints.registerVerify);
    const { userId } = useGetUser();
    const [verificationCode, setVerificationCode] = useState('');

    const onSubmit = () => {
      const req = verfificationCodeMutation({
            id: userId,
            body: {
                verifyCode: +verificationCode,
            },
        })
        .then(({data, error}) => {
            if (error) {
                notify?.notify({
                    status: 'error',
                    message: 'creating',
                    description: JSON.stringify(error),
                });
            } else {
                navigation.replace('login');
            }
        })
    };
  return (
        <PageWrapper>
            <VStack
                justifyContent="center"
                gap={10}
            >
            <Input
                 addonAfter={(
                    <Button
                    shape="square"
                      onPress={onSubmit}
                    >
                        send
                    </Button>
          )}
          status="error"
        //   validationText={validationErrors?.email?.message}
          label="login"
          onChangeText={(e) => setVerificationCode(e)}
          value={verificationCode}
            />

            </VStack>
        </PageWrapper>
  );
}

export {
    RegisterVerificationCodePage,
};
