import {Link} from "react-router-dom";
import {happyMan} from "../../assets/index.js";

const Hero = () => {
    return (
        <main className="
        h-fit md:h-[calc(100vh-10vh)] md:flex
         bg-gradient-to-r from-indigo-700 to-indigo-500 ">

            {/* left-side Content */}
            <section
                className="flex-1 flex flex-col items-center justify-center h-[calc(100vh-50vh)] md:min-h-full">
                {/* text */}
                <div className="px-4 text-white">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                        <span className="text-indigo-100">Find Your Dream Job</span>
                    </h1>
                    <p className="mt-1 text-xl tracking-normal"><span className="text-green-400">Discover</span> & <span className="text-green-400">Post</span> amazing job opportunities worldwide.</p>
                </div>

                {/* search  */}
                {/*<div></div>*/}

                {/* Search Inputs */}
                <div className="relative mt-16">
                    <div className="text-center">
                        <Link
                            to={'/jobs'}
                            smooth={true}
                            duration={500}
                            className="px-6 py-3 text-base leading-6 font-medium rounded-md text-white bg-gradient-to-l from-green-600 to-green-500 hover:bg-gradient-to-r hover:from-green-700 hover:to-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-blue transition duration-150 ease-in-out"
                        >
                            Explore Jobs
                        </Link>
                    </div>
                </div>
            </section>


            {/* Right side --> banner image */}
            <section className="flex-1 h-full">
                <img
                    className="h-full object-cover"
                    src={happyMan}
                    alt="Banner"
                    loading="lazy"
                />
            </section>


        </main>
    );
};

export default Hero;