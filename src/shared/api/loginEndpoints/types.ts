type SubmitChangePasswordParams = {
    email: string;
   body: {
    secretCode: string;
    password: string;
    confirmPassword: string
   }
};

type LoginParams = {
    body: {
        email: string,
        password: string
    }
}

type RefreshTokensParams = {
    refreshToken: string,
    uuid: string
}

type RequestVerificationCodeParams = {
    email: string
}

type RemoveUserParams = {
    id: string
}

export type {
    SubmitChangePasswordParams,
    RefreshTokensParams,
    RequestVerificationCodeParams,
    RemoveUserParams,
    LoginParams,
};
