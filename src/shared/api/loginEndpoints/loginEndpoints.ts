import { builder } from '../apiHandlers';

const loginEndpoints = {
    login: builder.mutation<any, {body: {email: string, password: string}}>({
        query: ({ body }) => ({
            url: 'login',
            method: 'POST',
            body,
        }),
    }),

    logout: builder.mutation<any, null>({
        query: () => ({
            url: 'logout',
            method: 'POST',
        }),
    }),

    removeUser: builder.mutation<any, {id: string}>({
        query: ({ id }) => ({
            url: `remove_account/${id}`,
            method: 'POST',
        }),
    }),

    refreshTokens: builder.mutation<any, {refreshToken: string, uuid: string}>({
        query: ({ refreshToken, uuid }) => ({
            url: `/refresh-tokens?refresh_token=${refreshToken}&id=${uuid}`,
            method: 'POST',
        }),
    }),
};

export {
    loginEndpoints,
};
