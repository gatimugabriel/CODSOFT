import {Link, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {GoogleOAuthProvider, GoogleLogin} from "@react-oauth/google";
import {toast} from "react-toastify";
// import {jwtDecode} from "jwt-decode";

import '../../styles/custom.css'
import useAuth from "../../hooks/useAuth.js";
import {useGoogleMutation, useSignupMutation} from "../../state/slices/auth/authApi.slice.js";
import {setCredentials} from "../../state/slices/auth/auth.slice.js";
import Loader from "../../components/common/Loader.jsx";

export default function SignUp() {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // user
    const {userInfo} = useAuth()
    const googleClientId = import.meta.env.VITE_GOOGLE_OAUTH2_CLIENT_ID
    const redirectPath = location.state ? location.state.path : "/dashboard"

    // -- API calls
    let [signupAPICall, {isLoading: signUpLoading, error: signUpError}] = useSignupMutation()
    const [googleAuthAPICall, {googleError}] = useGoogleMutation()

    const [successMessage, setSuccessMessage] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [formErrors, setFormErrors] = useState({});

    //  generic toggle function
    const toggleState = (state, setState) => {
        setSuccessMessage('') // clear success message -> avoids unambiguous messages
        setState(prevState => !prevState);
    };

    //  --- form states --- //
    // steps & progress
    const [totalSteps, setTotalSteps] = useState(2)
    const [currentStep, setCurrentStep] = useState(1)

    // user details
    const [userRole, setUserRole] = useState('');
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
        role: userRole,

        company_name: "",
        company_logo: "",
        registration_number: "",
    });

    const validateCompanyForm = () => {
        const errors = {};

        console.log(currentStep, userRole)
        console.log(formData)

        if (currentStep === 2 && userRole === 'employer') {
            if (!formData.company_name.trim()) {
                errors.company_name = "Company Name is required";
            }

            if (!formData.registration_number.trim()) {
                errors.registration_number = "Registration Number is required";
            }

            if (!formData.company_logo) {
                errors.company_logo = "Company Logo is required";
            }
        }

        return errors;
    };

    const nextStep = () => {
        const errors = validateCompanyForm()

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors)
            return
        }
        setFormErrors({})

        setCurrentStep((prevStep) => prevStep + 1);
    };

    const prevStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const handleInputChange = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.name === "company_logo" ? e.target.files[0] : e.target.value,
            role: userRole
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setSuccessMessage('')

        try {
            signUpError = ''
            if (formData.password !== formData.confirm_password) {
                toast.error("Passwords do not match. Please check and try again");
                return;
            }

            const dataToSend = new FormData()
            Object.entries(formData).forEach(([key, value]) => {
                dataToSend.append(key, value)
            })

            const response = await signupAPICall(dataToSend).unwrap()
            setSuccessMessage(response.message)

            setFormData({
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                confirm_password: "",
                role: userRole,

                company_name: "",
                registration_number: "",
                company_logo: ""
            });
        } catch
            (err) {
            toast.error(err?.data?.message || err?.data?.errors[0]?.msg || err.error);
        }
    }

    // const getGoogleUser = async (credentialResponse) => {
    //     try {
    //         // decoding credential
    //         const decoded = await jwtDecode(credentialResponse.credential)
    //         const userData = {
    //             first_name: decoded.family_name,
    //             last_name: decoded.given_name,
    //             email: decoded.email
    //         }
    //
    //         // API call
    //         const response = await googleAuthAPICall(userData).unwrap()
    //         dispatch(setCredentials({...response}))
    //         navigate(redirectPath)
    //     } catch (e) {
    //         toast.error(e?.data?.message || e.error)
    //     }
    // }

    useEffect(() => {
        if (userInfo) {
            navigate(redirectPath);
        }
    }, [userInfo, navigate, redirectPath]);

    return (
        <main className="flex min-h-screen justify-center p-4 bg-gradient-to-br from-stone-200 to-indigo-200">
            <div className="flex flex-col gap-y-3">
                <form className="bg-white p-10 rounded shadow-lg" onSubmit={handleSubmit}>

                    {/* STEP 1 (ROLE SELECT) */}
                    {currentStep === 1 && (
                        <>
                            <h2 className="text-2xl mb-6 font-bold text-stone-900">Get started</h2>
                            <p className="text-gray-900">What do you want to do?</p>

                            <div className="flex items-center justify-between gap-x-3 my-12 text-white w-80 ">
                                <div
                                    className={`cursor-pointer bg-green-600 rounded py-2 px-4  flex-1 text-center ${userRole === 'employer' ? 'border-4 border-indigo-500' : ''}`}
                                    onClick={() => {
                                        setTotalSteps(3)
                                        setUserRole('employer')
                                        setFormData({
                                            first_name: "",
                                            last_name: "",
                                            email: "",
                                            password: "",
                                            confirm_password: "",
                                            role: 'employer'
                                        });
                                    }}
                                >
                                    Hire
                                </div>
                                <div
                                    className={`cursor-pointer bg-purple-600 rounded py-2 px-4 flex-1  text-center ${userRole === 'candidate' ? 'border-4 border-green-500' : ''}`}
                                    onClick={() => {
                                        setTotalSteps(2)
                                        setUserRole('candidate')
                                        setFormData({
                                            first_name: "",
                                            last_name: "",
                                            email: "",
                                            password: "",
                                            confirm_password: "",
                                            role: 'candidate'
                                        });
                                    }}
                                >
                                    Find a Job
                                </div>
                            </div>
                        </>
                    )}

                    {currentStep === 2 && userRole === 'employer' && (
                        <>
                            <h2 className="text-2xl mb-6 font-bold text-stone-900">Company Details</h2>
                            {/* company details */}
                            <div className="input-group">
                                <label htmlFor="company_name">Company Name</label>
                                <input
                                    type="text"
                                    name="company_name"
                                    placeholder="Enter your company name"
                                    required
                                    value={formData.company_name}
                                    onChange={handleInputChange}
                                />
                                {formErrors.company_name && <p className="text-red-500">{formErrors.company_name}</p>}
                            </div>
                            <div className="input-group">
                                <label htmlFor="registration_number">Registration Number</label>
                                <input
                                    type="text"
                                    name="registration_number"
                                    placeholder="Enter your company/business reg no."
                                    required
                                    value={formData.registration_number}
                                    onChange={handleInputChange}
                                />
                                {formErrors.registration_number &&
                                    <p className="text-red-500">{formErrors.registration_number}</p>}
                            </div>
                            <div className="input-group">
                                <label htmlFor="company_logo">Choose Logo</label>
                                <input
                                    type="file"
                                    name="company_logo"
                                    accept=".png, .jpg, .webp, .avif"
                                    required
                                    onChange={handleInputChange}
                                />
                                {formErrors.company_logo && <p className="text-red-500">{formErrors.company_logo}</p>}
                            </div>
                        </>
                    )}

                    {/* STEP 2 (for CANDIDATES)  || STEP 3 (for EMPLOYERS) */}
                    {(currentStep === totalSteps) &&
                        <>
                            <h2 className="text-2xl mb-6 font-bold text-stone-900">Create an Account</h2>
                            {/* inputs */}
                            {/* names */}
                            <div className="flex items-center space-x-2">
                                <div className="input-group">
                                    <label htmlFor="first_name">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="first_name"
                                        placeholder="first name..."
                                        required
                                        value={formData.first_name}
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
                                        value={formData.last_name}
                                        onChange={handleInputChange}
                                    />
                                </div>
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
                                    value={formData.email}
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
                                        value={formData.password}
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
                                        required
                                        value={formData.confirm_password}
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

                            {/* Loading State */}
                            {signUpLoading &&
                                <div className="flex items-center"><Loader/> Please wait...</div>
                            }

                            {signUpError &&
                                <p className="flex items-center justify-center w-full p-4 rounded  text-red-500">
                                    {signUpError.data.message}
                                </p>
                            }

                            {successMessage &&
                                <p className="flex items-center justify-center w-full p-4 rounded   bg-green-500 text-white">
                                    {successMessage}
                                </p>
                            }

                            <p className="text-sm mt-4">
                                Already have an account?
                                <span className="text-blue-600 cursor-pointer ml-1"
                                      onClick={() => navigate('/signin')}>
                            Sign In
                            </span>
                            </p>

                            {/*Sign In with Google*/}
                            {/*<div className="mt-4 w-full">*/}
                            {/*    {googleError && <h3>{googleError}</h3>}*/}
                            {/*    <GoogleOAuthProvider clientId={googleClientId}>*/}
                            {/*        <GoogleLogin*/}
                            {/*            onSuccess={credentialResponse => {*/}
                            {/*                getGoogleUser(credentialResponse);*/}
                            {/*            }}*/}
                            {/*            onError={() => {*/}
                            {/*                console.log('Error occurred when signing in with Google');*/}
                            {/*            }}*/}
                            {/*        />*/}
                            {/*    </GoogleOAuthProvider>*/}
                            {/*</div>*/}
                        </>
                    }

                    {/* Navigation buttons */}
                    <div className="mt-4 flex items-center justify-between py-1">
                        {(currentStep > 1) &&
                            <button className="btn slate-btn" type="button" onClick={prevStep}>
                                Previous
                            </button>
                        }

                        {(currentStep < totalSteps && userRole !== '') &&
                            <button className="btn slate-btn" type="button" onClick={nextStep}>
                                Next
                            </button>
                        }
                        {(currentStep === totalSteps) &&
                            <button
                                type="submit"
                                className={`rounded-md px-4 py-1 bg-gradient-to-r from-indigo-800 to-indigo-500 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-800 text-white border border-indigo-800`}
                                disabled={signUpLoading}
                            >
                                Finish
                            </button>
                        }
                    </div>

                </form>
            </div>
        </main>
    )

}