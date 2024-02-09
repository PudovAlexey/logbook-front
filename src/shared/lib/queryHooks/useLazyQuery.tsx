import React from 'react'
import { Endpoint } from './types'

type UseQueryProps<T extends unknown> = {
    endpoint: Endpoint<T>
    params: T
}

function useLazyQuery() {
  return <T extends unknown>({endpoint, params}: UseQueryProps<T>) =>  
  fetch(`https://jsonplaceholder.typicode.com/${endpoint.query(params)}`)
  .then((res) => res.json())
}

export {
    useLazyQuery
}
