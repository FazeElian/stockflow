import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

// Types
import type { ConfirmAccountForm, ForgotPasswordForm, LoginForm, RegisterForm, ResetPasswordForm, ValidateCodeForm } from "../../lib/types/services/user.type";

// API Calls
import { confirmAccount, forgotPassword, login, registerUser, resetPassword, validateCode } from "./api";
import { useNavigate } from "react-router-dom";

// Register user mutation
export const useRegisterMutation = () => {
    return useMutation({
        mutationFn: (data: RegisterForm) => registerUser(data),
        onSuccess: (response) => {
            // Sucess toast
            toast.success(response);
        },
        onError: (error: Error) => {
            const message = error.message;
            toast.error(message);
        },
    })
}

// Login mutation
export const useLoginMutation = () => {
    // For redirect
    const redirect = useNavigate()

    return useMutation({
        mutationFn: (data: LoginForm) => login(data),
        onSuccess: (response) => {
            // Set JWT Token
            localStorage.setItem("AUTH_TOKEN", response)

            // Redirection to admin dashboard
            redirect("/admin/dashboard")
        },
        onError: (error: Error) => {
            const message = error.message;
            toast.error(message);
        },
    })
}

// Confirm account mutation
export const useConfirmAccountMutation = () => {
    return useMutation({
        mutationFn: (data: ConfirmAccountForm) => confirmAccount(data),
        onSuccess: (response) => {
            // Sucess toast
            toast.success(response);
        },
        onError: (error: Error) => {
            const message = error.message;
            toast.error(message);
        },
    })
}


// Forgot password mutation
export const useForgotPasswordMutation = () => {
    return useMutation({
        mutationFn: (data: ForgotPasswordForm) => forgotPassword(data),
        onSuccess: (response) => {
            // Sucess toast
            toast.success(response);
        },
        onError: (error: Error) => {
            const message = error.message;
            toast.error(message);
        },
    })
}

// Validate forgot password code mutation
export const useValidateCodeMutation = () => {
    return useMutation({
        mutationFn: (data: ValidateCodeForm) => validateCode(data),
        onError: (error: Error) => {
            const message = error.message;
            toast.error(message);
        },
    })
}

// Reset password mutation
export const useResetPasswordMutation = (code: number) => {
    return useMutation({
        mutationFn: (data: ResetPasswordForm) => resetPassword(data, code),
        onSuccess: (response) => {
            // Sucess toast
            toast.success(response);
        },
        onError: (error: Error) => {
            const message = error.message;
            toast.error(message);
        },
    })
}