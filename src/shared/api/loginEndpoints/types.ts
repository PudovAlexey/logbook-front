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

type RegisterUserParams = {
    body: {
        dateOfBirth: string
        email: string
        name: string
        password: string
        confirmPassword: string
        patronymic?: string
        surname?: string
    }
}

export type {
    SubmitChangePasswordParams,
    RefreshTokensParams,
    RequestVerificationCodeParams,
    RemoveUserParams,
    LoginParams,
    RegisterUserParams,
};
