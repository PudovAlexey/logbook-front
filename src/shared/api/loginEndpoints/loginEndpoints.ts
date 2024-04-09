import { MutationEndpoint } from "@shared/lib/queryHooks/UseLazyMutation"
import { Endpoint } from "@shared/lib/queryHooks/types"
import { builder } from "../apiHandlers"

const loginEndpoints = {
    login: builder.mutation<string, {body: {email: string, password: string}}>({
        query: ({body}) => ({
            url: 'login',
            method: 'POST',
            body,
        })
        // query: 'login',
        // body: body,
        // method: 'POST'
    })

    // login: ({body}: {body: {email: string, password: string}}): MutationEndpoint => ({
    //     query: 'login',
    //     body: body,
    //     method: 'POST'
    // }),
    // logout: (): MutationEndpoint => ({
    //     query: 'logout',
    //     method: 'POST'
    // }),

    // removeUser: ({id}: {id: string}): MutationEndpoint => ({
    //     query: `remove_account/${id}`,
    //     method: 'POST'
    // }),

    // refreshTokens: ({uuid, refreshToken}: {uuid: string, refreshToken: string}): Endpoint<any> => ({
    //     key: 'refresh',
    //     query: () => `/refresh-tokens?refresh_token=${refreshToken}&id=${uuid}`,
    //     // method: 'GET',
    // })
}

export {
    loginEndpoints
}