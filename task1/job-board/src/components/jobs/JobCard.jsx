import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {Bookmark} from "lucide-react";

import '../../styles/custom.css'
import './JobCard.css'
import {useToggleBookmarkMutation} from "../../state/slices/jobs/jobApi.slice.js";
import {removeBookmark, setUserBookmarks} from "../../state/slices/jobs/job.slice.js";
import useAuth from "../../hooks/useAuth.js";
import useActiveLink from "../../hooks/useActiveLink.js";

function JobCard({job, userIsEmployer}) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const activeLink = useActiveLink()
    const {userInfo} = useAuth()

    // bookmark
    const bookmarks = useSelector(state => state.jobs.bookmarkedJobs)
    const [toggleBookmarkApiCall, {isLoading: bookmarkLoading, error: bookmarkError}] = useToggleBookmarkMutation();

    // applications
    const jobApplications = useSelector(state => state.jobs.userApplications)

    let isJobBookmarked = bookmarks.some((bookmarkedJob) => bookmarkedJob.id === job.id)
    let isJobApplied = jobApplications.some((appliedJob) => appliedJob.id === job.id)

    const viewJob = () => {
        navigate(`/jobs/view/${job.id}`)
    }

    const editJob = () => {
        navigate(`/jobs/edit/${job.id}`)
    }

    const deleteJob = () => {
        alert('Sure that you want to delete this job?')

    }

    const handleBookmark = async () => {
        try {
            if (!userInfo) {                
                alert('login first in order to save your favourite jobs')
                // return (
                //     <Overlay>
                //         <div className="flex items-center justify-center w-full">
                //             <Link to={'/signin'}>Login Here</Link>
                //         </div>
                //     </Overlay>
                // )
            }
            if (!isJobBookmarked) {
                // save bookmark to DB
                const response = await toggleBookmarkApiCall(job.id).unwrap()
                dispatch(setUserBookmarks([job]))
                isJobBookmarked = true
                toast.success(response.message)
            } else {
                // remove bookmark from DB
                const response = await toggleBookmarkApiCall(job.id).unwrap()
                dispatch(removeBookmark(job.id))
                toast.success(response.message)
            }
        } catch (e) {
            console.log(e)
            {
                e?.status === 403 && toast.error('login to save your favourite jobs')
            }
            toast.error(bookmarkError)
        }
    }

    return (
        <div
            className="job-card bg-slate-200 h-full w-full px-6 py-6 border border-stone-900 md:border-none dark:border-white rounded-md overflow-hidden">
            <div className="details-section">
                <div className="company-info">
                    <img src={job.companyLogo} alt="company logo"/>
                    <h4 className="bg-stone-500 text-slate-50 px-1 h-fit rounded">{job.company}</h4>
                </div>
                {/*<h1>{job.id}</h1>*/}
                <h3 className="text-2xl font-extrabold">{job.title}</h3>
                <p className="text-stone-600 my-2">{job.salary}</p>
                <p className="">{job.skills.map((skill) => (
                    <span
                        key={skill}
                        className="font-bold text-stone-800"
                    > {skill} <span className="text-xl font-extrabold text-amber-600">| </span></span>
                ))}</p>

                {/* hidden to simplify the card, but useful when applying search filters */}
                <div className="hidden">
                    <h4>Category: {job.category}</h4>
                    <p>Location: {job.location}</p>
                    <p>Type: {job.type}</p>
                    <p>Experience: {job.experience}</p>
                    <p>Description: {job.description}</p>
                    <p>Posted on: {job.createdAt}</p>
                </div>
            </div>

            {/* -- this section hides apply button if user is an employer : (employers cannot apply for jobs)*/}
            <div className="action-section action-btns">
                <button className="btn black-btn" onClick={viewJob}>
                    View
                </button>

                {/* check if user is logged in */}
                {userInfo ?
                    <>
                        {userIsEmployer && activeLink === '/my-jobs' ? (
                            <>
                                {/* employer shows View and Bookmark buttons only */}
                                <button className="btn green-btn" onClick={editJob}>
                                    Edit
                                </button>
                                <button className="btn danger-btn" onClick={deleteJob}>
                                    Delete
                                </button>

                            </>
                        ) : (
                            <>
                                {isJobBookmarked ? (
                                    <Bookmark
                                        className="cursor-pointer fill-indigo-700 text-indigo-700"
                                        onClick={handleBookmark}
                                    />
                                ) : (
                                    <Bookmark className="cursor-pointer" onClick={handleBookmark}/>
                                )}

                                {isJobApplied ?
                                    <>
                                        <div className="text-stone-500">Applied ✅</div>
                                    </>
                                    :
                                    <>
                                        {!userIsEmployer &&
                                            <button onClick={viewJob} className="btn green-btn">Apply</button>}
                                    </>
                                }
                            </>
                        )}
                    </>
                    :
                    // User is not logged in, show all buttons
                    <>
                        <Bookmark className="cursor-pointer" onClick={viewJob}/>
                        <button onClick={viewJob} className="btn green-btn">Apply</button>
                    </>
                }
            </div>
        </div>
    )

}

export default JobCard;