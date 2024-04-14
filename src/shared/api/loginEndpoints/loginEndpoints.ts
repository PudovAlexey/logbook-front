import { builder } from '../apiHandlers';
import { LoginParams, RefreshTokensParams, RemoveUserParams, RequestVerificationCodeParams, SubmitChangePasswordParams } from './types';

const loginEndpoints = {
    login: builder.mutation<any, LoginParams>({
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

    removeUser: builder.mutation<any, RemoveUserParams>({
        query: ({ id }) => ({
            url: `remove_account/${id}`,
            method: 'POST',
        }),
    }),

    refreshTokens: builder.mutation<any, RefreshTokensParams>({
        query: ({ refreshToken, uuid }) => ({
            url: `/refresh-tokens?refresh_token=${refreshToken}&id=${uuid}`,
            method: 'POST',
        }),
    }),

    requestVerificationCode: builder.mutation<{
        timer: number
    }, RequestVerificationCodeParams>({
        query: ({ email }) => ({
            url: `verification_code/${email}`,
            method: 'POST',
        }),
    }),

    submitChangePassword: builder.mutation<string, SubmitChangePasswordParams>({
        query: ({ email, body }) => ({
            url: `reset_password/${email}`,
            method: 'POST',
            body,
        }),
    }),
};

export {
    loginEndpoints,
};
