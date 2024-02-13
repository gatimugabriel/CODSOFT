import {Link} from 'react-router-dom'
import {greetings} from "../../assets/index.js";

export default function Hire() {
    return (
        <div className="bg-gradient-to-b from-stone-300 to-indigo-200 py-16 md:px-20">
            <div className="w-full flex flex-col md:flex-row items-center justify-center">
                {/* Image */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <img
                        src={greetings}
                        alt="Employer Section"
                        className="w-full h-auto object-cover rounded"
                        loading="lazy"
                    />
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 px-4 md:pl-24 text-center md:text-left">
                    <h2 className="text-3xl font-extrabold text-slate-800 mb-4">For Employers</h2>
                    <p className="text-lg text-stone-800 mb-6">
                        Acquire the best talent from around the globe. Connect with skilled professionals and
                        build a diverse, talented team.
                    </p>
                    <Link
                        to={'/signup'}
                        smooth={true}
                        duration={500}
                        className="px-6 py-3 text-base leading-6 font-medium rounded-md text-white bg-gradient-to-l from-green-600 to-green-500 hover:bg-gradient-to-r hover:from-green-700 hover:to-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-blue transition duration-150 ease-in-out"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
}