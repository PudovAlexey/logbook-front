import React from 'react'
import { Endpoint } from './types'
import { useGetUser } from '@app/providers/UserProvider/ui/UserProvider'

type UseQueryProps<T extends unknown> = {
    endpoint: Endpoint<T>
    params: T
}

function useLazyQuery() {
  const {user} = useGetUser();
  return <T extends unknown>({endpoint, params}: UseQueryProps<T>) =>  {
    return fetch(`${process.env.API_URL}/${endpoint.query(params)}`, {
      headers: {
        access_token: user?.access_token || ''
      }
    })
    .then((res) => res.json())
  }
}

export {
    useLazyQuery
}
