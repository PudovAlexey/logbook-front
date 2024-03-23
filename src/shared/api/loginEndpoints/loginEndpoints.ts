import { MutationEndpoint } from "@shared/lib/queryHooks/UseLazyMutation"

const loginEndpoints = {

    login: ({body}: {body: {email: string, password: string}}): MutationEndpoint => ({
        query: 'login',
        body: body,
        method: 'POST'
    }),
    logout: (): MutationEndpoint => ({
        query: 'logout',
        method: 'POST'
    })
}

export {
    loginEndpoints
}