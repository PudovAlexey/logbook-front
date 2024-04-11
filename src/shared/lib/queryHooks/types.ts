type Endpoint<T> = {
    key: string
    // eslint-disable-next-line no-unused-vars
    query: (params: T) => string
}

type Endpoints = Record<string, Endpoint<unknown>>

export type {
    Endpoint,
    Endpoints,
};
