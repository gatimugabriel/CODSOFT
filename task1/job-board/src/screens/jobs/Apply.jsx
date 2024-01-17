import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {toast} from 'react-toastify';
import useAuth from "../../hooks/useAuth.js";
import {useApplyJobMutation} from "../../state/slices/jobs/jobApi.slice.js";

import Loader from "../../components/common/Loader.jsx";
import BackButton from "../../components/common/navigation/BackButton.jsx";
import TextInputGroup from "../../components/common/inputs/TextInputGroup.jsx";

export default function Apply() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {userInfo} = useAuth()
    const pdfName = `${userInfo?.user?.userName.split(' ').join('-').toLowerCase()}`

    // job
    const [applyJob, {isLoading, error}] = useApplyJobMutation()
    const {jobId, jobTitle} = useParams()

    const [formData, setFormData] = useState( {
        firstName: "",
        lastName: "",
        contactEmail: "",
        contactPhone: "",
        linkedInProfile: "",
        resume: "",
        essay: "",
        jobTitle: jobTitle || ""
    })

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
                [e.target.name]: e.target.name === 'resume' ? e.target.files[0] : e.target.value
        })
    };

    const handleApplicationSubmit = async (e) => {
        e.preventDefault();

        // validate resume file name
        const nameRegex = /^[a-zA-Z]+-[a-zA-Z]+\.(pdf)$/;
        const expectedFileName = `${pdfName}.pdf`
        if (!nameRegex.test(formData.resume.name) || (formData.resume.name !== expectedFileName)) {
            toast.error(`Invalid resume file name. It should be "${expectedFileName}"`);
            return
        }

        try {
            const data = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                data.append(key, value)
            })

            const dataToSend = {
                data,
                jobId
            }

            const response = await applyJob(dataToSend).unwrap()
            toast.success(response.message);
            setFormData( {
                firstName: "",
                lastName: "",
                contactEmail: "",
                contactPhone: "",
                linkedInProfile: "",
                resume: "",
                essay: ""
            })

            // setTimeout(() => {
            //     navigate('/applications')
            //
            // }, 3000)
        } catch (e) {
            console.error(e);
            toast.error(e?.data?.message)
        }
    };

    return (
        <div className="max-w-2xl mx-auto my-8">
            <BackButton/>
            <h2 className="text-2xl font-bold mb-4 ml-2">Submit your Application</h2>
            <form onSubmit={handleApplicationSubmit} className="border border-slate-600 mx-2 p-2 rounded">
                {/* personal info */}
                <div className="md:flex md:space-x-2 md:justify-between">
                    <TextInputGroup
                        type="text"
                        name="firstName"
                        labelValue="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                    <TextInputGroup
                        type="text"
                        name="lastName"
                        labelValue="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                </div>

                <TextInputGroup
                    type="email"
                    name="contactEmail"
                    labelValue="Email"
                    placeholder="your@email.com"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                />

                <TextInputGroup
                    type="number"
                    name="contactPhone"
                    labelValue="Phone Number"
                    placeholder="+00 123 456..."
                    value={formData.contactphone}
                    onChange={handleInputChange}
                />

                <TextInputGroup
                    type="text"
                    name="linkedInProfile"
                    labelValue="LinkedIn Profile Link"
                    // placeholder="https://linkedIn.com/in..."
                    value={formData.linkedInProfile}
                    onChange={handleInputChange}
                />

                <div className="mb-4">
                    <label htmlFor="essay"
                           className="block text-gray-700 font-bold mb-2">
                        Write Something Little About Yourself                    </label>
                    <textarea
                        name="essay"
                        rows="8"
                        className="w-full border border-slate-300 p-2 rounded focus:outline-none focus:border-indigo-600"
                        required
                        value={formData.essay}
                        onChange={handleInputChange}
                    ></textarea>
                </div>

                {/* resume upload*/}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="resume">
                        Upload Resume (PDF)
                    </label>
                    <input
                        type="file"
                        id="resume"
                        name="resume"
                        accept=".pdf, .doc, .docx"
                        required
                        onChange={handleInputChange}
                        className="border p-2 w-full"
                    />
                    <small className="text-gray-500">
                        Your resume should be
                        named: {userInfo &&
                        <>
                            <span className="text-indigo-700 font-bold">{pdfName}.pdf</span>
                        </>
                    }
                    </small>
                    <small className="text-gray-500 block">
                        Accepted file formats: <span className="text-stone-800 font-bold">.pdf</span>
                    </small>
                </div>

                {
                    isLoading ? <><Loader/> <span
                            className="text-xs text-indigo-700">submitting application...</span></> :
                        <button type="submit" className="btn green-btn">
                            Submit Application
                        </button>
                }
            </form>
        </div>
    );
}