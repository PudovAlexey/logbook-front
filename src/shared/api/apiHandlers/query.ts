import { QueryEndpoint } from '@shared/lib/queryHooks/useLazyQuery';

function query<R, P>(endpoint: QueryEndpoint<P, R>) {
  return endpoint;
}

export { query };
