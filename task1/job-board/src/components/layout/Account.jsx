import {Outlet} from "react-router-dom";
import Sidebar from "../navigation/sidebar/Sidebar.jsx";
import BackButton from "../navigation/BackButton.jsx";

export default function Account() {
    return (
        <div className="flex h-screen">
            <Sidebar/>
            <div className="flex-1 p-1 md:p-8 overflow-x-hidden h-screen overflow-y-scroll">
               <BackButton />
               <div className="" >
                <Outlet/>
               </div>
            </div>
        </div>
    );
}
