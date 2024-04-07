import { MutationEndpoint } from "@shared/lib/queryHooks/UseLazyMutation"
import { Endpoint } from "@shared/lib/queryHooks/types"

const loginEndpoints = {

    login: ({body}: {body: {email: string, password: string}}): MutationEndpoint => ({
        query: 'login',
        body: body,
        method: 'POST'
    }),
    logout: (): MutationEndpoint => ({
        query: 'logout',
        method: 'POST'
    }),

    removeUser: ({id}: {id: string}): MutationEndpoint => ({
        query: `remove_account/${id}`,
        method: 'POST'
    }),

    refreshTokens: ({uuid, refreshToken}: {uuid: string, refreshToken: string}): Endpoint<any> => ({
        key: 'refresh',
        query: () => `/refresh-tokens?refresh_token=${refreshToken}&id=${uuid}`,
        // method: 'GET',
    })
}

export {
    loginEndpoints
}