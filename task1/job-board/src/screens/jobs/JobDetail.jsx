import {useEffect, useRef, useState} from "react";
import {Link, useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {toast} from "react-toastify";
import {Bookmark} from "lucide-react";

import '../../styles/custom.css'
import useAuth from "../../hooks/useAuth.js";
import {
    useGetJobMutation,
    useGetMyApplicationsMutation,
    useToggleBookmarkMutation
} from "../../state/slices/jobs/jobApi.slice.js";
import Loader from "../../components/common/Loader.jsx";
import {removeBookmark, setUserApplications, setUserBookmarks} from "../../state/slices/jobs/job.slice.js";
import {formatDate} from "../../utils/date.util.js";

export default function JobDetail() {
    const dataFetchedRef = useRef(false);
    const dispatch = useDispatch()
    const navigate = useNavigate();

    // user
    const {userInfo} = useAuth()
    const isUserEmployer = userInfo && userInfo.user.role === 'employer'

    // job
    const {jobId} = useParams();
    const [job, setJob] = useState(null)
    const jobs = useSelector((state) => state.jobs.jobList)
    const [getJobApiCall, {isLoading: getJobLoading, error: getJobError}] = useGetJobMutation()

    // applications
    const jobApplications = useSelector(state => state.jobs.userApplications)
    const [getApplications, {
        isLoading: getApplicationsLoading,
        error: getApplicationsError
    }] = useGetMyApplicationsMutation()
    let isJobApplied = false;
    {
        job ?
            isJobApplied = jobApplications.some((appliedJob) => appliedJob.id === job.id)
            :
            isJobApplied = false
    }

    //  bookmarks
    const [toggleBookmarkApiCall, {
        isLoading: getBookmarkLoading,
        error: getBookmarkError
    }] = useToggleBookmarkMutation();
    const bookmarks = useSelector(state => state.jobs.bookmarkedJobs)
    const [isJobBookmarked, setIsJobBookmarked] = useState(false)

    useEffect(() => {
        if (dataFetchedRef.current) return
        dataFetchedRef.current = true

        const stateJob = jobs.find(j => j.id === +(jobId));
        if (!stateJob) {
            getJob()
        } else {
            setJob(stateJob)
            const checkBookmark = bookmarks.some((bookmarkedJob) => bookmarkedJob.id === stateJob.id)
            setIsJobBookmarked(checkBookmark)
        }

        if (userInfo && jobApplications.length === 0) {
            fetchApplications()
        }

    }, []);

    const handleBookmark = async () => {
        try {
            if (!userInfo) {
                alert('login first in order to save your favourite jobs')
                return
            }
            if (!isJobBookmarked) {
                // save bookmark to DB
                const response = await toggleBookmarkApiCall(job.id).unwrap()
                dispatch(setUserBookmarks([job]))
                setIsJobBookmarked(true)
                toast.success(response.message)
            } else {
                // remove bookmark from DB
                const response = await toggleBookmarkApiCall(job.id).unwrap()
                dispatch(removeBookmark(job.id))
                setIsJobBookmarked(false)
                toast.success(response.message)
            }
        } catch (e) {
            console.log(e)
            toast.error(getBookmarkError)
        }
    }

    const getJob = async () => {
        try {
            const jobData = await getJobApiCall(jobId).unwrap()
            console.log(jobData)
            setJob(jobData)
        } catch (e) {
            // console.error(e)
            toast(e?.data?.message)
        }
    }

    const fetchApplications = async () => {
        try {
            const response = await getApplications().unwrap()

            if (response.length > 0) {
                const extractedJobApplications = response.map(item => item.job)
                dispatch(setUserApplications(extractedJobApplications))
            }
        } catch (e) {
            console.error(e)
            console.error(getApplicationsError)
            toast.error(getApplicationsError)
        }
    }


    const handleBackClick = () => {
        navigate(-1);
    };

    const handleApply = () => {
        if (!userInfo) {
            return alert('login first in order to apply for a job')
        }
        navigate(`/${jobId}/apply`)
    };

    return (
        <div className="px-2 md:px-20 py-8">
            {/* Back button */}
            <button className="btn black-btn mb-4" onClick={handleBackClick}>Back</button>
            {userInfo &&
                <button
                    className="text-white rounded-md mx-4 px-2 py-1 w-fit cursor-pointer  bg-gradient-to-r hover:bg-gradient-to-l from-indigo-600 to-indigo-400  hover:from-indigo-600 hover:to-indigo-400 border border-indigo-500">
                    <Link to={'/dashboard'}
                    >Dashboard</Link>
                </button>
            }

            <div className="block w-full md:flex justify-center">
                {(getJobLoading || getApplicationsLoading) ?
                    <><Loader/> <p>loading...</p></>
                    :
                    ((job !== null) ?
                            (
                                <div
                                    className="bg-slate-200 h-auto w-auto px-6 py-2 border border-stone-900 md:border-none rounded-md shadow-md overflow-hidden">
                                    <div className="company-info">
                                        {/*<img src={job.companyLogo} alt="company-logo"/>*/}
                                        <h4 className="bg-stone-500 text-slate-50 px-1 h-6 rounded">{job.company}</h4>
                                    </div>
                                    <h3 className="text-2xl font-extrabold">{job.title}</h3>
                                    <p className="text-stone-600 my-2">{job.salary}</p>
                                    <p className="">{job.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="font-bold text-stone-800"
                                        > {skill} <span
                                            className="text-xl font-extrabold text-amber-600">| </span></span>
                                    ))}
                                    </p>

                                    <h4>Category: {job.category}</h4>
                                    <p>Location: {job.location}</p>
                                    <p>Type: {job.type}</p>
                                    <p>Experience: {job.experience}</p>
                                    <p>Description: {job.description}</p>
                                    <p>Posted on: {formatDate(job.createdAt)}</p>

                                    {/* Apply & Bookmark button */}
                                    <>
                                        {userInfo ?
                                            (<div className="flex items-center justify-between">
                                                {isJobBookmarked ? (
                                                    <Bookmark
                                                        className="cursor-pointer fill-indigo-700 text-indigo-700"
                                                        onClick={handleBookmark}
                                                    />
                                                ) : (
                                                    <Bookmark className="cursor-pointer" onClick={handleBookmark}/>
                                                )
                                                }
                                                {!isUserEmployer &&
                                                    <>
                                                        {isJobApplied ?
                                                            <div>Applied ✅</div>
                                                            :
                                                            <button onClick={handleApply}
                                                                    className="btn green-btn">Apply
                                                            </button>
                                                        }
                                                    </>
                                                }

                                            </div>)
                                            :
                                            (<div className="flex items-center justify-between">
                                                    <Bookmark className="cursor-pointer" onClick={handleBookmark}/>
                                                    <button onClick={handleApply} className="btn green-btn">Apply
                                                    </button>
                                                </div>
                                            )
                                        }
                                    </>
                                    {isUserEmployer &&
                                        <p className="p-2 my-4 text-center leading-loose rounded bg-gradient-to-r from-amber-600 to-amber-500 text-white"><span
                                            className="px-1 mr-1 rounded bg-stone-700">NOTE: </span>
                                            Employers are not viable to apply for jobs <br/> Create a <span
                                                className="px-1 rounded bg-stone-500">candidate account</span> to apply
                                            for this job</p>}
                                </div>
                            )
                            : (
                                <p>Job not found or Employer might have removed it
                                    {getJobError && <>{getJobError}</>}
                                </p>
                            )
                    )
                }
            </div>
        </div>
    )
}