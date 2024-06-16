import {useState} from 'react';
import {toast} from 'react-toastify';
import {useDispatch, useSelector} from 'react-redux';
import {useGetUserBookmarksMutation, useToggleBookmarkMutation} from '../state/slices/jobs/jobApi.slice';
import {removeBookmark, setUserBookmarks} from '../state/slices/jobs/job.slice';
import useAuth from '../hooks/useAuth';

const useBookmark = async (job) => {
    const dispatch = useDispatch();
    const {userInfo} = useAuth();
    const bookmarks = useSelector((state) => state.jobs.bookmarkedJobs);
    const [isJobBookmarked, setIsJobBookmarked] = useState(
        bookmarks.some((bookmarkedJob) => bookmarkedJob.id === job.id)
    );

    const [getBookmarksApiCall, {
        isLoading: fetchBookmarksLoading,
        error: fetchBookmarksError
    }] = useGetUserBookmarksMutation();
    const [toggleBookmarkApiCall, {
        isLoading: toggleBookmarkLoading,
        error: toggleBookmarkError
    }] = useToggleBookmarkMutation();

    const fetchBookmarks = async () => {
        try {
            const bookmarkResponse = await getBookmarksApiCall().unwrap();

            // update state & bookmark datasource list
            if (bookmarkResponse.length > 0) {
                const extractedJobs = bookmarkResponse.map((item) => item.job)
                dispatch(setUserBookmarks(extractedJobs))
            }else{
                dispatch(setUserBookmarks([]))
            }
        } catch (e) {
            console.error(e);
            console.error(fetchBookmarksError)
            toast.error(fetchBookmarksError)
        }
    };

    const toggleBookmark = async () => {
        try {
            if (!userInfo) {
                alert('Login first in order to save your favorite jobs');
                return;
            }

            const response = await toggleBookmarkApiCall(job.id).unwrap();

            if (!isJobBookmarked) {
                dispatch(setUserBookmarks([job]));
            } else {
                dispatch(removeBookmark(job.id));
            }

            setIsJobBookmarked(!isJobBookmarked);
            toast.success(response.message);
        } catch (e) {
            console.error(e);
            console.error(toggleBookmarkError);
            // toast.error('An error occurred while bookmarking.');
            toast.error(toggleBookmarkError);
        }
    }

    return {
        GisJobBookmarked: isJobBookmarked,
        GfetchBookmarks: fetchBookmarks(),
        GtoggleBookmark: toggleBookmark(),
        GisLoading: fetchBookmarksLoading || toggleBookmarkLoading,
        Gerror: fetchBookmarksError || toggleBookmarkError
    }
}

export default useBookmark
