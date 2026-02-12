import React, { useState } from "react";
import {
  BookOpen,
  Globe,
  Video,
  FileQuestion,
  ChevronDown,
  Users,
  FileText,
  BarChart,
  ExternalLink,
  LibraryBig,
} from "lucide-react";

// Reusable Accordion Component - FIXED: Forces white background on the button itself
const Accordion = ({ title, icon: Icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 rounded-2xl shadow-sm overflow-hidden border border-gray-200">
      {/* CRITICAL FIX: 
               - Added 'bg-white' directly to the button to override any dark theme inheritance.
               - Added 'hover:bg-gray-50' for interaction feedback.
               - Text is explicitly set to 'text-slate-800'.
            */}
      <button
        type="button"
        className="w-full bg-white flex items-center justify-between p-5 text-left transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-100"
        onClick={() => setIsOpen(!isOpen)}
        style={{ backgroundColor: "#ffffff" }} // Inline style backup to force white
      >
        <div className="flex items-center gap-4">
          {/* Icon Box: Dark Blue background, White Icon */}
          <div
            className={`p-3 rounded-xl flex-shrink-0 transition-colors ${isOpen ? "bg-[#141665] text-white" : "bg-blue-50 text-[#141665]"}`}
          >
            <Icon className="w-6 h-6" />
          </div>

          {/* Title: Dark Slate Color */}
          <span className="text-lg font-bold text-slate-800">{title}</span>
        </div>

        {/* Arrow Icon */}
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? "transform rotate-180 text-[#141665]" : ""}`}
        />
      </button>

      {/* Expandable Content Area - White Background */}
      <div
        className={`transition-all duration-300 ease-in-out bg-white ${isOpen ? "max-h-[800px] opacity-100 border-t border-gray-100" : "max-h-0 opacity-0"}`}
      >
        <div className="p-6 bg-white text-slate-800">{children}</div>
      </div>
    </div>
  );
};

// Resource Card (Digital Library)
const ResourceCard = ({ title, icon: Icon, color, link, description }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex flex-col p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1 ${color}`}
  >
    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl w-fit mb-4">
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
    <p className="text-white/90 text-sm flex-grow leading-relaxed">
      {description}
    </p>
    <div className="mt-6 flex items-center text-white font-semibold text-sm uppercase tracking-wider group-hover:underline">
      Access Now <ExternalLink className="w-4 h-4 ml-2" />
    </div>
  </a>
);

// PDF Section - White Background
const PdfSection = ({ title, description, buttonText }) => (
  <div className="flex flex-col items-center justify-center p-8 text-center bg-white rounded-xl border border-dashed border-gray-300">
    <div className="p-4 bg-gray-50 rounded-full mb-4">
      <FileText className="w-10 h-10 text-[#141665]" />
    </div>
    <h4 className="text-xl font-bold text-slate-900 mb-2">{title}</h4>
    <p className="text-slate-600 mb-6 max-w-md leading-relaxed">
      {description}
    </p>
    <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#141665] hover:bg-blue-900 transition-all hover:scale-105 active:scale-95">
      <ExternalLink className="w-5 h-5 mr-2" />
      {buttonText}
    </button>
  </div>
);

const LibraryPage = () => {
  const digitalResources = [
    {
      title: "DELNET",
      icon: Globe,
      color: "bg-[#141665]",
      link: "#",
      description:
        "Developing Library Network. Access a vast repository of books, journals, and articles.",
    },
    {
      title: "NDLI",
      icon: LibraryBig,
      color: "bg-blue-700",
      link: "#",
      description:
        "National Digital Library of India. A massive digital repository of learning resources.",
    },
    {
      title: "Knimbus",
      icon: Globe,
      color: "bg-indigo-600",
      link: "#",
      description:
        "KTU Digital Library Platform. Your gateway to remote access of e-resources.",
    },
    {
      title: "NPTEL",
      icon: Video,
      color: "bg-violet-600",
      link: "#",
      description:
        "Access online courses and video lectures from premier institutes.",
    },
    {
      title: "Question Papers",
      icon: FileQuestion,
      color: "bg-rose-600",
      link: "#",
      description:
        "Download previous year university question papers for exam preparation.",
    },
  ];

  const libraryStaff = [
    { name: "Sri. Rajesh C", designation: "Librarian Gr I" },
    { name: "Sri. Manoj M K", designation: "Librarian Gr II" },
    { name: "Sri. Shajudheen K", designation: "Librarian Gr IV" },
    { name: "Sri. Krishnankutty N", designation: "Librarian Gr IV" },
    { name: "Sri. Joby M Varghese", designation: "Library Assistant" },
    { name: "Sri. Biju K", designation: "Library Assistant" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-900">
      {/* Header */}
      <header className="relative bg-[#141665] text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0c40]"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            College Library
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Empowering your academic journey with a vast collection of print and
            digital resources.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-16 relative z-20">
        {/* Digital Library Resources */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#141665] mb-8 flex items-center">
            <span className="p-2 bg-white rounded-lg mr-3 shadow-sm border border-gray-100">
              <Globe className="w-6 h-6 text-[#141665]" />
            </span>
            Digital Library Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {digitalResources.map((resource, index) => (
              <ResourceCard key={index} {...resource} />
            ))}
          </div>
        </section>

        {/* Library Information & Docs */}
        <section className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#141665] mb-8 flex items-center justify-center">
            <span className="p-2 bg-white rounded-lg mr-3 shadow-sm border border-gray-100">
              <BookOpen className="w-6 h-6 text-[#141665]" />
            </span>
            Library Information & Docs
          </h2>

          {/* Staff Directory */}
          <Accordion title="Library Staff Directory" icon={Users}>
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white">
              <table className="min-w-full divide-y divide-gray-200 bg-white">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider text-slate-600">
                      Name
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider text-slate-600">
                      Designation
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {libraryStaff.map((staff, index) => (
                    <tr
                      key={index}
                      className="hover:bg-blue-50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-900">
                        {staff.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                        <span className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full text-xs">
                          {staff.designation}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Accordion>

          {/* Rules */}
          <Accordion title="Library Rules & Regulations" icon={FileText}>
            <PdfSection
              title="View Library Rules"
              description="Familiarize yourself with the code of conduct, borrowing privileges, and general rules of the library."
              buttonText="Open PDF Document"
            />
          </Accordion>

          {/* Resources */}
          <Accordion title="Details of Library Resources" icon={LibraryBig}>
            <PdfSection
              title="Explore Our Collection"
              description="View a detailed inventory of our books, journals, magazines, and other academic resources."
              buttonText="View Resources PDF"
            />
          </Accordion>

          {/* Survey */}
          <Accordion title="Student Survey Results" icon={BarChart}>
            <PdfSection
              title="See What Students Say"
              description="Review the analysis and findings from the latest student feedback survey on library services."
              buttonText="View Survey Results"
            />
          </Accordion>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#141665] text-blue-100 py-8 text-center mt-12">
        <p className="font-medium">
          © {new Date().getFullYear()} College of Engineering Adoor
        </p>
      </footer>
    </div>
  );
};

export default LibraryPage;
