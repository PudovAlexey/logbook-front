import { MutationEndpoint } from "@shared/lib/queryHooks/UseLazyMutation"
import { Endpoint } from "@shared/lib/queryHooks/types"
import { builder } from "../apiHandlers"

const loginEndpoints = {
    login: builder.mutation<any, {body: {email: string, password: string}}>({
        query: ({body}) => ({
            url: 'login',
            method: 'POST',
            body,
        })
        // query: 'login',
        // body: body,
        // method: 'POST'
    }),

    // login: ({body}: {body: {email: string, password: string}}): MutationEndpoint => ({
    //     query: 'login',
    //     body: body,
    //     method: 'POST'
    // }),

    logout: builder.mutation<any, null>({
        query: () => ({
            url: 'logout',
            method: 'POST',
        })
    }),

    // removeUser: ({id}: {id: string}): MutationEndpoint => ({
    //     query: `remove_account/${id}`,
    //     method: 'POST'
    // }),
    removeUser: builder.mutation<any, {id: string}>({
        query: ({id}) => ({
            url: `remove_account/${id}`,
            method: 'POST',
        })
    }),

    refreshTokens: builder.mutation<any, {refreshToken: string, uuid: string}>({
        query: ({refreshToken, uuid}) => ({
            url: `/refresh-tokens?refresh_token=${refreshToken}&id=${uuid}`,
            method: 'POST'
        })
    })
}

export {
    loginEndpoints
}