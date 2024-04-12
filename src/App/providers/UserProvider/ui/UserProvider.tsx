import React, {
 PropsWithChildren, createContext, useCallback, useContext, useEffect, useMemo, useState,
} from 'react';
import { observer } from 'mobx-react-lite';
import { useLazyMutation } from '@shared/lib/queryHooks/UseLazyMutation';
import { loginEndpoints } from '@shared/api/loginEndpoints/loginEndpoints';
import { useAsyncStorage } from '@shared/lib/hooks/useAsyncStorage';
import { User, userSlice } from '../model/UserSlice';

type LoginUserHandlers = {
  // eslint-disable-next-line no-unused-vars
  loginUserHandler: (value: { login: string; password: string }) => any;
  logoutUserHandler: () => void;
  removeUserHandler: () => void;
};

const UserContext = createContext<{
  user: User | null;
  refreshTimer: number;
  setRefreshTimer: React.Dispatch<React.SetStateAction<number>>;
}>({
  user: null,
  refreshTimer: 0,
  setRefreshTimer: () => {},
});
// const loginHandlersContext = createContext<LoginUserHandlers | null>(null);

const UserProvider = observer(({ children }: PropsWithChildren) => {
  const [refreshTimer, setRefreshTimer] = useState<number>(0);
  const { storage: userId, setStorage: setUserId } = useAsyncStorage('user-id', '');
  const { storage: refreshToken, setStorage: setRefreshToken } = useAsyncStorage('refresh-token', '');
  // const notification = useNotification();
  const { user } = userSlice;

  const refreshTokensMutation = useLazyMutation(loginEndpoints.refreshTokens);

  const refreshTokensHandler = useCallback(async ({ id, refreshToken }: { id: string; refreshToken: string }) => {
    console.log(id, refreshToken);
    if (id && refreshToken) {
      const res = await refreshTokensMutation({
        refreshToken,
        uuid: id,
      });


      if (res.data) {
        setRefreshToken(res.data.token.refresh_token);
        setRefreshTimer(new Date(new Date(res.data.token.access_expired_in).getTime() - 5 * 60000).getTime());
        userSlice.setUser({
          ...res.data.data,
          access_token: res.data.token.access_token,
        });
        setUserId(res.data.data.id);
        return res;
      }
    }
    return false;
  }, [refreshTokensMutation, setRefreshToken, setUserId]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (refreshTimer > 0) {
      timer = setTimeout(() => {
        if (userId) {
          refreshTokensHandler({ id: userId, refreshToken });
        }
      }, refreshTimer);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [refreshTimer, userId, refreshToken, refreshTokensHandler]);

  useEffect(() => {
    if (userId) {
      refreshTokensHandler({ id: userId, refreshToken });
    }
  }, [userId, refreshToken, refreshTokensHandler]);

  return (
    <UserContext.Provider
      value={useMemo(
        () => ({
          user: user || null,
          refreshTimer,
          setRefreshTimer,
        }),
        [user, refreshTimer, setRefreshTimer],
      )}
    >
      {children}
    </UserContext.Provider>
  );
});

const useGetUser = () => {
  return useContext(UserContext);
};

const useLoginHandlers = () => {
  const { setStorage: setRefreshToken } = useAsyncStorage('refresh-token', '');
  const { setStorage: setUserId } = useAsyncStorage('user-id', '');

  const { user, setRefreshTimer } = useGetUser();

  const logoutMutation = useLazyMutation(loginEndpoints.logout);
  const loginMutation = useLazyMutation(loginEndpoints.login);
  const removeUserMutation = useLazyMutation(loginEndpoints.removeUser);

  const loginUserHandler: LoginUserHandlers['loginUserHandler'] = useCallback(async ({ login, password }) => {
    const res = await loginMutation({
      body: {
        email: login,
        password,
      },
    });

    if (res.error) {
      return res;
    }
      setRefreshToken(res.data.token.refresh_token);
      setRefreshTimer(new Date(new Date(res.data.token.access_expired_in).getTime() - 5 * 60000).getTime());
      userSlice.setUser({
        ...res.data.data,
        access_token: res.data.token.access_token,
      });
      setUserId(res.data.data.id);
      return res;
  }, [loginMutation, setRefreshTimer, setRefreshToken, setUserId]);

  const logoutUserHandler: LoginUserHandlers['logoutUserHandler'] = async () => {
    setRefreshToken('');

    return await logoutMutation(null);
  };

  const removeUserHandler = () => {
    if (user) {
      removeUserMutation({ id: user.id });
    }
  };
  return {
    loginUserHandler,
    logoutUserHandler,
    removeUserHandler,
  };
};

export { UserProvider, useGetUser, useLoginHandlers };
