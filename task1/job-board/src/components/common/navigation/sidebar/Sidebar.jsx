import {useState} from "react";
import {
    BarChart3,
    BookMarked,
    BookOpenText,
    Database,
    LayoutDashboard,
    LifeBuoy,
    Settings
} from "lucide-react";

import SidebarMenu, {SidebarItem} from "./SidebarMenu.jsx";
import useAuth from "../../../../hooks/useAuth.js";
import useActiveLink from "../../../../hooks/useActiveLink.js";

export default function Sidebar() {
    const {userInfo} = useAuth()
    const parentLink = useActiveLink() // gets the current page
    const [activeLink, setActiveLink] = useState(parentLink)

    const handleClick = (href) => {
        setActiveLink(href)
    }
    return (
        <SidebarMenu>
            <SidebarItem href="/dashboard" onclick={() => handleClick('/dashboard')} icon={<LayoutDashboard size={20}/>}
                         text="Dashboard" alert/>

            {userInfo && userInfo?.user?.role === 'employer' ?
                <>
                    <SidebarItem href="/my-jobs" onclick={() => handleClick('/my-jobs')} icon={<Database size={20}/>}
                                 text="my jobs"/>
                    {/*<SidebarItem href="/statistics" onclick={() => handleClick('/statistics')}*/}
                    {/*             icon={<BarChart3 size={20}/>}*/}
                    {/*             text="statistics"/>*/}
                </>
                :

                <>
                    <SidebarItem href="/applications" onclick={() => handleClick('/applications')}
                                 icon={<BookOpenText size={20}/>}
                                 text="Applications"/>
                </>
            }
            <SidebarItem href="/favourites" onclick={() => handleClick('/favourites')}
                         icon={<BookMarked size={20}/>}
                         text="Favourites"/>

            <hr className="mt-8"/>
            <SidebarItem href="/profile" onclick={() => handleClick('/profile')} icon={<Settings size={20}/>}
                         text="My-Profile"
                         alert
            />
            <SidebarItem href="/contact" onclick={() => handleClick('/contact')} icon={<LifeBuoy size={20}/>}
                         text="Help"/>
        </SidebarMenu>
    )
}