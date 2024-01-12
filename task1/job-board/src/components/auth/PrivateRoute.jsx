import {Navigate, Outlet, useLocation} from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";

export default function PrivateRoute() {
    const {userInfo} = useAuth()
    const location = useLocation()

    return (userInfo ? <Outlet/> :
            <Navigate to={"/signin"} state={{path: location.pathname}}/>
    )
}

