import { useGetUser } from '@app/providers/UserProvider/ui/UserProvider';
import { useCallback } from 'react';
import { useLogger } from '@shared/ui/LoggerProvider/LoggerProvider';
import { formatQueryParams } from '../formatters/formatQueryParams';

type UrlParams = {
  url: string
  params: Record<string, string>
}

// eslint-disable-next-line no-unused-vars
type QueryEndpoint<P, _R> = {
  // eslint-disable-next-line no-unused-vars
  query: (params: P) => UrlParams
};

function useLazyQuery<P, R>(endpointMutation: QueryEndpoint<P, R>) {
  const { loggerPush } = useLogger();
  const { user } = useGetUser();

  return useCallback(async (params: P): Promise<{
    data: R,
    error: any
  }> => {
      const endpoint = endpointMutation.query(params);
      const queryParams = formatQueryParams({
        params: endpoint.params,
      });

      const url = `${process.env.API_URL}${endpoint.url}${queryParams}`;

    const query = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user?.access_token}`,
      },
      method: 'GET',
    }).then(async (res) => {
      return res.json();
    }).then((res) => {
      if (loggerPush) {
        loggerPush({
          title: `query ${url}`,
          data: res,
          color: 'query',
        });
      }

      return res;
    })
    .catch((error) => {
       if (loggerPush) {
        loggerPush({
          title: `query ${url}`,
          data: error,
          color: 'queryError',
        });
       }
    });
    return query;
  }, [endpointMutation, user?.access_token, loggerPush]);
}

export {
    useLazyQuery,
};

export type {
  QueryEndpoint,
};
