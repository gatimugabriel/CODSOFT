import {useState} from 'react';
import {Document, Page} from 'react-pdf';
import {ChevronLeft, ChevronRight, X} from "lucide-react";

import './PdfModalComponent.css'

export default function PdfModalComponent({pdf, onClose}) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    return (
        <div className="pdf-container">
            <div className="flex justify-center mb-1 space-x-12 text-center" onClick={onClose}>
                <X size={40}
                   className="cursor-pointer rounded text-white bg-red-600 hover:bg-red-800"
                />

            </div>

            <nav className="flex items-center space-x-20 bg-white mb-4 py-2 px-10">
                <div className="flex items-center justify-between space-x-8">
                    <button
                        disabled={pageNumber === 1}
                        onClick={previousPage}
                        className={pageNumber === 1 ? 'disabled-btn' : 'navigation-btn'}
                    >
                        <ChevronLeft size={32}/>
                    </button>

                    <button
                        disabled={pageNumber === numPages}
                        onClick={nextPage}
                        className={`${pageNumber === numPages ? 'disabled-btn' : 'navigation-btn'}`}
                    >
                        <ChevronRight size={32}/>
                    </button>
                </div>
                <p>
                    Page <span className="font-bold">{pageNumber}</span> of <span className="font-bold">{numPages}</span>
                </p>
            </nav>

            <Document
                file={pdf}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false}
                />
            </Document>
        </div>
    );
}