import { useGetUser } from "@app/providers/UserProvider/ui/UserProvider"

type MutationEndpoint = {
    query: string
    body?: unknown
    method: 'POST' | 'PUT' | 'PATCH'
}

function UseLazyMutation() {
    const user = useGetUser();
  return async (endpoint: MutationEndpoint) => {
    const query = await fetch(`${process.env.API_URL}${endpoint.query}`, {
        headers: {
            "Content-Type": 'application/json',
            access_token: user?.access_token || ''
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
    UseLazyMutation
}

export type {
    MutationEndpoint
}


