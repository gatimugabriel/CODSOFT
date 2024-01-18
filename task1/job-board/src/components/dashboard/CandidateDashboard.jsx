import { Link } from "react-router-dom";
import { FileTextIcon, BriefcaseIcon, HeartIcon } from "lucide-react";

export default function CandidateDashboard() {
    return (
        <>
            {/*<Link to={'/resume'} className="dashboard-feature-link">*/}
            {/*    <FileTextIcon />*/}
            {/*    View Resume*/}
            {/*</Link>*/}

            <Link to={'/applications'} className="dashboard-feature-link">
                <BriefcaseIcon />
                Job Applications
            </Link>

            <Link to={'/favourites'} className="dashboard-feature-link">
                <HeartIcon />
                Saved Jobs
            </Link>
        </>
    );
}