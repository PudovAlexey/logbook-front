import React, { PropsWithChildren, createContext, useContext, useMemo } from 'react'
import { User, userSlice } from '../model/UserSlice';
import { observer } from "mobx-react-lite"
import { UseLazyMutation } from '@shared/lib/queryHooks/UseLazyMutation';
import { loginEndpoints } from '@shared/api/loginEndpoints/loginEndpoints';

type LoginUserHandlers = {
  loginUserHandler: (value: {login: string, password: string}) => void
  logoutUserHandler: () => void
}

const UserContext = createContext<User | null>(null);
const loginHandlersContext = createContext<LoginUserHandlers | null>(null)

const UserProvider = observer(({children}: PropsWithChildren) => {
  const mutation = UseLazyMutation();
    const user = userSlice.user

    const loginUserHandler: LoginUserHandlers['loginUserHandler'] = ({login, password}) => {
      mutation(loginEndpoints.login({
        body: {
          email: login,
          password: password,
        }
      }))
    }

    const logoutUserHandler: LoginUserHandlers['logoutUserHandler'] = () => {
      mutation(loginEndpoints.logout()) 
    }

    return (
      <UserContext.Provider value={user || null}>
          <loginHandlersContext.Provider value={useMemo(() => ({
            loginUserHandler,
            logoutUserHandler,
          }), [])}>
          {children}
          </loginHandlersContext.Provider>
      </UserContext.Provider>
    )
  })

  const useGetUser = () => {
    return useContext(UserContext)
  }

  const useLoginHandlers = () => {
    return useContext(loginHandlersContext)
  }

export {
    UserProvider,
    useGetUser,
    useLoginHandlers
}
