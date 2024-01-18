import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useCreateJobMutation, useGetJobMutation, useUpdateJobMutation} from '../../state/slices/jobs/jobApi.slice.js';
import {setEmployerJobs} from '../../state/slices/jobs/job.slice.js';
import {toast} from 'react-toastify';
import Loader from '../../components/common/Loader.jsx';
import {PlusIcon, SaveIcon} from 'lucide-react';
import {useNavigate, useParams} from "react-router-dom";
import './AddEditJob.css'
import useActiveLink from "../../hooks/useActiveLink.js";
import useAuth from "../../hooks/useAuth.js";

export default function AddEditJob() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const activeLink = useActiveLink()

    //job
    const {jobId} = useParams()
    // let jobs = useSelector(state => state.jobs.employerJobs)
    const [createJobApiCall, {isLoading: createJobLoading, error: createJobError}] = useCreateJobMutation();
    const [getJobApiCall, {isLoading: getJobLoading, error: getJobError}] = useGetJobMutation();
    const [updateJobApiCall, {isLoading: updateJobLoading, error: updateJobError}] = useUpdateJobMutation();

    // user
    const {userInfo} = useAuth()
    // userInfo.user.company is an array
    const userCompany = userInfo.user.company && userInfo.user.company.length > 0 ? userInfo.user.company[0] : null;
    const {company_name, company_logo} = userCompany || {};

    const [jobData, setJobData] = useState({
        title: '',
        category: '',
        company: company_name || '',
        companyLogo: company_logo || '',
        location: '',
        type: 'Full-time',
        experience: '',
        description: '',
        skills: '',
        salaryType: 'range',
        salary: '',
        lowerLimit: '',
        upperLimit: '',
        fixedSalary: '',
    });

    const [salaryError, setSalaryError] = useState('')

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        // --- input formats --- //
        if (name === 'skills') {
            const skillsArray = value.split(',').map((skill) => skill.trim());
            setJobData({...jobData, [name]: skillsArray});
        } else if (name === 'salaryType') {
            setJobData({
                ...jobData,
                salaryType: value,
                salary: ''
            })
        } else {
            setJobData({...jobData, [name]: value});
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSalaryError('')

        let formattedSalary = ''
        if (jobData.salaryType === 'range') {
            if (+(jobData.lowerLimit) >= +(jobData.upperLimit)) {
                setSalaryError('Salary Upper limit value should not be less than or equal to the Lower Limit')
                return
            }
            formattedSalary = `$${jobData.lowerLimit}-$${jobData.upperLimit}`
        } else {
            formattedSalary = `$${jobData.fixedSalary}`
        }

        const formData = {...jobData, salary: formattedSalary}
        const dataToSend = {
            formData,
            jobId
        }
        try {
            let response
            if (activeLink === '/create-job') {
                response = await createJobApiCall(dataToSend).unwrap();
                dispatch(setEmployerJobs([response.newJob]));
            } else {
                // update details
                response = await updateJobApiCall(dataToSend).unwrap()
                // should update state --> employer jobs --> updated job
            }

            setTimeout(() => {
                navigate('/my-jobs')
            }, 3000)

            toast.success(response.message)
        } catch (e) {
            console.error(e);
            toast.error(e?.data?.message);
        }
    };

    const getJob = async () => {
        try {
            const response = await getJobApiCall(jobId).unwrap()
            setJobData({...response})
        } catch (e) {
            console.error(e)
            toast.error(e)
        }
    }

    useEffect(() => {
        if (activeLink === '/create-job') return
        getJob()
    }, []);

    return (
        <div className="flex flex-col w-full items-center justify-center">
            <h2 className="w-full mb-1 p-1 text-xl md:text-2xl mx-20 text-center text-indigo-700 bg-gradient-to-tr from-stone-200 to-indigo-100 ">
                {activeLink === '/create-job' ? 'Post a Job' : 'Edit Job'}
            </h2>
            {
                (getJobLoading || createJobLoading || updateJobLoading) && <Loader/>
            }
            <form onSubmit={handleSubmit} className="w-full p-4 bg-gradient-to-br from-stone-200 to-indigo-100">
                {/* Input fields */}
                <div className="flex flex-col md:flex-row gap-x-3 gap-y-2">

                    {/* Company Details */}
                    <div className="category-input">
                        <h3>Company Details </h3>
                        <h6 className="text-xs mx-auto text-green-500 mb-4">We got you covered here</h6>
                        <label htmlFor="company">Company</label>
                        <input
                            type="text"
                            name="company"
                            value={jobData.company}
                            placeholder="Company*"
                            // onChange={handleInputChange}
                            required
                        />
                        <label htmlFor="logo">Your Logo</label>
                        <img src={jobData.companyLogo} alt="company logo" className="h-20 w-20 object-contain"/>
                    </div>

                    {/* Job Details */}
                    <div className="category-input">
                        <h3>Job Details</h3>
                        <label htmlFor="category">Job Category</label>
                        <input
                            type="text"
                            name="category"
                            value={jobData.category}
                            placeholder="Job Category*"
                            onChange={handleInputChange}
                            required
                        />
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={jobData.title}
                            placeholder="Job Title*"
                            onChange={handleInputChange}
                            required
                        />
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            name="location"
                            value={jobData.location}
                            placeholder="Location*"
                            onChange={handleInputChange}
                            required
                        />
                        <div className="p-1 rounded bg-indigo-200 my-1">
                            <label htmlFor="type">Job Type:</label>
                            <select className="px-3 mb-2 bg-stone-100 rounded" name="type" id="type"
                                    value={jobData.type} defaultValue={jobData.type} onChange={handleInputChange} required>
                                <option value="Full-time" selected>Full-Time</option>
                                <option value="Part-time" >Part-Time</option>
                                <option value="Contract">Contract</option>
                            </select>
                        </div>

                        {/* salary type select */}
                        <div className="p-1 pb-3 rounded bg-indigo-200 my-1">
                            <label className="flex items-center space-x-2">
                                <span className="text-stone-600">Salary Type: </span>
                                <select className="bg-indigo-700 outline-0 rounded p-1 text-stone-50" name="salaryType"
                                        value={jobData.salaryType}
                                        onChange={handleInputChange}
                                        defaultValue={jobData.salaryType}
                                >
                                    <option value="range" selected>Range</option>
                                    <option value="fixed">Fixed</option>
                                </select>
                            </label>

                            {/* range salary */}
                            {jobData.salaryType === 'range' && (
                                <>
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="flex items-center">
                                            <span>$</span>
                                            <input
                                                type="number"
                                                name="lowerLimit"
                                                value={jobData.lowerLimit}
                                                placeholder="from"
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <span className="font-extrabold text-2xl">-</span>

                                        <div className="flex items-center">
                                            <span>$</span>
                                            <input
                                                type="number"
                                                name="upperLimit"
                                                value={jobData.upperLimit}
                                                placeholder="to"
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    {salaryError && (
                                        <p className="text-red-500">{salaryError}</p>
                                    )}
                                </>
                            )}

                            {/* fixed salary */}
                            {jobData.salaryType === 'fixed' && (
                                <div className="flex items-center">
                                    <span>$</span>
                                    <input
                                        type="number"
                                        name="fixedSalary"
                                        // value={activeLink === '/create-job' ? jobData.fixedSalary : jobData.salary}
                                        value={jobData.fixedSalary}
                                        placeholder="Fixed Salary"
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Skills & Experience*/}
                    <div className="category-input">
                        <h3>Skills & Exp</h3>
                        <label htmlFor="experience">Preferred Experience</label>
                        <input
                            type="text"
                            name="experience"
                            value={jobData.experience}
                            placeholder="1, 2, 3..."
                            onChange={handleInputChange}
                            required
                        />

                        <label htmlFor="category">Preferred Skills</label>
                        <input
                            type="text"
                            name="skills"
                            value={jobData.skills}
                            placeholder="(comma-separated)*"
                            onChange={handleInputChange}
                            required
                        />

                        <label htmlFor="description">Description</label>
                        <textarea
                            name="description"
                            value={jobData.description}
                            placeholder="Job Description*"
                            className="px-2 py-1 font-medium"
                            onChange={handleInputChange}
                            rows="10"
                            required
                        />
                    </div>

                </div>
                <button type="submit" className="btn green-btn flex items-center space-x-2 mt-4">
                    {
                        activeLink === '/create-job' ?
                            <> <PlusIcon/> <span>Post</span> </>
                            :
                            <> <SaveIcon/> <span>Update Job</span> </>
                    }
                </button>


            </form>
        </div>
    )

}