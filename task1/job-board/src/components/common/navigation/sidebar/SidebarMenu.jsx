import {ChevronFirst, ChevronLast, LogOutIcon, MoreVertical, UserCircle} from "lucide-react";
import {createContext, useContext, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";
import {Link, useNavigate} from "react-router-dom";

import './sidebarMenu.css'
import useAuth from "../../../../hooks/useAuth.js";
import useActiveLink from "../../../../hooks/useActiveLink.js";
import {useSignoutMutation} from "../../../../state/slices/auth/authApi.slice.js";
import {removeCredentials} from "../../../../state/slices/auth/auth.slice.js";
import {removeAllUserJobsData} from "../../../../state/slices/jobs/job.slice.js";

const SidebarContext = createContext()
export default function SidebarMenu({children}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {userInfo} = useAuth()
    const [signoutAPICall, {error}] = useSignoutMutation()
    const [expanded, seExpanded] = useState(() => {
        return window.innerWidth >= 768
    })
    const [moreMenu, setMoreMenu] = useState(false);

    const handleSignOut = async () => {
        try {
            await signoutAPICall().unwrap()
            navigate("/")
            dispatch(removeCredentials()) // remove auth credentials
            dispatch(removeAllUserJobsData()) // remove personal job data
        } catch (e) {
            console.log(e)
            console.log('api error: ', error)
            toast.error('Failed to logout. Server Error Occurred. Try again later')
        }
    }

    const closeMoreMenu = () => {
        setMoreMenu(false);
    };

    useEffect(() => {
        // event listener to close more menu on outside click
        document.addEventListener('click', closeMoreMenu)

        return () => {
            document.addEventListener('click', closeMoreMenu)
        }
    }, []);

    return (
        <aside className={`h-screen ${!expanded ? 'sidebar-not-expanded': ''}`}>
            <nav className="h-full flex flex-col bg-stone-50 border-r border-r-stone-200 shadow-sm">
                {/* Sidebar Header */}
                <div className="p-4 pb-2 flex justify-between items-center border-b border-b-stone-300">
                    <img
                        src="../../../../../public/vite.svg"
                        alt="site logo"
                        className={`overflow-hidden transition-all h-10 ${expanded ? "w-32" : "w-0"}`}
                    />
                    <button
                        onClick={() => seExpanded(prevState => !prevState)}
                        className="p-1.5 rounded-lg bg-stone-200 hover:bg-stone-300"
                    >
                        {expanded ? <ChevronFirst/> : <ChevronLast/>}
                        {/*<span className="flex items-center">|<span className="text-2xl">&lt;</span></span>*/}
                    </button>
                </div>

                {/* Sidebar Links */}
                <SidebarContext.Provider value={{expanded}}>
                    <ul className="flex-1 mt-0 md:mt-10">{children}</ul>
                </SidebarContext.Provider>

                {/* user section */}
                <div className="border-t border-t-stone-300 flex p-3 mb-32">
                    <UserCircle
                        className={`w-10 h-10 rounded-md text-indigo-700 cursor-pointer`}
                        onClick={(e) => {
                            e.stopPropagation()
                            setMoreMenu((prev) => !prev)
                        }
                        }
                    />
                    <div className={`
                    flex justify-between items-center 
                    overflow-hidden transition-all ${expanded ? "min-w-32 ml-3" : "w-0"}
                     `}>
                        <div className="leading-4 mr-4">
                            <h4 className="font-semibold">
                                {userInfo && <p>{userInfo?.user?.userName}</p>}
                            </h4>
                            <span className="text-xs text-stone-500">{userInfo?.user?.email}</span>
                        </div>
                        <MoreVertical
                            size={27}
                            className={`relative rounded hover:bg-stone-200 cursor-pointer`}
                            onClick={(e) => {
                                e.stopPropagation()
                                setMoreMenu((prev) => !prev)
                            }
                            }
                        />
                        {/* More menu options */}
                        {moreMenu && (
                            <div className="more-menu">
                                <div onClick={handleSignOut}>
                                    <p>Logout</p>
                                    <LogOutIcon />
                                </div>
                                <p> action </p>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </aside>
    )
}

export function SidebarItem({icon, text, alert, href, onclick}) {
    const {expanded} = useContext(SidebarContext);
    const activeLink = useActiveLink()

    return (
        <Link to={href}
              onClick={onclick}
              className={`
        relative flex items-center py-2 px-3 my-1
         font-medium rounded-md cursor-pointer
         transition-colors group
         ${
                  (activeLink === href)
                      ? "bg-gradient-to-r from-indigo-200 to-indigo-100 text-indigo-800"
                      : "hover:bg-indigo-50 text-stone-600"
              }
         `}>
            {icon}
            <span
                className={`overflow-hidden transition-all
                            ${expanded ? "w-52 ml-3" : "w-0"}`
                }
            >{text}</span>
            {alert &&
                (<div
                        className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 
                    ${expanded ? "" : "top-4"}`}
                    />
                )
            }

            {!expanded && <div className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-indigo-100 text-indigo-800 text-sm
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
            `}>{text}</div>}
        </Link>
    )
}