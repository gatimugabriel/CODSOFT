import {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {toast} from 'react-toastify';

import JobCard from '../../components/jobs/JobCard.jsx';
import Loader from '../../components/common/Loader.jsx';
import {useGetUserBookmarksMutation} from '../../state/slices/jobs/jobApi.slice.js';
import {setUserBookmarks} from '../../state/slices/jobs/job.slice.js';
import useAuth from '../../hooks/useAuth.js';
// import useBookmark from "../../hooks/useBookmark.js";

export default function Favourites() {
    const bookmarksFetchedRef = useRef(false);
    const dispatch = useDispatch();

    // const {GfetchBookmarks} = useBookmark()

    // user
    const {userInfo} = useAuth();
    const isEmployer = userInfo.role === 'employer';

    // bookmarks
    const bookmarks = useSelector((state) => state.jobs.bookmarkedJobs);
    const [filteredBookmarks, setFilteredBookmarks] = useState([]);
    const [getBookmarksApiCall, {isLoading, error}] = useGetUserBookmarksMutation();

    const fetchBookmarks = async () => {
        try {
            const bookmarkResponse = await getBookmarksApiCall().unwrap();

            // update state & bookmark datasource list
            if (bookmarkResponse.length > 0) {
                const extractedBookmarks = bookmarkResponse.map((item) => item.job)

                dispatch(setUserBookmarks(extractedBookmarks))
                setFilteredBookmarks(extractedBookmarks)
            } else {
                setFilteredBookmarks([]);
            }
        } catch (e) {
            console.error(e);
            console.error(error)
            toast.error(error)
        }
    };

    useEffect( () => {
        if (bookmarksFetchedRef.current) return;
        bookmarksFetchedRef.current = true;

        // -- check if bookmarks data is available in state
        if (bookmarks.length === 0) {
            console.log('requesting for new bookmarks')
            // GfetchBookmarks()
            fetchBookmarks().then(() => console.log(''));
        } else {
            // -- use data from state
            console.log('Bk exists')
            setFilteredBookmarks([])
            setFilteredBookmarks(bookmarks);
        }
    }, []);

    return (
        <div>
            <h1 className="font-bold p-1 mb-2 md:mb-6 w-full text-stone-900 text-xl md:text-2xl leading-4 flex justify-center">Favourite jobs</h1>
            <div
                className={`flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 items-center
                 border-red-500 p-2 md:px-10 gap-4 md:gap-6
                `}
            >
                {isLoading && <><Loader/> <p>loading...</p></>}

                {filteredBookmarks.length > 0 ? (
                    filteredBookmarks.map((bookmark) => (
                        <JobCard key={bookmark.id} job={bookmark} userIsEmployer={isEmployer}/>
                    ))
                ) : (
                    <p>You have not bookmarked any jobs</p>
                )}
            </div>
        </div>
    );
}