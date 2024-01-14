import {Link, useNavigate} from "react-router-dom";

export default function ErrorComponent({title, description}) {
    const navigate = useNavigate()
    const handlePrevPage = () =>{
        navigate(-1)
    }
    return (
        <div className="flex flex-col items-center text-center my-52 md:m-52 ">
            <h1 className="text-4xl text-red-600 font-medium">{title}</h1>
            <p className="text-xl text-stone-700 font-extralight m-6">
                {description}
            </p>
            <div className="flex items-center space-x-14">
            <button onClick={handlePrevPage} className="bg-stone-900 text-white hover:bg-transparent hover:text-stone-900 py-2 px-4 rounded border border-stone-900">Back</button>
            <Link to={"/"} className="bg-green-600 text-white hover:bg-transparent hover:text-stone-900 py-2 px-4 rounded border border-green-600">Go Home</Link>
            </div>
        </div>
    );
}

