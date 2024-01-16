import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";

// ---- state --- //
import {Provider} from "react-redux";
import store from "./state/store.js";

import App from './App.jsx'
import './styles/tailwind.css'

import ErrorComponent from "./components/common/error/ErrorComponent.jsx";

// -- screens -- //
// auth
import PrivateRoute from "./components/auth/PrivateRoute.jsx";
import RequireRole from "./components/auth/RequireRole.jsx";
import SignUp from "./screens/auth/SignUp.jsx";
import SignIn from "./screens/auth/SignIn.jsx";
import EmailVerification from "./screens/auth/EmailVerification.jsx";
import ForgotPassword from "./screens/auth/ForgotPassword.jsx";
import ResetPassword from "./screens/auth/ResetPassword.jsx";

// public
import HomePage from "./screens/HomePage.jsx";
import JobListing from "./screens/jobs/JobListing.jsx";
import JobDetail from "./screens/jobs/JobDetail.jsx";
import Apply from "./screens/jobs/Apply.jsx";
import Blog from "./screens/Blog.jsx";
import Contact from "./screens/Contact.jsx";

// private
import Account from "./components/layout/Account.jsx"; // account layout
import Profile from "./screens/profile/Profile.jsx";
import Dashboard from "./screens/dashboard/Dashboard.jsx";
import PostedJobs from "./screens/jobs/PostedJobs.jsx";
import Applicants from "./screens/jobs/ViewApplicants.jsx";
import Statistics from "./screens/Statistics.jsx";
import Applications from "./screens/jobs/Applications.jsx";
import Favourites from "./screens/jobs/Favourites.jsx";
import AddEditJob from "./screens/jobs/AddEditJob.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            {/* public pages */}
            <Route index={true} path="/" element={<HomePage/>}/>
            <Route path="/jobs" element={<JobListing/>}/>
            <Route path="/jobs/view/:jobId" element={<JobDetail/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/contact" element={<Contact/>}/>

            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/forgot-password" element={<ForgotPassword />}/>
            <Route path="/reset-password/:resetToken" element={<ResetPassword />}/>
            <Route path="/verify-email/:verificationCode" element={<EmailVerification />}/>

            {/* private pages*/}
            <Route element={<PrivateRoute/>}>
                {/* candidate only route */}
                <Route element={<RequireRole allowedRole={'candidate'}/>}>
                    <Route path="/:jobId/apply" element={<Apply/>}/>
                </Route>

                {/* routes with account layout */}
                <Route element={<Account/>}>
                    {/* Profile Page */}
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/profile" element={<Profile/>}/>

                    <Route path="/favourites" element={<Favourites/>}/>

                    {/* employer only routes */}
                    <Route element={<RequireRole allowedRole={'employer'}/>}>
                        <Route path="/my-jobs" element={<PostedJobs/>}/>
                        <Route path="/applicants/:jobId" element={<Applicants />}/>
                        <Route path="/jobs/edit/:jobId" element={<AddEditJob />}/>
                        <Route path="/create-job" element={<AddEditJob />}/>
                        <Route path="/statistics" element={<Statistics/>}/>
                    </Route>

                    {/* candidate only routes */}
                    <Route element={<RequireRole allowedRole={'candidate'}/>}>
                        <Route path="/applications" element={<Applications/>}/>
                    </Route>
                </Route>
            </Route>

            {/* Not Found Page */}
            <Route path="*" element={<ErrorComponent
                title={'Page Not Found'}
                description={'Sorry, the page you are looking for cannot be found!\n'}/>}
            />
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    </Provider>
)