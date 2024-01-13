import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {toast} from 'react-toastify';
import BackButton from "../../components/common/navigation/BackButton.jsx";
import useAuth from "../../hooks/useAuth.js";
import {useApplyJobMutation} from "../../state/slices/jobs/jobApi.slice.js";
import Loader from "../../components/common/Loader.jsx";

export default function Apply() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // user
    const {userInfo} = useAuth()
    console.log(userInfo.user.userName)
    const userName = `${userInfo?.user?.userName.split(' ').join('-').toLowerCase()}`
    const [resume, setResume] = useState(null);
    const [about, setAbout] = useState('');

    // job
    const [applyJob, {isLoading, error}] = useApplyJobMutation()
    const {jobId} = useParams()


    const handleResumeChange = (e) => {
        const selectedResume = e.target.files[0];
        setResume(selectedResume);
    };

    const handleAboutChange = (e) => {
        setAbout(e.target.value);
    };

    const handleApplicationSubmit = async (e) => {
        e.preventDefault();

        // validate resume file name
        const nameRegex = /^[a-zA-Z]+-[a-zA-Z]+\.((pdf)|(docx))$/;
        const expectedFileName = `${userName}.pdf`
        const expectedFileName2 = `${userName}.docx`

        if (!nameRegex.test(resume.name) || (resume.name !== expectedFileName && resume.name !== expectedFileName2)) {
            toast.error(`Invalid resume file name. It should be "${expectedFileName}" or "${expectedFileName2}"`);
            return;
        }

        try {
            const formData = new FormData();
            formData.append('resume', resume);
            formData.append('about', about);

            const dataToSend = {
                formData,
                jobId
            }

            const response = await applyJob(dataToSend).unwrap()
            toast.success(response.message);

            // setTimeout(() => {
            //     navigate('/jobs')
            //
            // }, 2000)
        } catch (e) {
            console.error(e);
            toast.error(e?.data?.message)
        }
    };

    return (
        <div className="max-w-2xl mx-auto my-8">
            <BackButton/>
            <h2 className="text-2xl font-bold mb-4">Submit your Application</h2>
            <form onSubmit={handleApplicationSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="resume">
                        Upload Resume (PDF or DOCX)
                    </label>
                    <input
                        type="file"
                        id="resume"
                        name="resume"
                        accept=".pdf, .doc, .docx"
                        onChange={handleResumeChange}
                        className="border p-2 w-full"
                    />
                    <small className="text-gray-500">
                        Your resume should be
                        named: {userInfo &&
                        <>
                            <span className="text-indigo-700 font-bold">{userName}.pdf</span> 
                            {/* <span className="text-indigo-800 font-bold"> {userName}.docx</span> */}
                        </>
                    }
                    </small>
                    <small className="text-gray-500 block">
                        Accepted file formats:  <span className="text-stone-800 font-bold">.pdf</span>
                    </small>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="about">
                        About Yourself (Optional)
                    </label>
                    <textarea
                        id="about"
                        name="about"
                        value={about}
                        onChange={handleAboutChange}
                        rows="4"
                        className="border p-2 w-full"
                    />
                </div>
                {
                    isLoading ? <><Loader/> <span className="text-xs text-indigo-700">submitting application...</span></> :
                        <button type="submit" className="btn green-btn">
                            Submit Application
                        </button>
                }
            </form>
        </div>
    );
}