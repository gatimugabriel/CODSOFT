import {useState} from "react";
import {Link} from "react-router-dom";

import '../../../styles/custom.css'
import Menu from "./Menu.jsx";
import MenuItem from "./MenuItem.jsx";
import useAuth from "../../../hooks/useAuth.js";
import useActiveLink from "../../../hooks/useActiveLink.js";

export default function Nav() {
    const {userInfo} = useAuth()
    const parentLink = useActiveLink() // gets the current page
    const [activeLink, setActiveLink] = useState(parentLink)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleMenuItemClick = (href) => {
        setActiveLink(href)
        if (isMenuOpen) {
            toggleMenu()
        }
    }

    return (
        <>
            <nav
                className={`${isMenuOpen ? 'divide-y divide-stone-900 border-b-2 border-slate900' : ''}h-auto md:h-28 bg-gradient-to-r from-indigo-700 to-indigo-500 shadow p-5 pl-8 md:px-16 md:flex md:items-center md:justify-between  z-[-1] md:z-auto`}>

                {/* search button */}
                <div className="flex items-center justify-evenly text-white space-x-1 md:space-x-3 mb-2">
                    <form className="relative w-auto md:w-max ">
                        <input type="search" id="search"
                               className="relative peer z-10 bg-transparent w-12 h-12 rounded-full border cursor-pointer pl-12 pr-4 focus:w-full focus:border-lime-300 focus:cursor-text focus:pl-20 focus:pr-4"></input>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor"
                             className="absolute bg-green-500 rounded-full h-12 inset-y-6 my-auto w-16 px-3.5 border-r border-transparent peer-focus:bg-transparent peer-focus:rounded peer-focus:border-lime-300 peer-focus:stroke-lime-300">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                        </svg>
                    </form>

                    <div className="flex">
                        <div className="mr-4 md:mr-20">
                            <h1 className="text-xl md:text-2xl md:font-extrabold ">Job Board</h1>
                            <h6 className="text-slate-200 text-sm">find your dream job</h6>
                        </div>

                        {/* Mobile Menu Icon */}
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 strokeWidth={1.5}
                                 stroke="currentColor"
                                 onClick={toggleMenu}
                                 className="w-9 h-12 cursor-pointer md:hidden"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 strokeWidth={1.5}
                                 stroke="currentColor"
                                 onClick={toggleMenu}
                                 className="w-9 h-12 cursor-pointer md:hidden">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                            </svg>
                        )
                        }
                    </div>
                </div>

                {/* page links */}
                <Menu isMenuOpen={isMenuOpen}>
                    <MenuItem href="/" onClick={() => handleMenuItemClick('/')}>Home</MenuItem>
                    <MenuItem href="/jobs" onClick={() => handleMenuItemClick('/jobs')}>Browse
                        Jobs</MenuItem>
                    {/*<MenuItem href="/blog" onClick={() => handleMenuItemClick('/blog')}>Blog</MenuItem>*/}
                    <MenuItem href="/contact" onClick={() => handleMenuItemClick('/contact')}>Contact</MenuItem>
                    {userInfo &&
                        <MenuItem
                            href="/dashboard"
                            onClick={() => handleMenuItemClick('/dashboard')}
                        >
                            Account
                        </MenuItem>
                    }
                </Menu>

                {/* userInfo & action links (login & post buttons) */}
                <div className={`${isMenuOpen ? 'block my-2' : 'hidden'} md:flex text-white items-center`}>
                    {userInfo ?
                        <div className="flex flex-col md:flex-row space-x-2 ">
                            <p className="font-medium text-stone-50 my-4 mx-2 md:m-auto">{userInfo?.user?.userName}</p>
                        </div>
                        :
                        <>
                            <Link
                                to={"/signin"}
                                onClick={handleMenuItemClick}
                                className="ml-1 mr-4"
                            >Login
                            </Link>
                            <Link
                                to={"/create-job"}
                                onClick={handleMenuItemClick}
                                className="flex items-center h-12 w-fit px-4 m-4 ml-1 rounded-md bg-green-600 text-white hover:text-white hover:bg-transparent border border-green-600 hover:border hover:border-stone-800 duration-500"
                            >Post A Job
                            </Link>
                        </>
                    }
                </div>
            </nav>
        </>
    );
}


