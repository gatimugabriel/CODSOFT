import {useState} from "react";
import {Link, useParams} from "react-router-dom";
import {toast} from "react-toastify";

import '../../styles/custom.css'
import Loader from "../../components/common/Loader.jsx";
import {useResetPasswordMutation} from "../../state/slices/auth/authApi.slice.js";
import BackButton from "../../components/common/navigation/BackButton.jsx";

export default function ResetPassword() {
    const resetToken = useParams().resetToken;
    const [formData, setFormData] = useState({
        password: "",
        confirm_password: "",
    });
    const [showPassword, setShowPassword] = useState(false)
    const [message, setMessage] = useState('')
    const [resetPasswordApiCall, {isLoading, error}] = useResetPasswordMutation();

    const toggleState = (state, setState) => {
        setState(prevState => !prevState);
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('')

        if (formData.password !== formData.confirm_password) {
            toast.error("Passwords do not match. Check and try again");
            return;
        }

        try {
            const dataToSend = {
                formData,
                resetToken
            }

            const response = await resetPasswordApiCall(dataToSend).unwrap();
            setMessage(response.message)
            toast.success(response.message);
        } catch (e) {
            console.log(e)
            console.log(error)
            toast.error(e?.data?.message);
        }
    };
    return (
        <>
            <div className="ml-4 md:ml-20 mt-4">
                <BackButton/>
            </div>
            <div className="flex h-full items-center justify-center p-4">
                {isLoading && <Loader/>}
                <form className="bg-white p-10 rounded shadow-lg" onSubmit={handleSubmit}>
                    <h2 className="text-2xl mb-6 font-bold text-stone-900">Reset Password</h2>
                    <p className="text-stone-500 mb-6">Enter your new login password</p>
                    <div className="input-group">
                        <label htmlFor="password">
                            Password
                        </label>
                        <div className="flex items-center space-x-1">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter your password"
                                required
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                            {showPassword ?
                                (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  cursor-pointer "
                                         onClick={() => toggleState(showPassword, setShowPassword)}>
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"/>
                                    </svg>

                                ) :
                                (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5}
                                         stroke="currentColor" className="w-6 h-6   cursor-pointer "
                                         onClick={() => toggleState(showPassword, setShowPassword)}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                )

                            }
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="confirm_password">
                            Confirm Password
                        </label>
                        <div className="flex items-center space-x-1">

                            <input
                                type={showPassword ? "text" : "password"}
                                name="confirm_password"
                                placeholder="Confirm your password"
                                required
                                value={formData.confirm_password}
                                onChange={handleInputChange}
                            />
                            {showPassword ?
                                (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer "
                                         onClick={() => toggleState(showPassword, setShowPassword)}>
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"/>
                                    </svg>

                                ) :
                                (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5}
                                         stroke="currentColor" className="w-6 h-6 cursor-pointer "
                                         onClick={() => toggleState(showPassword, setShowPassword)}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                )
                            }
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-3">
                        {message ?
                            <>
                                <p className="p-2 rounded bg-gradient-to-r from-green-600 to-green-500 text-white text-center">{message}</p>
                            </>
                            :
                            <button
                                type="submit"
                                className={`w-full rounded-md h-10 bg-gradient-to-r from-indigo-800 to-indigo-500 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-800 text-white border border-indigo-800`}
                                disabled={isLoading}
                            > Confirm
                            </button>
                        }
                        <span className="underline text-indigo-800 cursor-pointer">
                            <Link to="/signin"> {message ? 'Go to Login' : 'Cancel'}</Link>
                        </span>

                    </div>
                </form>
            </div>
        </>
    )

}