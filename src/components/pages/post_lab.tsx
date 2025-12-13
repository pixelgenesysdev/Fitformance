import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toptitle from "../layouts/top_title";
interface FileItem {
  id: string;
  name: string;
  type: "GIF" | "Video" | "Document" | "Image";
  date: string;
}

const initialFiles: FileItem[] = [
  { id: "IFR32", name: "d3o.mp4", type: "Video", date: "Jan 30, 2024" },
  { id: "IFR31", name: "animation.gif", type: "GIF", date: "Jan 27, 2024" },
  { id: "IFR32", name: "report.pdf", type: "Document", date: "Jan 30, 2024" },
  { id: "IFR31", name: "video_clip.mp4", type: "Video", date: "Jan 27, 2024" },
  { id: "IFR32", name: "notes.txt", type: "Document", date: "Jan 30, 2024" },
  { id: "IFR31", name: "photo.jpg", type: "Image", date: "Jan 27, 2024" },
  { id: "IFR32", name: "presentation.pptx", type: "Document", date: "Jan 30, 2024" },
  { id: "IFR31", name: "movie.mp4", type: "Video", date: "Jan 27, 2024" },
  { id: "IFR45", name: "banner.png", type: "Image", date: "Jan 25, 2024" },
  { id: "IFR50", name: "loading.gif", type: "GIF", date: "Jan 22, 2024" },
  { id: "IFR55", name: "contract.docx", type: "Document", date: "Jan 20, 2024" },
  { id: "IFR60", name: "tutorial.mp4", type: "Video", date: "Jan 18, 2024" },
];

function PostLabpage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");
  const [files] = useState<FileItem[]>(initialFiles);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  // Filter files based on active tab
  const getFilteredFilesByTab = () => {
    let tabFiltered = files;
    
    if (activeTab === "Library") {
      // Library: Only Image, Video, GIF
      tabFiltered = files.filter(f => f.type === "Image" || f.type === "Video" || f.type === "GIF");
    } else if (activeTab === "Protocol") {
      // Protocol: Only Documents
      tabFiltered = files.filter(f => f.type === "Document");
    }
    
    return tabFiltered;
  };

  const filteredFiles = getFilteredFilesByTab().filter((file) => {
    const matchesSearch =
      file.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      file.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const totalPages = Math.ceil(filteredFiles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredFiles.length);
  const currentFiles = filteredFiles.slice(startIndex, endIndex);


  const resetPage = () => setCurrentPage(1);

  return (

    <>
      <Toptitle title="Post Lab" />

      <div className="min-h-screen bg-[#000000] text-white py-6">
        <div className="max-w-screen mx-auto">
          {/* Tabs */}
          <div className="flex gap-0 mb-6 bg-[#161617] w-fit rounded-2xl overflow-hidden ">
            {["All", "Protocol", "Library"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  resetPage();
                }}
                className={`button${
                  activeTab === tab
                    ? " activetabbuton"
                    : ""
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Single Line Filters */}
          <div className="flex gap-4 mb-6 items-center">
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => {
                setDateFrom(e.target.value);
                resetPage();
              }}
              placeholder="From Date"
              className="bg-[#1a1a1a] border border-gray-700 text-white text-sm rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#37B5FF] focus:border-[#37B5FF]"
            />

            <input
              type="date"
              value={dateTo}
              onChange={(e) => {
                setDateTo(e.target.value);
                resetPage();
              }}
              placeholder="To Date"
              className="bg-[#1a1a1a] border border-gray-700 text-white text-sm rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#37B5FF] focus:border-[#37B5FF]"
            />

            <div className="flex-1 relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  resetPage();
                }}
                placeholder="Search by ID or File Name..."
                className="w-full bg-[#1a1a1a] border border-gray-700 text-white text-sm rounded-lg pl-10 pr-4 py-2.5 focus:ring-2 focus:ring-[#37B5FF] focus:border-[#37B5FF] placeholder-gray-500"
              />
            </div>
          </div>

          {/* Table */}
          <div className="bg-[#0a0a0a] rounded-lg overflow-hidden border border-gray-800">
            <table className="w-full">
              <thead className="bg-[#0a0a0a] border-b border-gray-800">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    File ID
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    File Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
                      </svg>
                      Date
                    </div>
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {currentFiles.length > 0 ? (
                  currentFiles.map((file, index) => (
                    <tr
                      key={index}
                      className="hover:bg-[#151515] transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-white">{file.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-300">{file.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-300">{file.type}</td>
                      <td className="px-6 py-4 text-sm text-gray-300">{file.date}</td>
                      <td className="px-6 py-4 text-right actionbtntable">
                        <button
                          onClick={() =>file.type === "Document" ? navigate(`/pages/viewdocument?${file.id}`) : navigate(`/pages/viewprotocol?${file.id}`)}
                          className="text-[#37B5FF] hover:text-[#5ac4ff] transition"
              
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path
                              fillRule="evenodd"
                              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-gray-400">
                      No files found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* Pagination */}
<div className="flex flex-col sm:flex-row justify-between items-center px-6 py-4  border-t border-gray-700">

    {/* Left: Entry Info */}
    <p className="text-sm text-gray-400">
      Showing {filteredFiles.length === 0 ? 0 : startIndex + 1}-{endIndex} of {filteredFiles.length} entries
    </p>

    {/* Right: Pagination */}
            <div className="flex items-center space-x-2 buttonbrbottom">

              {/* Previous */}
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bigbutton text-sm font-medium rounded-lg bg-[#37B5FF] text-white disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                Previous
              </button>

              {/* Page Numbers */}
              {[...Array(Math.min(totalPages, 3))].map((_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
                      currentPage === pageNum
                        ? "bg-[#37B5FF] text-white activepage"
                        : "bg-gray-800 text-gray-400 hover:bg-[#37B5FF]/80 hover:text-white"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              {/* Dots */}
              {totalPages > 3 && (
                <span className="px-2 text-gray-400">...</span>
              )}

              {/* Last Page Number */}
              {totalPages > 3 && (
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
                    currentPage === totalPages
                      ? "bg-[#37B5FF] text-white activepage"
                      : "bg-gray-800 text-gray-400 hover:bg-[#37B5FF]/80 hover:text-white"
                  }`}
                >
                  {totalPages}
                </button>
              )}

              {/* Next */}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bigbutton text-sm font-medium rounded-lg bg-[#37B5FF] text-white disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                Next
              </button>

            </div>
</div>


          </div>
        </div>
      </div>

    </>
  );
}

export default PostLabpage;