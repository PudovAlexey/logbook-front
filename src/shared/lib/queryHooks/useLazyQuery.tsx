import { useGetUser } from '@app/providers/UserProvider/ui/UserProvider';
import { useCallback } from 'react';

type UrlParams = {
  url: string
}

// eslint-disable-next-line no-unused-vars
type QueryEndpoint<P, _R> = {
  // eslint-disable-next-line no-unused-vars
  query: (params: P) => UrlParams
};

function useLazyQuery<P, R>(endpointMutation: QueryEndpoint<P, R>) {
  const { user } = useGetUser();

  return useCallback(async (params: P): Promise<{
    data: R,
    error: any
  }> => {
      const endpoint = endpointMutation.query(params);

    const query = await fetch(`${'http://192.168.1.36:8080/'}${endpoint.url}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user?.access_token}`,
      },
      method: 'GET',
    }).then(async (res) => {
      return res.json();
    });
    return query;
  }, [endpointMutation, user?.access_token]);
}

export {
    useLazyQuery,
};

export type {
  QueryEndpoint,
};
