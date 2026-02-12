import React from 'react';

const PTA = () => {
    const activities = [
        "Provide stationery items for conducting the series test for all branches of Engineering",
        "Meets the expense towards Identity cards",
        "Provides security services to the College, Men’s Hostel, Ladies’ Hostel, and MBA Department",
        "Meets the expense of sending the student’s progress report to parents",
        "Provides essential civil and electrical maintenance work to different departments and the campus.",
        "Provides essential maintenance work to Men’s Hostel and Ladies’ Hostel",
        "Maintenance of Ladies amenity centre",
        "Reward the students for securing the highest mark in all branches",
        "Reward the students excelling in academics and extracurricular activities",
        "Sponsorship for students participating in Technical Seminars/Conferences outside the College",
        "Meets the expenses for the Campus doctor",
        "Provides training for staff advisors to counsel the students",
        "Financial assistance to activities like NSS, College Union election, sports, and arts"
    ];

    const reports = [
        { name: "Income & Expenditure Statement-PTA", url: "#" },
        { name: "PTA Audit Report 2023-2024", url: "#" },
        { name: "PTA Annual Report 2021-2022", url: "#" }
    ];

    return (
        <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <header className="relative h-[300px] flex items-center bg-blue-900 text-white shadow-inner">
                <div className="absolute inset-0 opacity-20 bg-[url('/images/cea-image.png')] bg-cover bg-center"></div>
                <div className="relative z-10 px-6 md:px-20 border-l-8 border-yellow-400 ml-4 md:ml-20">
                    <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-tight uppercase">
                        Parent Teacher <br /> Association (PTA)
                    </h1>
                    <p className="text-lg md:text-xl mt-4 font-light text-blue-200">
                        Fostering Academic Excellence through Collaboration
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-6xl mx-auto py-12 px-6 md:px-12">

                {/* About PTA */}
                <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-blue-50">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold text-blue-900 border-b-4 border-yellow-400 inline-block mb-6 italic">About PTA</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                The Parent Teacher Association is a non-government organisation of the parents of all students of the College and the teaching faculty. It is a very active organization working in the College to provide a common forum for the interaction of parents and teachers so as to improve facilities for academic excellence.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                It also provides special and essential services to the students and the staff, acting as a bridge between the campus community and the administration.
                            </p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 h-fit">
                            <h3 className="text-xl font-bold text-blue-900 mb-4">PTA Secretary</h3>
                            <div className="space-y-2">
                                <p className="font-bold text-lg">Dr. Suresh Kumar E</p>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    <span>9747917931</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    <span>0471 2998360</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Major Activities */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center text-blue-900 mb-10 italic">Major Activities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {activities.map((activity, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-start gap-4">
                                <div className="w-8 h-8 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                    {index + 1}
                                </div>
                                <p className="text-sm text-gray-700 leading-snug">{activity}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Reports & Documents */}
                <section className="bg-blue-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold italic mb-4">Reports & Documents</h2>
                        <p className="text-blue-200">Access annual reports and audit statements of the PTA</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {reports.map((report, index) => (
                            <a
                                key={index}
                                href={report.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/10 transition-colors flex items-center justify-between group"
                            >
                                <span className="text-sm font-medium">{report.name}</span>
                                <svg className="w-5 h-5 text-yellow-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </a>
                        ))}
                        <div className="bg-yellow-400 text-blue-900 p-4 rounded-xl flex items-center justify-center font-bold italic cursor-pointer hover:bg-yellow-500 transition-colors">
                            View All Documents
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-100 py-6 text-center text-[10px] text-gray-400">
                © 2026 College of Engineering Adoor. All rights reserved.
            </footer>
        </div>
    );
};

export default PTA;
