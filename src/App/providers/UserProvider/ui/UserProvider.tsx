import React, { PropsWithChildren, createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { User, userSlice } from '../model/UserSlice';
import { observer } from 'mobx-react-lite';
import { useLazyMutation } from '@shared/lib/queryHooks/UseLazyMutation';
import { loginEndpoints } from '@shared/api/loginEndpoints/loginEndpoints';
import { useNotification } from '@shared/ui/AlertContext/ui/AlertContext';
import { useAsyncStorage } from '@shared/lib/hooks/useAsyncStorage';
import { useLazyQuery } from '@shared/lib/queryHooks/useLazyQuery';

type LoginUserHandlers = {
  loginUserHandler: (value: { login: string; password: string }) => void;
  logoutUserHandler: () => void;
  removeUserHandler: () => void;
};

const UserContext = createContext<{
  user: User | null
  refreshTimer: number
  setRefreshTimer:  React.Dispatch<React.SetStateAction<number>>
}>({
  user: null,
  refreshTimer: 0,
  setRefreshTimer: () => {}
});
// const loginHandlersContext = createContext<LoginUserHandlers | null>(null);

const UserProvider = observer(({ children }: PropsWithChildren) => {
  const test = 12;
  const [refreshTimer, setRefreshTimer] = useState<number>(0);
  const {storage: userId, setStorage: setUserId} = useAsyncStorage('user-id', '');
  const { storage: refreshToken, setStorage: setRefreshToken } = useAsyncStorage('refresh-token', '');
  const notification = useNotification();
  const user = userSlice.user;

  useEffect(() => {
    console.log(user);
  }, []);

  const refreshTokensHandler = useCallback(async ({id, refreshToken}: {id: string, refreshToken: string}) => {
    if (id && refreshToken) {

      const res = await fetch(`${process.env.API_URL}${`refresh-tokens?id=${id}&refresh_token=${refreshToken}`}`)
      .then((res) => res.json())

      if (res.error) {
      } else {
        setRefreshToken(res.data.token.refresh_token);
        setRefreshTimer(new Date(new Date(res.data.token.access_expired_in).getTime() - 5 * 60000).getTime())
        userSlice.setUser({
          ...res.data.data,
          access_token: res.data.token.access_token,
        });
        setUserId(res.data.data.id)
        return res;
      }
    }
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (refreshTimer > 0) {
      timer = setTimeout(() => {
        if (userId) {
          refreshTokensHandler({id: userId, refreshToken})
        }
      }, refreshTimer)
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    }
  }, [refreshTimer, userId]);

  useEffect(() => {
  if (userId) {
    refreshTokensHandler({id: userId, refreshToken})
  }
  }, [userId]);

  return (
    <UserContext.Provider value={useMemo(() => ({
      user: user || null,
      refreshTimer, 
      setRefreshTimer
    }), [user, refreshTimer, setRefreshTimer])}>
    {children}
    </UserContext.Provider>
  );
});

const useGetUser = () => {
  return useContext(UserContext);
};

const useLoginHandlers = () => {
  const { storage: refreshToken, setStorage: setRefreshToken } = useAsyncStorage('refresh-token', '');
  const {storage: userId, setStorage: setUserId} = useAsyncStorage('user-id', '');

  const {user, refreshTimer, setRefreshTimer} = useGetUser();

  
  const logoutMutation = useLazyMutation(loginEndpoints.logout);
  const loginMutation = useLazyMutation(loginEndpoints.login);
  const removeUserMutation = useLazyMutation(loginEndpoints.removeUser);

  const loginUserHandler: LoginUserHandlers['loginUserHandler'] = async ({ login, password }) => {
    const res = await loginMutation({
      body: {
          email: login,
          password: password,
      }
    })

    if (res.error) {
      return res;
    } else {
      setRefreshToken(res.data.token.refresh_token);
      setRefreshTimer(new Date(new Date(res.data.token.access_expired_in).getTime() - 5 * 60000).getTime())
      userSlice.setUser({
        ...res.data,
        access_token: res.data.token.access_token,
      });
      setUserId(res.data.id)
      return res;
    }
  };

  const logoutUserHandler: LoginUserHandlers['logoutUserHandler'] = async () => {
    setRefreshToken('');

    return await logoutMutation(null);
  };

  const removeUserHandler = () => {
    if (user) {
      removeUserMutation({id: user.id});
    }
  }
  return {
    loginUserHandler,
    logoutUserHandler,
    removeUserHandler,
  }
};

export { UserProvider, useGetUser, useLoginHandlers };
