import {Outlet} from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";
import ErrorComponent from "../error/ErrorComponent.jsx";

export default function RequireRole({allowedRole}) {
    const {userInfo} = useAuth();

    return (
        <>
            {
                userInfo.user.role !== allowedRole ?
                    <ErrorComponent
                        title={'Not allowed to view this page'}
                        description={'Sorry, your account type is not allowed to access this page. Contact us if you believe this is a mistake.'}
                    /> :
                    <Outlet/>
            }
        </>
    );
}