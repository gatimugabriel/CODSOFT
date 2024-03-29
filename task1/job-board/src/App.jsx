import {Outlet} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './styles/tailwind.css'
import Nav from "./components/common/navigation/navbar/Nav.jsx";
import Footer from "./components/common/navigation/Footer.jsx";
import BackToTopButton from "./components/common/navigation/BackToTopButton.jsx";

function App() {
    return (
        <main className="min-h-screen w-full font-poppins">
            <Nav/>
            <ToastContainer/>

            <section className="min-h-screen">
                <Outlet/>
            </section>

            <BackToTopButton />
            <footer>
                <Footer/>
            </footer>
        </main>
    )
}

export default App
