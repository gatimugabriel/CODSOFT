import {X} from "lucide-react";
import './DetailsModal.css';

export default function DetailsModal({applicant, onClose}) {
    return (
        <div className="details-container">
            <div className="flex justify-center mb-10 py-2 border-b border-slate-500 space-x-12 text-center"
                 onClick={onClose}>
                <X size={40} className="cursor-pointer rounded text-white bg-red-600 hover:bg-red-800"/>
            </div>

            <ul className="space-y-4 text-left">
                <li>
                    <span>First Name:</span> {applicant.firstName}
                </li>
                <li>
                    <span>Last Name:</span> {applicant.lastName}
                </li>
                <li>
                    <span>Email:</span> {applicant.contactEmail}
                </li>
                <li>
                    <span>Phone:</span> {applicant.contactPhone}
                </li>
                <li>
                    <span>About:</span> {applicant.essay}
                </li>
            </ul>
        </div>
    );
}