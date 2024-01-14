import { useState, useEffect } from 'react';
import {ArrowUp} from "lucide-react";

export default function BackToTopButton () {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div
            className={`${
                isVisible ? 'fixed bottom-2 md:bottom-10 right-2 md:right-10' : 'hidden'
            } cursor-pointer`}
            onClick={scrollToTop}
        >
            <ArrowUp className="w-10 h-10 rounded bg-indigo-600 text-stone-50 hover:bg-indigo-800" size={30} />
        </div>
    );
}

