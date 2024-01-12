import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";

import '../../styles/custom.css'
import Loader from "../../components/Loader.jsx";
import {useVerifyUserMutation} from "../../state/slices/auth/authApi.slice.js";
import {setCredentials} from "../../state/slices/auth/auth.slice.js";

export default function EmailVerification() {
    const userVerifiedRef = useRef(false)
    const {verificationCode} = useParams();
    const [userInfo, setuserInfo] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [message, setMessage] = useState('')

    const [verifyUserApiCall, {isLoading, error}] = useVerifyUserMutation();

    const verifyUser = async () => {
        try {
            const response = await verifyUserApiCall(verificationCode).unwrap();
            setuserInfo(response);
            setMessage(response.message)
            toast.success(response.message)
        } catch (err) {
            toast.error(err.data.message);
        }
    };

    useEffect(() => {
        if (userVerifiedRef.current === true) return
        userVerifiedRef.current = true

        verifyUser();
    }, []);

    const handleLogin = () => {
        dispatch(setCredentials({...userInfo}));
        navigate("/dashboard");
    };
    const handleRequestLink = () => {
        navigate('/forgot-password')
    };

    return (
        <div className="flex items-center justify-center h-screen">
            {isLoading && <Loader/>}
            {error ? (
                <div>
                    <p>{error.data.message}</p>
                    <button className="w-full p-2 mt-4 rounded text-white bg-indigo-600 hover:bg-indigo-800"
                            onClick={handleRequestLink}>
                        Click here to request a new link
                    </button>
                </div>
            ) : (
                <div>
                    <p> {message && <p className="p-2 bg-stone-50 rounded text-indigo-600 text-center">{message}</p>} ✅</p>
                    <button className="btn bg-green-600" onClick={handleLogin}>
                        Click here to Login
                    </button>
                </div>
            )}
        </div>

    );
}
