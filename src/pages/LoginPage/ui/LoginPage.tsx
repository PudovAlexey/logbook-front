import { Button } from '@shared/ui/Button/ui/Button';
import { HStack } from '@shared/ui/HStack/HStack';
import { Input } from '@shared/ui/Input/Input';
import { VStack } from '@shared/ui/VStack/VStack';
import {styles} from './styles';
import { useEffect, useState } from 'react';
import { useLoginHandlers } from '@app/providers/UserProvider/ui/UserProvider';
import { useBackandStatuses } from '@shared/lib/apiHooks/useBackandErrors';
import { useNotification } from '@shared/ui/AlertContext/ui/AlertContext';

type LoginState = {
  login: string,
  password: string,
}

function LoginPage({ navigation }) {
  const notify = useNotification()
  const {validationErrors, setValidate} = useBackandStatuses();
  const loginHandlers = useLoginHandlers();
  const [] = useState();

  useEffect(() => {
    console.log(loginHandlers)
  }, []);

  const [loginForm, setLoginForm] = useState<LoginState>({
    login: '',
    password: ''
  })


  const createAccauntHandler = () => {

  }

  const loginHandler = async () => {
   const res = await loginHandlers?.loginUserHandler({
      login: loginForm.login,
      password: loginForm.password
    })

    if (res.error) {
      notify?.notify({
        status: 'error',
        message: JSON.stringify(res)
      })
    } else {
      notify?.notify({
        status: 'success',
        message: JSON.stringify(res)
      })
    }
  }

  const forgotPasswordHandler = () => {

  }

  return (
    <HStack height={'100%'} width={'100%'} justifyContent="center" alignItems="center">
      <VStack style={styles.formContainer} gap={18}>
      <Input
        status={validationErrors?.['email']?.status}
        validationText={validationErrors?.['email']?.message}
        label="login"
       onChangeText={(e) => setLoginForm((prev) => ({
            ...prev,
            login: e
          }))} value={loginForm.login}/>

        <Input
        label="password"
        status={validationErrors?.['password']?.status}
        validationText={validationErrors?.['password']?.message}
        onChangeText={(e) => setLoginForm((prev) => ({
            ...prev,
            password: e
          }))} value={loginForm.password}/>
        <VStack gap={4}>
          <Button onPress={loginHandler}>login</Button>
          <Button type="clear" onPress={createAccauntHandler}>create accaunt</Button>
          <Button type="clear" onPress={forgotPasswordHandler}>forgot password</Button>
        </VStack>
      </VStack>
    </HStack>
  )
}

export {
    LoginPage
}
