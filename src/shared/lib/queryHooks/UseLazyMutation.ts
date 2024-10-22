/* eslint-disable no-unused-vars */
import { useGetUser } from '@app/providers/UserProvider/ui/UserProvider';
import { transformDict } from '../formatters/transformDict';
import { camelCaseIntoToken } from '../formatters/camelCaseIntoToken';

type UrlParams = {
  url: string;
  body?: unknown;
  method: 'POST' | 'PUT' | 'PATCH';
};

type MutationEndpoint<P, _R> = {
  query: (params: P) => UrlParams;
};

function makeBody(e: unknown) {
  switch (typeof e) {
    case 'object':
      return transformDict({
        dict: e,
        parser: (key, value) => ({
          key: camelCaseIntoToken({ value: key }),
          value,
        }),
      });
    case 'string':
      return camelCaseIntoToken(e);
    default:
      e;
  }
}

function useLazyMutation<P, R>(endpointMutation: MutationEndpoint<P, R>) {
  const { user } = useGetUser();

  return async (
    params: P,
  ): Promise<{
    data: R;
    error: any;
  }> => {
    const endpoint = endpointMutation.query(params);

    const query = await fetch(`${'http://10.96.183.36:8082/'}${endpoint.url}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user?.access_token}`,
      },
      body: JSON.stringify(makeBody(endpoint.body)),
      method: endpoint.method,
    }).then(async (res) => {
      if (!res.ok) {
        try {
          return {
            error: await res.json(),
          };
        } catch (e) {
          return {
            error: `${res.status} ${res.statusText}`,
          };
        }
      }
      return res.json();
    });
    return query;
  };
}

export { useLazyMutation };

export type { MutationEndpoint };
