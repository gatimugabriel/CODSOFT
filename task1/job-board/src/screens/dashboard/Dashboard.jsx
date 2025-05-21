import useAuth from "../../hooks/useAuth.js";
import './Dashboard.css'
import EmployerDashboard from "../../components/dashboard/EmployerDashboard.jsx";
import CandidateDashboard from "../../components/dashboard/CandidateDashboard.jsx";

export default function Dashboard() {
    const { userInfo } = useAuth()
    // const userName = userInfo?.user?.userName.split(' ')[0]

    return (
        <div className="dashboard-container">
            {userInfo?.user?.role === 'employer' ?
                <EmployerDashboard />
                :
                <>
                    <CandidateDashboard />
                </>
            }
        </div>
    );
}