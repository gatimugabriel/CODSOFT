import {useState} from "react";
import BackButton from "../components/common/navigation/BackButton.jsx";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

    }

    return (
        <div className="min-h-screen py-2 bg-gradient-to-bl from-stone-200 to-indigo-200">
            <BackButton />
            <div className="flex justify-center md:items-center mt-10 md:mt-2">
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md max-w-md w-full mx-2">
                    <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-slate-600 text-sm font-semibold mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full border border-slate-300 p-2 rounded focus:outline-none focus:border-indigo-600"
                            placeholder="John Doe"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 text-sm font-semibold mb-2">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-indigo-600"
                            placeholder="john.doe@example.com"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-600 text-sm font-semibold mb-2">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="w-full border border-slate-300 p-2 rounded focus:outline-none focus:border-indigo-600"
                            placeholder="Write your message here..."
                            required
                            value={formData.message}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-indigo-700 to-indigo-500 text-white p-2 rounded hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-700 focus:outline-none focus:shadow-outline-blue"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}