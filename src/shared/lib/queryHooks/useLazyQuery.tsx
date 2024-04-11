import { useGetUser } from '@app/providers/UserProvider/ui/UserProvider';

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
      return res.json();
    });
    return query;
  };
}

export {
    useLazyQuery,
};

export type {
  QueryEndpoint,
};
