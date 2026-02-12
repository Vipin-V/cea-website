import React, { useState } from 'react';

const Quotation = () => {
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [visibleCount, setVisibleCount] = useState(8);

    const quotations = [
        { id: "Q/01/2026-27", title: "Purchase of Coating Thickness Gauge", category: "Equipment", date: "2026-03-15", pdfUrl: "https://www.cet.ac.in/wp-content/uploads/2025/08/PTA-scan-doc.pdf" },
        { id: "Q/05/2025-26", title: "Maintenance of Ladies Amenity Centre", category: "Maintenance", date: "2026-02-28", pdfUrl: "https://www.cet.ac.in/wp-content/uploads/2019/10/PTA-Income-and-Expenditure-Statement.pdf" },
        { id: "T/02/2026-27", title: "Supply of Stationery for Series Tests", category: "Stationery", date: "2026-04-10", pdfUrl: "https://www.cet.ac.in/wp-content/uploads/2021/07/ANNUAL-REPORT-2019-2020.pdf" },
        { id: "Q/08/2025-26", title: "Purchase of Computers for CSE Lab", category: "Equipment", date: "2026-03-20", pdfUrl: "#" },
        { id: "Q/09/2025-26", title: "Installation of Solar Panels", category: "Electrical", date: "2026-03-25", pdfUrl: "#" },
        { id: "Q/10/2025-26", title: "Library Book Binding Services", category: "Services", date: "2026-03-12", pdfUrl: "#" },
        { id: "Q/11/2025-26", title: "Renewal of Campus Network Licenses", category: "IT", date: "2026-04-05", pdfUrl: "#" },
        { id: "Q/12/2025-26", title: "Supply of Lab Chemicals", category: "Equipment", date: "2026-03-30", pdfUrl: "#" },
        { id: "Q/14/2026-27", title: "Purchase of Sports Equipment", category: "Sports", date: "2026-04-20", pdfUrl: "#" },
        { id: "Q/15/2026-27", title: "Furniture for Civil Seminar Hall", category: "Furniture", date: "2026-04-15", pdfUrl: "#" },
        { id: "Q/16/2026-27", title: "CCTV Installation in Hostels", category: "Security", date: "2026-03-28", pdfUrl: "#" },
        { id: "Q/17/2026-27", title: "Printing of College Magazine", category: "Services", date: "2026-04-30", pdfUrl: "#" }
    ];

    const handleViewPdf = (url) => {
        if (url !== "#") setSelectedPdf(url);
    };

    const showMore = () => {
        setVisibleCount(prev => Math.min(prev + 4, quotations.length));
    };

    return (
        <div className="font-sans text-gray-800 bg-gray-100 min-h-screen">
            {/* Header Section */}
            <header className="relative h-[200px] flex items-center bg-blue-900 text-white">
                <div className="absolute inset-0 bg-blue-950/40"></div>
                <div className="relative z-10 px-6 md:px-20 border-l-8 border-yellow-400 ml-4 md:ml-20">
                    <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter">
                        Tenders & Quotations
                    </h1>
                    <p className="text-blue-200 mt-2 font-light">
                        Official procurement notices and invitation for bids.
                    </p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto py-10 px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* Quotation List */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-blue-900 border-b-4 border-yellow-400 inline-block mb-4 italic">
                            Active Notices
                        </h2>

                        <div className="space-y-4">
                            {quotations.slice(0, visibleCount).map((item) => (
                                <div
                                    key={item.id}
                                    className={`bg-white p-6 rounded-2xl shadow-sm border-2 transition-all cursor-pointer hover:shadow-md ${selectedPdf === item.pdfUrl ? 'border-blue-600 ring-2 ring-blue-100' : 'border-transparent'}`}
                                    onClick={() => handleViewPdf(item.pdfUrl)}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-[10px] bg-blue-100 text-blue-900 px-2 py-1 rounded-full font-bold uppercase tracking-wider">
                                            {item.category}
                                        </span>
                                        <span className="text-xs font-bold text-gray-400 uppercase">{item.id}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-3">{item.title}</h3>
                                    <div className="flex justify-between items-center text-sm">
                                        <div className="flex items-center gap-1 text-red-600 font-bold">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            Deadline: {item.date}
                                        </div>
                                        <button
                                            className={`text-blue-600 font-bold hover:underline flex items-center gap-1 ${item.pdfUrl === "#" ? 'opacity-30 cursor-not-allowed' : ''}`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleViewPdf(item.pdfUrl);
                                            }}
                                            disabled={item.pdfUrl === "#"}
                                        >
                                            {item.pdfUrl === "#" ? "No Doc" : "Preview"} <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                        </button>
                                    </div>
                                </div>
                            ))}

                            {visibleCount < quotations.length && (
                                <button
                                    onClick={showMore}
                                    className="w-full py-4 bg-white border-2 border-dashed border-gray-300 rounded-2xl text-blue-900 font-bold italic hover:bg-white/50 hover:border-blue-400 transition-all flex items-center justify-center gap-2"
                                >
                                    <span>Show More Quotations</span>
                                    <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </button>
                            )}
                        </div>
                    </div>

                    {/* PDF Preview Frame */}
                    <div className="lg:sticky lg:top-24 h-[600px] md:h-[800px]">
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-full flex flex-col border border-gray-200">
                            <div className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
                                <h3 className="font-bold italic">Document Preview</h3>
                                {selectedPdf && (
                                    <a
                                        href={selectedPdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors flex items-center gap-1"
                                    >
                                        Open in New Tab <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                    </a>
                                )}
                            </div>
                            <div className="flex-1 bg-gray-200 relative">
                                {selectedPdf ? (
                                    <iframe
                                        src={selectedPdf}
                                        className="w-full h-full border-none"
                                        title="Quotation PDF"
                                    >
                                        This browser does not support PDFs. Please download the PDF to view it: <a href={selectedPdf}>Download PDF</a>
                                    </iframe>
                                ) : (
                                    <div className="h-full flex flex-col items-center justify-center text-gray-400 p-10 text-center">
                                        <svg className="w-16 h-16 mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                        <p className="italic">Select a quotation notice from the list to preview the document here.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            <footer className="bg-gray-100 py-6 text-center text-[10px] text-gray-400">
                © 2026 College of Engineering Adoor. All rights reserved.
            </footer>
        </div>
    );
};

export default Quotation;
