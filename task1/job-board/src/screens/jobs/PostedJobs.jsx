import {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";

import JobCard from "../../components/jobs/JobCard.jsx";
import Loader from "../../components/Loader.jsx";
import {useGetEmployerJobsMutation, useGetUserBookmarksMutation} from "../../state/slices/jobs/jobApi.slice.js";
import {setEmployerJobs, setUserBookmarks} from "../../state/slices/jobs/job.slice.js";
import {Link} from "react-router-dom";

export default function PostedJobs() {
    const userJobsFetchedRef = useRef(false);
    const jobs = useSelector(state => state.jobs.employerJobs)
    const [filteredJobs, setFilteredJobs] = useState([])

    const [getJobsApiCall, {isLoading: myJobsLoading, error: myJobsError}] = useGetEmployerJobsMutation()
    const [getBookmarksApiCall, {isLoading: bookmarksLoading, error: bookmarksError}] = useGetUserBookmarksMutation();
    const dispatch = useDispatch()

    const fetchJobs = async () => {
        try {
            const response = await getJobsApiCall().unwrap()
            dispatch(setEmployerJobs(response))
            setFilteredJobs(response)
        } catch (e) {
            console.error(e)
            console.error(myJobsError)
            toast.error(myJobsError)
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

    useEffect(() => {
        if (userJobsFetchedRef.current) return
        userJobsFetchedRef.current = true

        // -- check if jobs data is available in state
        if (jobs.length === 0) {
            fetchJobs();
            fetchBookmarks()
        } else {
            // -- use data from state
            setFilteredJobs(jobs);
        }
    }, []);

    return (
        <div>
            <h1 className="font-bold p-1 mb-2 md:mb-6 w-full text-stone-900 text-xl md:text-2xl leading-4 flex justify-center">My
                jobs</h1>

            <div
                className={`flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 items-center
                 border-red-500 p-2 md:px-10 gap-4 md:gap-6
                `}>
                {(myJobsLoading || bookmarksLoading) && <><Loader/> <p>loading...</p></>}

                {(filteredJobs.length > 0) ?
                    filteredJobs.map((jobItem) => (
                        <div key={jobItem.id}
                             className="p-4 flex flex-col gap-y-1"
                        >
                            <JobCard key={jobItem.id} job={jobItem} userIsEmployer={true}/>

                            {/* Applicants Details */}
                            <div
                                className="px-4 flex items-center justify-between">
                                <p className="text-sm text-stone-500"><span
                                    className="font-bold text-stone-800">{jobItem?.applications?.length}</span> applicants</p>
                                <Link to={`/applicants/${jobItem.id}`}
                                      className="text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:bg-gradient-to-l hover:from-indigo-600 hover:to-indigo-500 border border-indigo-500 rounded px-2"
                                >View all</Link>
                            </div>
                        </div>
                    ))
                    :
                    (<p>You have not posted any jobs</p>)
                }
            </div>
        </div>
    );
}

