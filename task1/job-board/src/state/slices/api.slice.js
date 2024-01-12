import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Mutex} from "async-mutex";
import {removeCredentials, setCredentials} from "./auth/auth.slice.js";
import {toast} from "react-toastify";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8080/api/v1",
    // baseUrl: "https://wondrous-custard-e7a0f4.netlify.app/api/v1",
    credentials: "include",
    prepareHeaders: (headers, {getState}) => {
        const accessToken = getState().auth.userInfo?.accessToken
        const refreshToken = getState().auth.userInfo?.refreshToken

        if (accessToken && refreshToken) {
            headers.set('authorization-refresh-token', `Bearer ${refreshToken}`)
            headers.set('authorization-access-token', `Bearer ${accessToken}`)
        }
        return headers
    },
})

// new mutex init
const mutex = new Mutex()
const baseQueryWithReauth = async (args, api, extraOptions) => {
    // wait until the mutex is available without locking it
    await mutex.waitForUnlock()
    let result = await baseQuery(args, api, extraOptions)

    if (result.error && result.error.status === 401 && result.error.data?.message === "Expired Access Token") {
        // checking whether the mutex is locked
        if (!mutex.isLocked()) {
            const release = await mutex.acquire()
            try {
                const refreshResult = await baseQuery(
                    '/auth/refresh',
                    api,
                    extraOptions
                )

                if (refreshResult.data) {
                    // update store with the new token
                    api.dispatch(setCredentials({...refreshResult.data}))
                    // retry the initial query
                    result = await baseQuery(args, api, extraOptions)
                } else {
                    if (refreshResult.error && refreshResult.error.status === 401 && refreshResult.error?.data?.message === "Expired Refresh Token") {
                        toast.error('Seems your SESSION has EXPIRED. Please Login Again')
                        api.dispatch(removeCredentials())
                    } else {
                        toast.error('Server Error Occurred. Try again in a few minutes')
                    }
                }
            } finally {
                // release must be called once the mutex should be released again.
                release()
            }
        } else {
            // wait until the mutex is available without locking it
            await mutex.waitForUnlock()
            result = await baseQuery(args, api, extraOptions)
        }
    }
    return result
}

// const baseQueryWithReauth = async (args, api, extraOptions) => {
//     let result = await baseQuery(args, api, extraOptions)
//     if (result.error && result.error.status === 401 && result.error.data?.message === "Expired Access Token") {
//         // try to get a new access token
//         const refreshResult = await baseQuery('/auth/refresh', api, extraOptions)
//
//         if (refreshResult.data) {
//             // update store with the new token
//             api.dispatch(setCredentials({...refreshResult.data}))
//             // retry the initial query
//             result = await baseQuery(args, api, extraOptions)
//         } else {
//             if (refreshResult.error && refreshResult.error.status === 401 && refreshResult.error?.data?.message === "Expired Refresh Token") {
//                 toast.error('Seems your SESSION has EXPIRED. Please Login Again')
//                 api.dispatch(removeCredentials())
//             } else {
//                 toast.error('Server Error Occurred. Try again in a few minutes')
//             }
//         }
//     }
//     return result
// }

export const apiSlice
    = createApi({
    baseQuery: (args, api, extraOptions) => baseQueryWithReauth(args, api, extraOptions),
    tagTypes: ['User', 'Job', 'JobApplication'],
    endpoints: (builder) => ({}),
})