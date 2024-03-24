type MutationEndpoint = {
    query: string
    body?: unknown
    method: 'POST' | 'PUT' | 'PATCH'
}

function UseLazyMutation() {
  return async (endpoint: MutationEndpoint) => {
    const query = await fetch(`http://192.168.1.36:8080/${endpoint.query}`, {
        headers: {
            "Content-Type": 'application/json',
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


