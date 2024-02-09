type Endpoint<T> = {
    key: string
    query: (params: T) => string
}

type Endpoints = Record<string, Endpoint<unknown>>

export type {
    Endpoint,
    Endpoints
}