export type User = {
    id: number;
    userName: string;
    email: string;
    password: string;
    names: string;
    lastNames: string;
    code: string;
};

export type UserContextType = {
    user: User | null
}

export type RegisterForm = Pick<User, "userName" | "email" | "password">
export type LoginForm = Pick<User, "email"> & {
    password: string,
}

export type ForgotPasswordForm = Pick<User, "email">;
export type ConfirmAccountForm = Pick<User, "code">;
export type ResetPasswordForm = Pick<User, "code"> & {
    password: string
}

export type ValidateCodeForm = Pick<User, "code">