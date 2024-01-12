import { apiSlice } from '../api.slice.js'
const AUTH_URL = "/auth";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        google: builder.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/google`,
                method: "POST",
                body: data,
            }),
        }),
        signup: builder.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/signup`,
                method: "POST",
                body: data,
            }),
        }),
        verifyUser: builder.mutation({
            query: ( verificationCode) => ({
                url: `${AUTH_URL}/verify-email/${verificationCode}`,
                method: "POST",
            }),
        }),
        signin: builder.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/signin`,
                method: "POST",
                body: data,
            }),
        }),
        signout: builder.mutation({
            query: () => ({
                url: `${AUTH_URL}/sign-out`,
                method: "POST",
            }),
        }),
        refresh: builder.mutation({
            query: () => ({
                url: `${AUTH_URL}`,
                method: "GET",
            }),
        }),
        forgotPassword: builder.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/forgot-password`,
                method: "POST",
                body: data,
            }),
        }),
        resetPassword: builder.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/reset-password/${data.resetToken}`,
                method: "PUT",
                body: data.formData,
                }
            ),

        }),
    }),
});

export const {
    useGoogleMutation,
    useSignupMutation,
    useVerifyUserMutation,
    useSigninMutation,
    useSignoutMutation,
    useRefreshMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,
} = authApiSlice;