import {Link} from "react-router-dom";
import {PlusIcon} from "lucide-react";
import useAuth from "../../hooks/useAuth.js";
import './Dashboard.css'

function Dashboard() {
    const {userInfo} = useAuth()

    return (
        <div className="dashboard-container">
            {userInfo?.user?.role === 'employer' ?
                <>
                    <Link to={'/create-job'}
                          className="feature-link">
                        <PlusIcon/>
                        New job
                    </Link>
                    <Link to={'/create-job'}
                          className="feature-link">
                        <PlusIcon/>
                        New job
                    </Link>

                    <Link to={'/create-job'}
                          className="feature-link">
                        <PlusIcon/>
                        New job
                    </Link>

                </>
                :

                <>
                    dashboard
                </>
            }
        </div>
    );
}

export default Dashboard;
