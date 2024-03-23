type MutationEndpoint = {
    query: string
    body?: unknown
    method: 'POST' | 'PUT' | 'PATCH'
}

function UseLazyMutation() {
  return async (endpoint: MutationEndpoint) => {
    const query = await fetch(`${process.env.API_URL}${endpoint.query}`, {
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(endpoint.body),
        method: endpoint.method
    })
    .then((res) => res.json())
    return query
  }
}

export {
    UseLazyMutation
}

export type {
    MutationEndpoint
}


