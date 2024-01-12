import {Home, Joystick, Search} from "lucide-react";

export default function HowItWorks () {
    return (
        <div id="howItWorks" className="bg-gradient-to-t from-stone-200 to-indigo-200 py-20">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">How It Works</h2>
                <div className="mt-8 px-12 md:px-0 flex flex-col md:flex-row lg:flex-row gap-8 justify-center ">
                    {/* Step 1 */}
                        <div className="flex-1 shadow-md hover:scale-105 transition duration-500 ease-in-out bg-slate-600 rounded-md p-6">
                            {/* step icon */}
                            <Home
                                size={32}
                                className="text-slate-100"
                            />
                            <div className="text-white text-4xl mb-4">Step 1</div>
                            <h3 className="text-lg font-semibold text-white mb-2">Sign Up</h3>
                            <p className="text-gray-200">Create an account to get started.</p>
                        </div>

                    {/* Step 2 */}
                        <div className="flex-1 shadow-md hover:scale-105 transition duration-500 ease-in-out bg-green-600 rounded-md p-6">
                            {/* step icon */}
                            <Search
                            size={32}
                            className="text-slate-100"
                            />
                            <div className="text-white text-4xl mb-4">Step 2</div>
                            <h3 className="text-lg font-semibold text-white mb-2">Explore Jobs</h3>
                            <p className="text-gray-200">Browse through a variety of job opportunities.</p>
                        </div>

                    {/* Step 3 */}
                        <div className="flex-1 shadow-md hover:scale-105 transition duration-500 ease-in-out bg-purple-600 rounded-md p-6">
                            {/* step icon */}
                            <Joystick
                                size={32}
                                className="text-slate-100"
                            />
                            <div className="text-white text-4xl mb-4">Step 3</div>
                            <h3 className="text-lg font-semibold text-white mb-2">Apply and Thrive</h3>
                            <p className="text-gray-200">Apply to your dream job and thrive in your career.</p>
                        </div>
                </div>
            </div>
        </div>
    );
}

