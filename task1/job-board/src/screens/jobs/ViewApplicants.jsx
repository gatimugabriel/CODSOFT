import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { pdfjs } from "react-pdf";

import './ViewApplicant.css'
import Loader from '../../components/common/Loader.jsx';
import { useGetJobApplicationsMutation, useGetJobMutation } from '../../state/slices/jobs/jobApi.slice.js';
import { formatDate } from "../../utils/date.util.js";
import PdfModalComponent from "../../components/jobApplicants/pdf/PdfModalComponent.jsx";
import DetailsModal from "../../components/jobApplicants/applicant/DetailsModal.jsx";

export default function ViewApplicants() {
    const dataFetchedRef = useRef(false);

    // react-pdf config
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.js',
        import.meta.url,
    ).toString();
    // pdf
    const [pdf, setPdf] = useState(null);
    const [viewingPdf, setViewingPdf] = useState(false);
    const [viewingDetails, setViewingDetails] = useState(false);
    const [applicant, setApplicant] = useState(null);

    // job
    const { jobId } = useParams();
    const initialJob = useSelector((state) => state.jobs.employerJobs.find((j) => j.id === +jobId));
    const [job, setJob] = useState(initialJob);
    const [getJobApiCall, { isLoading: getJobLoading, error: getJobError }] = useGetJobMutation();

    // job Applications
    const [getJobApplications, {
        isLoading: getApplicationsLoading,
        error: getApplicationsError
    }] = useGetJobApplicationsMutation();
    const [applicants, setApplicants] = useState([]);

    const getJob = async () => {
        try {
            const jobData = await getJobApiCall(jobId).unwrap();
            setJob(jobData);
        } catch (e) {
            console.error(e);
            toast(e?.data?.message);
        }
    };

    const fetchApplicants = async () => {
        try {
            const response = await getJobApplications(jobId).unwrap();
            setApplicants(response);
        } catch (e) {
            console.error(e);
        }
    };

    const handleViewResume = async (resumePath) => {
        setViewingDetails(false)

        setViewingPdf(true);
        setPdf(resumePath)
    };

    const handleViewDetails = (applicant) => {
        setViewingPdf(false)

        setViewingDetails(true)
        setApplicant(applicant)
    }

    const handleCloseModal = () => {
        setViewingPdf(false);
        setViewingDetails(false)
    };

    useEffect(() => {
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;

        if (!job) {
            getJob();
            fetchApplicants();
        } else {
            fetchApplicants();
        }
    }, []);


    return (
        <div className="px-2 md:px-8">
            {(getJobLoading || getApplicationsLoading) && <Loader />}
            <header className="">
                <span className="font-semibold text-stone-950 mr-3 text-xl">Job:</span> <span
                    className=" ml-20 text-stone-800 text-xl italic">{job?.title}</span>
                <br />
                <span className="font-semibold text-stone-950 mr-3 text-xl">Applicants:</span> <span
                    className="ml-2 text-green-600 text-xl">{applicants ? applicants.length : '0'}</span>
                <br />
            </header>

            <section className="mt-4 border-t-2 border-t-slate-800">
                {applicants.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table
                            className="mt-2 min-w-full bg-gradient-to-br from-stone-200 to-indigo-200 border border-slate-500 rounded-md">
                            <thead>
                                <tr className="text-indigo-700">
                                    <th>Name</th>
                                    <th>Applied On</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {applicants.map((applicant) => (
                                    <tr key={applicant.id} className="hover:bg-gray-100 transition duration-300">
                                        <td>
                                            {applicant.user?.first_name} {applicant.user?.last_name}
                                        </td>
                                        <td className="text-stone-700">
                                            {formatDate(applicant.createdAt)}
                                        </td>
                                        <td className="actions-cell">
                                            <button
                                                onClick={() => handleViewResume(applicant.resumePath)}
                                                className="more-action-btn bg-slate-700"
                                            >
                                                View Resume
                                            </button>

                                            <button className="more-action-btn bg-green-600" onClick={() => handleViewDetails(applicant)}>all info</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* view pdf & details components */}
                        {viewingPdf && <PdfModalComponent pdf={pdf} onClose={handleCloseModal} />}
                        {viewingDetails && <DetailsModal applicant={applicant} onClose={handleCloseModal} />}

                    </div>
                ) : (
                    <p className="mt-6 text-xl md:text-2xl text-indigo-700">
                        Oops! No one has applied to this job. Check later.
                    </p>
                )}
            </section>

        </div>
    );
}