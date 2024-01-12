import Hero from "../components/home/Hero.jsx";
import HowItWorks from "../components/home/HowItWorks.jsx";
import Companies from "../components/home/Companies.jsx";
import Hire from "../components/home/Hire.jsx";
import GetHired from "../components/home/GetHired.jsx";

export default function HomePage() {
    return (
        <section className="h-full font-normal">
            <Hero/>
            <HowItWorks/>
            <Companies />
            <Hire />
            <GetHired />
        </section>
    );
}

