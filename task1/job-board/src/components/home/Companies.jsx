import {companyLogo1, companyLogo2, companyLogo3, companyLogo4, microsoftLogo} from '../../assets';

export default function Companies() {
    return (
        <div className="w-full px-4 md:px-20 py-16 bg-gradient-to-b from-stone-200 to-stone-300 text-center border-b-2 border-b-stone-500 ">
            <h2 className="text-xl font-extrabold mb-8 text-slate-800">Get hired by Top Companies:</h2>

            <div className='grid md:grid-cols-5 grid-cols-3 gap-2'>
                <img src={companyLogo1} alt="company logo"/>
                <img src={companyLogo2} alt="company logo"/>
                <img src={companyLogo3} alt="company logo"/>
                <img src={companyLogo4} alt="company logo"/>
                <img src={microsoftLogo} alt="company logo"/>
            </div>
        </div>
    );
}

