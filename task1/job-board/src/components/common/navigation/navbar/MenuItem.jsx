import {Link} from "react-router-dom";
import useActiveLink from "../../../../hooks/useActiveLink.js";

export default function MenuItem({href,onClick, children}) {
 const activeLink = useActiveLink()
    return (
        <li className="" >
            <Link to={href} href={href}
               onClick={onClick}
               className={`flex px-3 py-2 my-2 md:my-0 rounded-md ${(activeLink === href) ? 'underline text-black text-xl' : 'text-white'} hover:text-black duration-500` }>
                {children}
            </Link>
        </li>
    );
}