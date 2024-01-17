import {apiSlice} from "../api.slice.js";
const JOBS_URL = '/jobs'

export const jobApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getJobs : builder.mutation({
            query: (pageNumber) => ({
                url: `${JOBS_URL}?pageNumber=${pageNumber}`,
                method: "GET"
            })
        }),
        getEmployerJobs: builder.mutation({
            query:() => ({
                url: `${JOBS_URL}/me/my-jobs`,
                method: "GET"
            })
        }),
        getJobApplications: builder.mutation({
            query:(jobId) => ({
                url: `${JOBS_URL}/applicants/${jobId}`,
                method: "GET"
            })
        }),
        getJob : builder.mutation({
            query: (jobId) => ({
                url: `${JOBS_URL}/${jobId}`,
                method: "GET",
            })
        }),
        createJob : builder.mutation({
            query: (data) => ({
                url: `${JOBS_URL}/add`,
                method: "POST",
                body: data.formData
            })
        }),
        updateJob : builder.mutation({
            query: (data) => ({
                url: `${JOBS_URL}/${data.jobId}`,
                method: "PUT",
                body: data.formData,
            }),
        }),
        deleteJob : builder.mutation({
            query: (jobId) => ({
                url: `${JOBS_URL}/${jobId}`,
                method: "DELETE",
            }),
        }),
        // --- Bookmarks --- //
        toggleBookmark: builder.mutation({
            query: (jobId) => ({
                url: `${JOBS_URL}/bookmark/${jobId}`,
                method: "PUT"
            })
        }),
        getUserBookmarks : builder.mutation({
            query: () => ({
                url: `${JOBS_URL}/view/bookmarks`,
                method: "GET"
            })
        }),
        //  --- Applications --- //
        applyJob : builder.mutation({
            query: (data) => ({
                url: `${JOBS_URL}/${data.jobId}/apply`,
                method: "POST",
                body: data.data
            })
        }),
        getMyApplications: builder.mutation({
            query: ()  => ({
                url: `${JOBS_URL}/me/applications`,
                method: "GET",
            })
        })
    })
})

export const {
    useGetJobsMutation,
    useGetEmployerJobsMutation,
    useGetJobApplicationsMutation,
    useGetJobMutation,
    useCreateJobMutation,
    useUpdateJobMutation,
    useToggleBookmarkMutation,
    useGetUserBookmarksMutation,
    useApplyJobMutation,
    useGetMyApplicationsMutation
} = jobApiSlice