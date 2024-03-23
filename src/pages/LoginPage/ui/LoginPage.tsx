import { Button } from '@shared/ui/Button/ui/Button';
import { HStack } from '@shared/ui/HStack/HStack';
import { Input } from '@shared/ui/Input/Input';
import { Typography } from '@shared/ui/Typography';
import { VStack } from '@shared/ui/VStack/VStack';
import {styles} from './styles';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { UseLazyMutation } from '@shared/lib/queryHooks/UseLazyMutation';
import { loginEndpoints } from '@shared/api/loginEndpoints/loginEndpoints';
import { useLoginHandlers } from '@app/providers/UserProvider/ui/UserProvider';

type LoginState = {
  login: string,
  password: string,
}

function LoginPage({ navigation }) {  
  const loginHandlers = useLoginHandlers();

  const [loginForm, setLoginForm] = useState<LoginState>({
    login: '',
    password: ''
  })


  const createAccauntHandler = () => {

  }

  const loginHandler = () => {
    loginHandlers?.loginUserHandler({
      login: loginForm.login,
      password: loginForm.password
    })
  }

  const forgotPasswordHandler = () => {

  }

  return (
    <HStack height={'100%'} width={'100%'} justifyContent="center" alignItems="center">
      <VStack style={styles.formContainer} gap={10}>
        <VStack alignItems="flex-start" gap={4}>
          <Typography.Text style={styles.typographySpace}>Login</Typography.Text>
          <Input onChangeText={(e) => setLoginForm((prev) => ({
            ...prev,
            login: e
          }))} value={loginForm.login}/>
        </VStack>

        <VStack alignItems="flex-start" gap={4}>
        <Typography.Text style={styles.typographySpace}>password</Typography.Text>
          <Input onChangeText={(e) => setLoginForm((prev) => ({
            ...prev,
            password: e
          }))} value={loginForm.password}/>
        </VStack>
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
