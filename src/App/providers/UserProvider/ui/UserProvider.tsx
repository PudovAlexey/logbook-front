import React, { PropsWithChildren, createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { User, userSlice } from '../model/UserSlice';
import { observer } from 'mobx-react-lite';
import { UseLazyMutation } from '@shared/lib/queryHooks/UseLazyMutation';
import { loginEndpoints } from '@shared/api/loginEndpoints/loginEndpoints';
import { useNotification } from '@shared/ui/AlertContext/ui/AlertContext';
import { useAsyncStorage } from '@shared/lib/hooks/useAsyncStorage';
import { useLazyQuery } from '@shared/lib/queryHooks/useLazyQuery';

type LoginUserHandlers = {
  loginUserHandler: (value: { login: string; password: string }) => void;
  logoutUserHandler: () => void;
};

const UserContext = createContext<User | null>(null);
const loginHandlersContext = createContext<LoginUserHandlers | null>(null);

const UserProvider = observer(({ children }: PropsWithChildren) => {
  const [refreshTimer, setRefreshTimer] = useState(0);
  const {storage: userId, setStorage: setUserId} = useAsyncStorage('user-id', '');
  const { storage: refreshToken, setStorage: setRefreshToken } = useAsyncStorage('refresh-token', '');
  const notification = useNotification();
  const mutation = UseLazyMutation();
  const getQuery = useLazyQuery();
  const user = userSlice.user;

  const refreshTokensHandler = useCallback(async ({id, refreshToken}: {id: string, refreshToken: string}) => {
    if (id && refreshToken) {
      // const res = await getQuery(
      //   loginEndpoints.refreshTokens({
      //     uuid: id,
      //     refreshToken: refreshToken,
      //   })
      // );

      const res = await fetch(`${process.env.API_URL}${`refresh-tokens?id=${id}&refresh_token=${refreshToken}`}`)
      .then((res) => res.json())

      console.log(res, 'res')
      if (res.error) {
        console.log('error');
      } else {
        setRefreshToken(res.data.token.refresh_token);
        setRefreshTimer(new Date(new Date(res.data.token.access_expired_in).getTime() - 5 * 60000).getTime())
        userSlice.setUser(res.data.data);
        setUserId(res.data.data.id)
        return res;
      }
    }
  }, []);

  const loginUserHandler: LoginUserHandlers['loginUserHandler'] = async ({ login, password }) => {
    const res = await mutation(
      loginEndpoints.login({
        body: {
          email: login,
          password: password,
        },
      })
    );

    if (res.error) {
      return res;
    } else {
      setRefreshToken(res.token.refresh_token);
      setRefreshTimer(new Date(new Date(res.token.access_expired_in).getTime() - 5 * 60000).getTime())
      userSlice.setUser(res.data);
      setUserId(res.data.id)
      return res;
    }
  };

  const logoutUserHandler: LoginUserHandlers['logoutUserHandler'] = () => {
    setRefreshToken('');
    mutation(loginEndpoints.logout());
  };

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
    <UserContext.Provider value={user || null}>
      <loginHandlersContext.Provider
        value={useMemo(
          () => ({
            loginUserHandler,
            logoutUserHandler,
          }),
          []
        )}
      >
        {children}
      </loginHandlersContext.Provider>
    </UserContext.Provider>
  );
});

const useGetUser = () => {
  return useContext(UserContext);
};

const useLoginHandlers = () => {
  return useContext(loginHandlersContext);
};

export { UserProvider, useGetUser, useLoginHandlers };
