import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import "../../styles/custom.css";
import Loader from "../../components/Loader.jsx";
import { useForgotPasswordMutation } from "../../state/slices/auth/authApi.slice.js";
import BackButton from "../../components/navigation/BackButton.jsx";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [forgotPasswordApiCall, { isLoading }] = useForgotPasswordMutation();

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await forgotPasswordApiCall({ email }).unwrap();
      setMessage(response.passwordResetMessage);
      toast.success(response.passwordResetMessage);
    } catch (err) {
      toast.error(err.data.message);
    }
  };
  return (
    <>
      <div className="ml-4 md:ml-20 mt-4">
        <BackButton />
      </div>
      <div className="flex h-full items-center justify-center p-4">
        {isLoading && <Loader />}
        <form
          className="bg-white p-10 rounded shadow-lg"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl mb-6 font-bold text-stone-900">
            Reset Password
          </h2>
          <p className="text-stone-500 mb-6">
            Enter your email to recieve a password-reset link
          </p>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-y-3">
            {message ? (
              <p className="p-2 rounded bg-gradient-to-r from-green-600 to-green-500 text-white text-center">
                {message}
              </p>
            ) : (
              <button
                type="submit"
                className={`w-full rounded-md h-10 bg-gradient-to-r from-indigo-800 to-indigo-500 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-800 text-white border border-indigo-800`}
                disabled={isLoading}
              >
                {" "}
                Send
              </button>
            )}
            <span className="underline text-indigo-800 cursor-pointer">
              <Link to="/signin"> Back to Login</Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
}
