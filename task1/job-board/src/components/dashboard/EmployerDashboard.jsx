import { Link } from "react-router-dom";
import {PlusIcon, ClipboardCheckIcon, HeartIcon} from "lucide-react"; // Import other icons as needed

export default function EmployerDashboard() {
    return (
        <>
            <Link to={'/create-job'} className="dashboard-feature-link dashed-border">
                <PlusIcon />
                New Job
            </Link>

            <Link to={'/my-jobs'} className="dashboard-feature-link">
                <ClipboardCheckIcon />
                Manage Jobs
            </Link>

            <Link to={'/favourites'} className="dashboard-feature-link">
                <HeartIcon />
                Saved Jobs
            </Link>
        </>
    );
}