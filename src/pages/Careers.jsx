import React from 'react';

const Careers = () => {
    const categories = [
        {
            title: "Teaching Staff",
            notifications: [
                { id: 1, title: "Notification for Assistant Professor in CSE", deadline: "2026-03-30", link: "#" },
                { id: 2, title: "Notification for Associate Professor in Mechanical", deadline: "2026-04-15", link: "#" }
            ],
            rankLists: [
                { id: 1, title: "Rank List - Assistant Professor (Civil)", link: "#" }
            ]
        },
        {
            title: "Non-Teaching Staff",
            notifications: [
                { id: 1, title: "Notification for Office Assistant", deadline: "2026-02-28", link: "#" },
                { id: 2, title: "Notification for Lab Assistant (Chemistry)", deadline: "2026-03-10", link: "#" }
            ],
            rankLists: [
                { id: 1, title: "Rank List - Data Entry Operator", link: "#" }
            ]
        },
        {
            title: "Interns",
            notifications: [
                { id: 1, title: "Internship Program 2026 - Digital Marketing", deadline: "2026-02-20", link: "#" }
            ],
            rankLists: [
                { id: 1, title: "Shortlisted Candidates for IT Internship", link: "#" }
            ]
        }
    ];

    return (
        <div className="font-sans text-gray-800 bg-white min-h-screen">
            {/* Hero Section */}
            <header className="relative h-[250px] flex items-center bg-blue-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-blue-950/40"></div>
                <div className="relative z-10 px-6 md:px-20 border-l-8 border-yellow-400 ml-4 md:ml-20">
                    <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-tight uppercase">
                        Careers At CEA
                    </h1>
                    <p className="text-lg md:text-xl mt-4 font-light text-blue-200">
                        Join our team of dedicated professionals and shape the future of engineering.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto py-16 px-6 md:px-12">
                <div className="grid grid-cols-1 gap-16">
                    {categories.map((category, index) => (
                        <div key={index} className="space-y-8">
                            <div className="flex items-center gap-4">
                                <h2 className="text-3xl font-bold text-blue-900 italic border-b-4 border-yellow-400 pr-8">{category.title}</h2>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                {/* Notifications Table */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-gray-700 flex items-center gap-2">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                                        Notifications
                                    </h3>
                                    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Title</th>
                                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Deadline</th>
                                                    <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Download</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {category.notifications.length > 0 ? (
                                                    category.notifications.map((notif) => (
                                                        <tr key={notif.id} className="hover:bg-blue-50 transition-colors">
                                                            <td className="px-6 py-4 text-sm text-gray-800 font-medium">{notif.title}</td>
                                                            <td className="px-6 py-4 text-sm text-red-600 font-bold">{notif.deadline}</td>
                                                            <td className="px-6 py-4 text-right">
                                                                <a href={notif.link} className="text-blue-600 hover:text-blue-800">
                                                                    <svg className="w-5 h-5 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="3" className="px-6 py-8 text-center text-gray-400 italic">No active notifications</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Rank List Table */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-gray-700 flex items-center gap-2">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        Rank List
                                    </h3>
                                    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Title</th>
                                                    <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">View</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {category.rankLists.length > 0 ? (
                                                    category.rankLists.map((rank) => (
                                                        <tr key={rank.id} className="hover:bg-green-50 transition-colors">
                                                            <td className="px-6 py-4 text-sm text-gray-800 font-medium">{rank.title}</td>
                                                            <td className="px-6 py-4 text-right">
                                                                <a href={rank.link} className="text-green-600 hover:text-green-800">
                                                                    <svg className="w-5 h-5 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="2" className="px-6 py-8 text-center text-gray-400 italic">No rank lists available</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="bg-gray-100 py-6 text-center text-[10px] text-gray-400 mt-auto">
                © 2026 College of Engineering Adoor. All rights reserved.
            </footer>
        </div>
    );
};

export default Careers;
