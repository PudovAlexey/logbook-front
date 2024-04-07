import { useGetUser } from "@app/providers/UserProvider/ui/UserProvider"
import { useMemo } from "react"

type MutationEndpoint = {
    query: string
    body?: unknown
    method: 'POST' | 'PUT' | 'PATCH'
}

function useLazyMutation({accessToken}: {accessToken?: string}) {
    const {user} = useGetUser();
    const token = user?.access_token || accessToken || '';
  return async (endpoint: MutationEndpoint) => {
    const query = await fetch(`${process.env.API_URL}${endpoint.query}`, {
        headers: {
            "Content-Type": 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(endpoint.body),
        method: endpoint.method
    })
    .then(async (res) => {
     if (!res.ok) {
            return {
                error: await res.json()
            }
        } else {
            return res.json()
     }
    })
    return query
  }
}

export {
    useLazyMutation
}

export type {
    MutationEndpoint
}


