import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    jobList: [],
    bookmarkedJobs: [],
    employerJobs: [],
    userApplications: []
}

const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        setStateJobs: (state, action) => {
            const newJobs = action.payload
            state.jobList = state.jobList.concat(newJobs.filter(newJob => !state.jobList.some(oldJob => oldJob.id === newJob.id)))
            // state.jobList = [...state.jobList, ...action.payload];
        },
        setEmployerJobs: (state, action) => {
            state.employerJobs = [...state.employerJobs, ...action.payload]
        },
        removeEmployerJob: (state, action) => {
            const jobId = action.payload
            state.employerJobs = state.employerJobs.filter(job => !(job.id === jobId))
        },
        setUserBookmarks: (state, action) => {
            state.bookmarkedJobs = [...state.bookmarkedJobs, ...action.payload]
        },
        removeBookmark: (state, action) => {
            const jobId = action.payload
            state.bookmarkedJobs = state.bookmarkedJobs.filter(bookmark => !(bookmark.id === jobId))
        },
        removeAllUserJobsData: (state) => {
            state.bookmarkedJobs = []
            state.employerJobs = []
        },
        setUserApplications: (state, action) => {
            state.userApplications = [...state.userApplications, ...action.payload]
        }
    }
})

export const {setStateJobs, setUserBookmarks, removeBookmark, setEmployerJobs, removeEmployerJob, removeAllUserJobsData, setUserApplications} = jobSlice.actions
export default jobSlice.reducer