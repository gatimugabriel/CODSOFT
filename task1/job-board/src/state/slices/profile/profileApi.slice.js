import {apiSlice} from '../api.slice.js'
const PROFILE_URL = "/u/profile";

export const profileApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.mutation({
            query: () => ({
                url: `${PROFILE_URL}`,
                method: "GET",
            }),
            invalidatesTags: ['User']
        }),
        updateUser: builder.mutation({
            query: (data) => ({
                url: `${PROFILE_URL}`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ['User'],
        }),
        deleteUser: builder.mutation({
            query: () => ({
                url: `${PROFILE_URL}`,
                method: "DELETE",
            }),
        }),
        getUserResume: builder.mutation({
            query: (resumeName) => ({
                url: `/jobs/resume/${resumeName}`,
                method: "GET"
            })
        })
    })
});

export const {
    useGetUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
    useGetUserResumeMutation
} = profileApiSlice;