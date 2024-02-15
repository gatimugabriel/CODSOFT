import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";

import {apiSlice} from "./slices/api.slice.js";
import loggerMiddleware from "./middleware/logger.middleware.js";
import authReducer from './slices/auth/auth.slice.js'
import jobsReducer from './slices/jobs/job.slice.js'

const store = configureStore({
    reducer: {
        auth: authReducer,
        jobs: jobsReducer,
        profile: '',
        jobApplication: '',
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(apiSlice.middleware)
    ,
    devTools: true
})

setupListeners(store.dispatch)

export default store