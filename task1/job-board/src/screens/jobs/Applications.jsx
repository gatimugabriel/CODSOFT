import {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";

import {useGetMyApplicationsMutation, useGetUserBookmarksMutation} from "../../state/slices/jobs/jobApi.slice.js";
import {setUserApplications, setUserBookmarks} from "../../state/slices/jobs/job.slice.js";
import Loader from "../../components/common/Loader.jsx";
import JobCard from "../../components/jobs/JobCard.jsx";
import useAuth from "../../hooks/useAuth.js";

function Applications() {
    const fetchApplicationsRef = useRef(false)
    const dispatch = useDispatch()

    // user
    const {userInfo} = useAuth();
    const isEmployer = userInfo.role === 'employer';

    // job applications
    const jobApplications = useSelector(state => state.jobs.userApplications)
    const bookmarks = useSelector(state => state.jobs.bookmarkedJobs)
    const [filteredApplications, setFilteredApplications] = useState([])
    const [getApplications, {
        isLoading: getApplicationsLoading,
        error: getApplicationsError
    }] = useGetMyApplicationsMutation()
    const [getBookmarksApiCall, {isLoading: bookmarksLoading, error: bookmarksError}] = useGetUserBookmarksMutation();

    useEffect(() => {
        if (fetchApplicationsRef.current) return;
        fetchApplicationsRef.current = true;

        if (jobApplications.length === 0) {
            fetchApplications();

            {
                bookmarks.length === 0 && fetchBookmarks().then(() => console.log('')) // fetch bookmarks if no bookmarks in state
            }
        } else {
            // -- use data from state
            setFilteredApplications(jobApplications);
        }
    }, []);

    const fetchApplications = async () => {
        try {
            const response = await getApplications().unwrap()

            if (response.length > 0) {
                const extractedJobApplications = response.map(item => item.job)

                dispatch(setUserApplications(extractedJobApplications))
                setFilteredApplications(extractedJobApplications)
            } else {
                setFilteredApplications([])
            }
        } catch (e) {
            console.error(e)
            console.error(getApplicationsError)
            toast.error(getApplicationsError)
        }
    }

    const fetchBookmarks = async () => {
        try {
            const bookmarkResponse = await getBookmarksApiCall().unwrap();

            // update state & bookmark datasource list
            if (bookmarkResponse.length > 0) {
                const extractedJobs = bookmarkResponse.map((item) => item.job)
                dispatch(setUserBookmarks(extractedJobs))
            }
        } catch (e) {
            console.error(e);
            console.error(bookmarksError)
            toast.error(bookmarksError)
        }
    };

    return (
        <div>
            <h1 className="font-bold p-1 mb-2 md:mb-6 w-full text-stone-900 text-xl md:text-2xl leading-4 flex justify-center">Applied
                jobs</h1>
            <div
                className={`flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 items-center
                 border-red-500 p-2 md:px-10 gap-4 md:gap-6
                `}
            >
                {(getApplicationsLoading || bookmarksLoading) && <><Loader/> <p>loading...</p></>}

                {filteredApplications.length > 0 ? (
                    filteredApplications.map((item) => (
                        <JobCard key={item.id} job={item} userIsEmployer={isEmployer}/>
                    ))
                ) : (
                    <p>You have not applied to any job</p>
                )}
            </div>
        </div>
    );
}

export default Applications;