import { useGetUser } from '@app/providers/UserProvider/ui/UserProvider';
import { useMemo } from 'react';

type UrlParams = {
    url: string
    body?: unknown;
    method: 'POST' | 'PUT' | 'PATCH';
}

type MutationEndpoint<P, R> = {
  query: (params: P) => UrlParams
};

function useLazyMutation<P, R>(endpointMutation: MutationEndpoint<P, R>) {
  const { user } = useGetUser();

  
  return async (params: P): Promise<{
    data: R,
    error: any
  }> => {
      const endpoint = endpointMutation.query(params);

    const query = await fetch(`${process.env.API_URL}${endpoint.url}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user?.access_token}`,
      },
      body: JSON.stringify(endpoint.body),
      method: endpoint.method,
    }).then(async (res) => {
      if (!res.ok) {
        return {
          error: await res.json(),
        };
      } else {
        return res.json();
      }
    });
    return query;
  };
}

export { useLazyMutation };

export type { MutationEndpoint };
