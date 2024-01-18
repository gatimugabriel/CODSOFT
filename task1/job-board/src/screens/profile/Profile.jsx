import {useEffect, useState, useRef} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";

import {useGetUserMutation, useUpdateUserMutation} from "../../state/slices/profile/profileApi.slice.js";
import Loader from "../../components/common/Loader.jsx";
import './Profile.css'
import useAuth from "../../hooks/useAuth.js";
import {setCredentials} from "../../state/slices/auth/auth.slice.js";

export default function Profile() {
    const dataFetchedRef = useRef(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [getProfile, {isLoading: getProfileLoading, error: getProfileError}] = useGetUserMutation()
    const [updateProfile, {isLoading: updateProfileLoading, error: updateProfileError}] = useUpdateUserMutation()
    const [successMessage, setSuccessMessage] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [selectedLogo, setSelectedLogo] = useState(null);

    const {userInfo} = useAuth()
    // userInfo.user.company is an array
    const userCompany = userInfo?.user?.company && userInfo?.user?.company.length > 0 ? userInfo.user.company[0] : null;
    const {company_name, company_logo, registration_number} = userCompany || {};

    const [userData, setUserData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
        company: company_name || '',
        companyLogo: company_logo || '',
        registration_number: registration_number || ''
    });

    useEffect(() => {
        if (dataFetchedRef.current) return
        dataFetchedRef.current = true

        const getUser = async () => {
            try {
                const response = await getProfile().unwrap()
                setUserData({...response})
            } catch (e) {
                console.error(e)
            }
        }

        getUser()
    }, []);


    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    const toggleState = (state, setState) => {
        setSuccessMessage('') // clear success message
        setState(prevState => !prevState);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (userData.password !== userData.confirm_password) {
            toast.error("Passwords do not match");
        } else {
            try {
                const formData = new FormData();
                formData.append("logo", selectedLogo);
                Object.entries(userData).forEach(([key, value]) => {
                    formData.append(key, value);
                });

                const response = await updateProfile(formData).unwrap();
                toast.success(response.message);
                dispatch(setCredentials({...response}))
                dataFetchedRef.current = false // trigger useEffect --> refetch user profile
            } catch (err) {
                toast.error(err?.data?.message || err.error);
            }
        }
    }


    return (
        <div className="flex h-full items-center justify-center rounded border py-2 border-slate-300">
            {getProfileError && <p className="flex items-center justify-center w-full p-4 rounded  text-red-500">
                {getProfileError?.data?.message}
            </p>
            }

            {getProfileLoading ? <Loader/>
                :
                <form className="bg-gradient-to-br from-stone-200 to-indigo-200 p-10 rounded shadow-lg"
                      onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row gap-x-3 gap-y-2 mb-4">

                        {/*  personal details */}
                        <div className="category-input">
                            <h2 className="text-2xl mb-6 font-bold text-stone-900">Update personal details</h2>

                            <div className="input-group">
                                <label htmlFor="first_name">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="first_name"
                                    placeholder="first name..."
                                    required
                                    value={userData.first_name}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="input-group">
                                <label htmlFor="last_name">
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    name="last_name"
                                    placeholder="last name..."
                                    required
                                    value={userData.last_name}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="input-group">
                                <label htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    required
                                    value={userData.email}
                                    onChange={handleInputChange}
                                />
                            </div>

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
                                        value={userData.password}
                                        onChange={handleInputChange}
                                    />
                                    {showPassword ?
                                        (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor"
                                                 className="w-6 h-6  cursor-pointer "
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
                                        required value={userData.confirm_password}
                                        onChange={handleInputChange}
                                    />
                                    {showPassword ?
                                        (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor"
                                                 className="w-6 h-6 cursor-pointer "
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

                        </div>
                        {/* company details*/}
                        {(userInfo?.user?.role === 'employer') &&
                            <div className="category-input">
                                <h2 className="text-2xl mb-6 font-bold text-stone-900">Update company details</h2>

                                <div className="input-group">
                                    <label htmlFor="company">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        placeholder="company name..."
                                        required
                                        value={userData.company}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="input-group">
                                    <label htmlFor="registration_number">
                                        Registration Number
                                    </label>
                                    <input
                                        type="text"
                                        name="registration_number"
                                        placeholder="registration number..."
                                        required
                                        value={userData.registration_number}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                {/*<div className="input-group">*/}
                                {/*    <label htmlFor="logo">Your Logo</label>*/}
                                {/*    <img src={company_logo} alt="company logo"*/}
                                {/*         className="h-20 w-20 object-contain"/>*/}
                                {/*</div>*/}

                                <div className="input-group">
                                    <label htmlFor="logo">Change Logo</label>
                                    <img src={company_logo} alt="company logo"
                                         className="h-20 w-20 object-contain"/>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => setSelectedLogo(e.target.files[0])}
                                    />
                                </div>


                            </div>
                        }
                    </div>

                    {/* Loading State*/}
                    {updateProfileLoading && <div className="flex items-center"><Loader/> Please wait...</div>}
                    {updateProfileError &&
                        <p className="flex items-center justify-center w-full p-4 rounded  text-red-500">
                            {updateProfileError?.data?.message || updateProfileError}
                        </p>
                    }

                    {/* Action Buttons */}
                    {(successMessage) ?
                        <p className="flex items-center justify-center w-full p-4 rounded   bg-green-500 text-white">
                            {successMessage}
                        </p>
                        :
                        <div className="flex items-center space-x-2 justify-between">
                            <button
                                type="submit"
                                className={`w-full rounded-md h-10 bg-gradient-to-r from-indigo-800 to-indigo-500 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-800 text-white border border-indigo-800`}
                                disabled={updateProfileLoading}
                            >
                                Update
                            </button>
                            <button
                                onClick={() => navigate('/dashboard')}
                                className={`w-full rounded-md h-10 bg-gradient-to-r from-red-700 to-red-500 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 text-white border border-red-500`}
                            >
                                Cancel
                            </button>
                        </div>
                    }
                </form>
            }
        </div>
    );
}