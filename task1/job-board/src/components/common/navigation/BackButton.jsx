import {useNavigate} from "react-router-dom";

export default function BackButton() {
    const navigate = useNavigate()

    const handleNavigate = ()=>{
        navigate(-1)
    }

    return (
        <div
            onClick={handleNavigate}
            className="flex items-center w-fit mb-4 p-1 rounded space-x-2 hover:bg-gradient-to-r hover:from-indigo-100 hover:to-indigo-200 hover:text-indigo-800 cursor-pointer border border-slate-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="font-bold w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
            <span>Back</span>
        </div>
    );
}