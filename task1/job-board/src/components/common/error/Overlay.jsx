function Overlay({ children, onClose }) {
    return (
        // Overlay container
        <div
            className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-700 bg-opacity-75"
        >
            {/* Overlay content */}
            <div className="bg-white rounded-md px-8 py-12 shadow-lg">
                {children}

                {/* Close button */}
                <button className="btn red-btn" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default Overlay