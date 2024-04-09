import React from 'react'
import { Endpoint } from './types'
import { useGetUser } from '@app/providers/UserProvider/ui/UserProvider'

type UrlParams = {
  url: string
}

type QueryEndpoint<P, R> = {
  query: (params: P) => UrlParams
};

function useLazyQuery<P, R>(endpointMutation: QueryEndpoint<P, R>) {
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
      method: 'GET',
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

export {
    useLazyQuery
}

export type {
  QueryEndpoint
}
