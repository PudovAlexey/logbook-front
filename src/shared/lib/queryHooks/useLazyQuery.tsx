import React from 'react'
import { Endpoint } from './types'

type UseQueryProps<T extends unknown> = {
    endpoint: Endpoint<T>
    params: T
}

function useLazyQuery() {
  return <T extends unknown>({endpoint, params}: UseQueryProps<T>) =>  
  fetch(`${process.env.API_URL}/${endpoint.query(params)}`)
  .then((res) => res.json())
}

export {
    useLazyQuery
}
