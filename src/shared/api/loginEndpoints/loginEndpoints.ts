import { builder } from '../apiHandlers';
import {
 LoginParams, RefreshTokensParams, RegisterUserParams, RegisterVerifyParams, RemoveUserParams, RequestVerificationCodeParams, SubmitChangePasswordParams,
} from './types';

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
            url: `refresh-tokens?id=${uuid}&refresh_token=${refreshToken}`,
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

    registerUser: builder.mutation<any, RegisterUserParams>({
        query: ({ body }) => ({
            url: 'register',
            body,
            method: 'POST',
        }),
    }),

    registerVerify: builder.mutation<any, RegisterVerifyParams>(({
        query: ({ body, id }) => ({
            url: `register/verify/${id}`,
            method: 'POST',
            body,
        }),
    })),

    getUserAvatarQuery: builder.query<string, {id: string}>((({
        query: ({ id }) => ({
            url: `get_avatar/${id}`,
            params: {},
        }),
    }))),
};

export {
    loginEndpoints,
};
