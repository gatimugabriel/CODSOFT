import {useEffect, useRef, useState} from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import {useSelector, useDispatch} from "react-redux";
import {toast} from "react-toastify";
import {MapPinIcon, SearchIcon, WrenchIcon} from "lucide-react";
import '../../styles/custom.css' // shared styles
import './JobListing.css'
import JobCard from "../../components/jobs/JobCard.jsx";
import Loader from "../../components/common/Loader.jsx";
import {
    useGetJobsMutation, useGetMyApplicationsMutation,
    useGetUserBookmarksMutation,
} from "../../state/slices/jobs/jobApi.slice.js";
import {setStateJobs, setUserApplications, setUserBookmarks} from "../../state/slices/jobs/job.slice.js";
import useAuth from "../../hooks/useAuth.js";

export default function JobListing() {
    const dataFetchedRef = useRef(false);
    const dispatch = useDispatch()

    const [searchButtonClicked, setSearchButtonClicked] = useState(false)
    const [pageNumber, setPageNumber] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const {userInfo} = useAuth()

    const jobs = useSelector((state) => state.jobs.jobList);
    const bookmarks = useSelector((state) => state.jobs.bookmarkedJobs);
    const jobApplications = useSelector(state => state.jobs.userApplications)
    const [filteredJobs, setFilteredJobs] = useState([])

    const [getAllJobsApiCall, {isLoading: getJobsLoading, error: getJobsError}] = useGetJobsMutation();
    const [getBookmarksApiCall, {
        isLoading: getBookmarksLoading,
        error: getBookmarksError
    }] = useGetUserBookmarksMutation();
    const [getApplications, {
        isLoading: getApplicationsLoading,
        error: getApplicationsError
    }] = useGetMyApplicationsMutation()


    // -- fetches bookmarks only if user is logged in
    useEffect(() => {
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;

        if (userInfo) {
            if (bookmarks.length === 0) {
                // fetch bookmarks from server
                fetchBookmarks()
            }

            if (jobApplications.length === 0) {
                // fetch applied-to jobs from server
                fetchApplications()
            }
        }
    }, []);

    useEffect(() => {
        const fetchMoreJobs = async () => {
            try {
                const response = await getAllJobsApiCall(pageNumber).unwrap();
                dispatch(setStateJobs(response.data));
                setHasMore(response.next !== null);
            } catch (e) {
                console.error(e);
                toast.error(getJobsError);
            }
        };

        fetchMoreJobs();
    }, [pageNumber]);

    // populates initial filtered jobs with fetched data
    useEffect(() => {
        setFilteredJobs(jobs)
    }, [jobs])

    const fetchBookmarks = async () => {
        try {
            const bookmarkResponse = await getBookmarksApiCall().unwrap();
            if (bookmarkResponse.length > 0) {
                const extractedBookmarks = bookmarkResponse.map((item) => item.job)
                dispatch(setUserBookmarks(extractedBookmarks));
            }
        } catch (e) {
            console.error(e);
            console.error(getBookmarksError);
        }
    };

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

    const fetchMoreData = () => {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
    };

    // search inputs
    const [searchItem, setSearchItem] = useState({
        title_input: '',
        location_input: '',
        skill_input: ''
    })
    const clearAllSearchInputs = () => {
        setSearchItem({
            title_input: '',
            location_input: '',
            skill_input: ''
        })
        setFilteredJobs(jobs)
    }

    //  filters search
    const [filters, setFilters] = useState({
        category_filter: '',
        company_filter: '',
        type_filter: '',
        location_filter: '',
        experience_filter: '',
    })

    const handleResetFilters = () => {
        clearAllSearchInputs()
        setSearchButtonClicked(false)
        setFilters({
            category_filter: '',
            company_filter: '',
            type_filter: '',
            location_filter: '',
            experience_filter: '',
        })
        setFilteredJobs(jobs)
    }

    const handleSearchItemChange = e => {
        const {name, value} = e.target
        setSearchItem({
            ...searchItem,
            [name]: value
        })

        // filter jobs
        const searchResults = jobs.filter(job => {
            const titleMatch = job.title.toLowerCase().includes(searchItem.title_input.toLowerCase())
            const locationMatch = job.location.toLowerCase().includes(searchItem.location_input.toLowerCase())
            const skillMatch = job.skills.some(skill => skill.toLowerCase().includes(searchItem.skill_input.toLowerCase()))

            return titleMatch && locationMatch && skillMatch
        })
        setFilteredJobs(value ? searchResults : jobs)
    }

    const handleFilterChange = e => {
        const {name, value} = e.target
        setFilters({...filters, [name]: value})
    }

    const handleSearch = () => {
        setSearchButtonClicked(true)
        clearAllSearchInputs('')

        // filter jobs
        const searchResults = jobs.filter(job => {
            const categoryFilter = job.category.toLowerCase().includes(filters.category_filter.toLowerCase())
            const companyFilter = job.company.toLowerCase().includes(filters.company_filter.toLowerCase())
            const typeFilter = job.type.toLowerCase().includes(filters.type_filter.toLowerCase())
            const experienceFilter = job.experience.toLowerCase().includes(filters.experience_filter.toLowerCase())
            const locationFilter = job.location.toLowerCase().includes(filters.location_filter.toLowerCase())

            return categoryFilter && companyFilter && typeFilter && experienceFilter && locationFilter
        })

        setFilteredJobs(searchResults)
    }

    return (
        <div className="px-1 md:px-20">
            {/* Search & Filter Section */}
            <section className="my-2">
                <div className="bg-white shadow-md md:py-0 rounded">
                    {/*Search Inputs*/}
                    <div className="custom_flex-container">
                        <div className="search-container ml-3 md:ml-0">
                            <SearchIcon/>
                            <input
                                type="text"
                                name="title_input"
                                value={searchItem.title_input}
                                onChange={handleSearchItemChange}
                                placeholder="search by job title..."
                                className="search-input"
                            />
                        </div>
                        <div className="search-container">
                            <MapPinIcon/>
                            <input
                                type="text"
                                name="location_input"
                                value={searchItem.location_input}
                                onChange={handleSearchItemChange}
                                placeholder="search by location..."
                                className="search-input"
                            />
                        </div>
                        <div className="search-container">
                            <WrenchIcon/>
                            <input
                                type="text"
                                name="skill_input"
                                value={searchItem.skill_input}
                                onChange={handleSearchItemChange}
                                placeholder="search by skill..."
                                className="search-input"
                            />
                        </div>
                    </div>
                    {/* Other Filters */}
                    {/*<div className="custom_flex-container filter-container">*/}
                    {/*    /!* filter inputs *!/*/}
                    {/*    <h2 className="font-bold">Other filters</h2>*/}
                    {/*    <div>*/}
                    {/*        <select name="category_filter" value={filters.category_filter}*/}
                    {/*                onChange={handleFilterChange}>*/}
                    {/*            <option value="">Category</option>*/}
                    {/*            <option value="Software Development">Software Development</option>*/}
                    {/*            <option value="Data Science">Data Science</option>*/}
                    {/*        </select>*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <select name="company_filter" value={filters.company_filter} onChange={handleFilterChange}>*/}
                    {/*            <option value="">Company</option>*/}
                    {/*            <option value="Microsoft">Microsoft</option>*/}
                    {/*            <option value="Google">Google</option>*/}
                    {/*            <option value="IBM">IBM</option>*/}
                    {/*        </select>*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <select name="type_filter" value={filters.type_filter} onChange={handleFilterChange}>*/}
                    {/*            <option value="">Type</option>*/}
                    {/*            <option value="full-time">full-time</option>*/}
                    {/*            <option value="part-time">part-time</option>*/}
                    {/*            <option value="contract">contract</option>*/}
                    {/*        </select>*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <select name="location_filter" value={filters.location_filter}*/}
                    {/*                onChange={handleFilterChange}>*/}
                    {/*            <option value="">location</option>*/}
                    {/*            <option value="remote">remote</option>*/}
                    {/*            <option value="New York">New York</option>*/}
                    {/*            <option value="London">London</option>*/}
                    {/*            <option value="Nairobi">Nairobi</option>*/}
                    {/*        </select>*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <select name="experience_filter" value={filters.experience_filter}*/}
                    {/*                onChange={handleFilterChange}>*/}
                    {/*            <option value="">exp</option>*/}
                    {/*            <option value="0-2 years">0-2 yrs</option>*/}
                    {/*            <option value="2-5 years">2-5 yrs</option>*/}
                    {/*            <option value="5-10 years"> 5-10 yrs</option>*/}
                    {/*            <option value="10+ years">10+ yrs</option>*/}
                    {/*        </select>*/}
                    {/*    </div>*/}

                    {/*    /!* filter buttons *!/*/}
                    {/*    <div className="flex items-center gap-x-4 border-b-2 border-stone-400 pb-1">*/}
                    {/*        <button*/}
                    {/*            className="btn green-btn"*/}
                    {/*            onClick={handleSearch}>Search*/}
                    {/*        </button>*/}
                    {/*        <button*/}
                    {/*            className="btn black-btn"*/}
                    {/*            onClick={handleResetFilters}>Reset*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                </div>
            </section>

            {/* Jobs List */}
            {(getApplicationsLoading || getBookmarksLoading || getJobsLoading) && <Loader />}
            {
                filteredJobs.length === 0
                    ?
                    (<h2 className="flex items-center justify-center w-full">No

                        <span className="mx-2 text-red-500 text-xl">
                            {(searchItem.title_input || searchItem.location_input || searchItem.skill_input) ?
                                `${(searchItem.title_input || searchItem.location_input || searchItem.skill_input)} `
                                : ''}

                            {(filters.category_filter || filters.company_filter || filters.type_filter || filters.experience_filter || filters.location_filter) ?
                                `${(filters.category_filter || filters.company_filter || filters.type_filter || filters.experience_filter || filters.location_filter)}`
                                : ''}
                        </span>
                        Jobs Found
                    </h2>)
                    :
                    (
                        <div>
                            {/* text to display the searched jobs */}
                            <h2 className="mx-20 px-2 text-slate-50 mb-8 w-fit bg-green-500">
                                {(searchItem.title_input || searchItem.location_input || searchItem.skill_input) ?
                                    `${(searchItem.title_input || searchItem.location_input || searchItem.skill_input)} jobs`
                                    : ''}

                                {searchButtonClicked ?
                                    (filters.category_filter || filters.company_filter || filters.type_filter || filters.experience_filter || filters.location_filter) ?
                                        `${(filters.category_filter || filters.company_filter || filters.type_filter || filters.experience_filter || filters.location_filter)} jobs`
                                        : ''

                                    : ''
                                }
                            </h2>
                            <section className="">
                                {/*<Link to="/jobs" className="btn bg-amber-500 fixed">Back to Top</Link>*/}
                                <InfiniteScroll
                                    className="overflow-y-scroll"
                                    dataLength={jobs.length} //render the next data
                                    next={fetchMoreData}
                                    hasMore={hasMore}
                                    loader={getJobsLoading &&
                                        <div className="flex items-center"><Loader/> <p>Loading more jobs...</p>
                                        </div>}
                                    endMessage={!hasMore && <p>No more jobs to show.</p>}
                                >
                                    <div
                                        className={`flex flex-col px-4 md:grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-10 mb-10 md:px-16`}>
                                        {getBookmarksLoading && <Loader/>}

                                        {(filteredJobs.length > 0) &&
                                            filteredJobs.map((jobItem) => (
                                                <JobCard key={jobItem.id} job={jobItem}/>
                                                // <li key={jobItem.id}>{jobItem.id}</li>
                                            ))
                                        }
                                        {!hasMore && <p>No more jobs to show</p>}
                                    </div>
                                </InfiniteScroll>
                            </section>
                        </div>
                    )
            }
        </div>
    )
}