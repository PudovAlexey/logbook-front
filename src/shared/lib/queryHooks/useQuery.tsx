import { Endpoint } from "./types"
import {useQuery as TanstackQuery} from '@tanstack/react-query';

type UseQueryProps<T extends unknown> = {
    endpoint: Endpoint<T>
    params: T

}

 function useQuery<T extends unknown>({endpoint, params}: UseQueryProps<T>) {
  return TanstackQuery({
    queryKey: [endpoint.key],
    queryFn: () => fetch(`https://jsonplaceholder.typicode.com/${endpoint.query(params)}`)
    .then((res) => res.json())
  })
}

export {
    useQuery
}
