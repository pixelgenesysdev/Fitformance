import React, { useState } from "react";
import Toptitle from "../layouts/top_title";
import Buttonbox from "../ui/Buttonbox";

export default function Plandocuements() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <>
      <Toptitle title="plan Docuements" />

      {/* MAIN CARD */}

        {/* ================= TABS ================= */}
        <div className="flex gap-8 mt-8 text-sm border-b border-[#2a2a2d] pb-3">
          {["All", "Protocol", "Library"].map(tab => (
            <h4
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 capitalize ${
                activeTab === tab
                  ? "text-[#0AB4FF active] border-b-2 border-[#0AB4FF] cursor-pointer"
                  : "cursor-pointer hover:text-[#0AB4FF] hover:border-b-2 hover:border-[#0AB4FF]"
              }`}
            >
              {tab === "All" ? "for you" : tab}
            </h4>
          ))}
        </div>

        {/* ================= TAB CONTENT ================= */}
        <div className="mt-10">

          {/* ===== Sessions ===== */}
          {activeTab === "All" && (
            <>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">


                  {/* Video */}
                <div className="bg-[#161617] p-3 rounded-xl text-center">
                  <div className="h-60 bg-black/40 rounded-lg flex items-center justify-center mb-3">
                    ▶️
                  </div>
                  <p className="text-sm">Beginner Knee</p>
                  <p className="text-xs text-gray-400">Recovery plan</p>
                </div>

                {/* PDF */}
                <div className="bg-white p-4 rounded-xl text-center relative">
                  <span className="absolute top-2 right-2 text-yellow-400">👑</span>
                  <div className="h-60 bg-black/20 rounded-lg mb-3 flex items-center justify-center text-4xl text-red-500">
                    📄
                  </div>
                  <p className="text-sm text-black">Beginner Knee</p>
                  <p className="text-xs text-gray-500">Recovery plan</p>
                </div>

                                  {/* Video */}
                <div className="bg-[#161617] p-3 rounded-xl text-center">
                  <div className="h-60 bg-black/40 rounded-lg flex items-center justify-center mb-3">
                    ▶️
                  </div>
                  <p className="text-sm">Beginner Knee</p>
                  <p className="text-xs text-gray-400">Recovery plan</p>
                </div>

                {/* PDF */}
                <div className="bg-white p-4 rounded-xl text-center relative">
                  <span className="absolute top-2 right-2 text-yellow-400">👑</span>
                  <div className="h-60 bg-black/20 rounded-lg mb-3 flex items-center justify-center text-4xl text-red-500">
                    📄
                  </div>
                  <p className="text-sm text-black">Beginner Knee</p>
                  <p className="text-xs text-gray-500">Recovery plan</p>
                </div>

                                  {/* Video */}
                <div className="bg-[#161617] p-3 rounded-xl text-center">
                  <div className="h-60 bg-black/40 rounded-lg flex items-center justify-center mb-3">
                    ▶️
                  </div>
                  <p className="text-sm">Beginner Knee</p>
                  <p className="text-xs text-gray-400">Recovery plan</p>
                </div>

                {/* PDF */}
                <div className="bg-white p-4 rounded-xl text-center relative">
                  <span className="absolute top-2 right-2 text-yellow-400">👑</span>
                  <div className="h-60 bg-black/20 rounded-lg mb-3 flex items-center justify-center text-4xl text-red-500">
                    📄
                  </div>
                  <p className="text-sm text-black">Beginner Knee</p>
                  <p className="text-xs text-gray-500">Recovery plan</p>
                </div>

                                  {/* Video */}
                <div className="bg-[#161617] p-3 rounded-xl text-center">
                  <div className="h-60 bg-black/40 rounded-lg flex items-center justify-center mb-3">
                    ▶️
                  </div>
                  <p className="text-sm">Beginner Knee</p>
                  <p className="text-xs text-gray-400">Recovery plan</p>
                </div>

                {/* PDF */}
                <div className="bg-white p-4 rounded-xl text-center relative">
                  <span className="absolute top-2 right-2 text-yellow-400">👑</span>
                  <div className="h-60 bg-black/20 rounded-lg mb-3 flex items-center justify-center text-4xl text-red-500">
                    📄
                  </div>
                  <p className="text-sm text-black">Beginner Knee</p>
                  <p className="text-xs text-gray-500">Recovery plan</p>
                </div>

                {/* PDF */}
                <div className="bg-white p-4 rounded-xl text-center relative">
                  <span className="absolute top-2 right-2 text-yellow-400">👑</span>
                  <div className="h-60 bg-black/20 rounded-lg mb-3 flex items-center justify-center text-4xl text-red-500">
                    📄
                  </div>
                  <p className="text-sm text-black">Beginner Knee</p>
                  <p className="text-xs text-gray-500">Recovery plan</p>
                </div>

                
              </div>
            </>
          )}

          {/* ===== Documents ===== */}
          {activeTab === "Protocol" && (

            <>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">


                {/* PDF */}
                <div className="bg-white p-4 rounded-xl text-center relative">
                  <span className="absolute top-2 right-2 text-yellow-400">👑</span>
                  <div className="h-60 bg-black/20 rounded-lg mb-3 flex items-center justify-center text-4xl text-red-500">
                    📄
                  </div>
                  <p className="text-sm text-black">Beginner Knee</p>
                  <p className="text-xs text-gray-500">Recovery plan</p>
                </div>


                {/* PDF */}
                <div className="bg-white p-4 rounded-xl text-center relative">
                  <span className="absolute top-2 right-2 text-yellow-400">👑</span>
                  <div className="h-60 bg-black/20 rounded-lg mb-3 flex items-center justify-center text-4xl text-red-500">
                    📄
                  </div>
                  <p className="text-sm text-black">Beginner Knee</p>
                  <p className="text-xs text-gray-500">Recovery plan</p>
                </div>

              </div>
            </>
          )}

          {/* ===== Notes ===== */}
          {activeTab === "Library" && (
            <>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">

                  {/* Video */}
                <div className="bg-[#161617] p-3 rounded-xl text-center">
                  <div className="h-60 bg-black/40 rounded-lg flex items-center justify-center mb-3">
                    ▶️
                  </div>
                  <p className="text-sm">Beginner Knee</p>
                  <p className="text-xs text-gray-400">Recovery plan</p>
                </div>


                {/* Video */}
                <div className="bg-[#161617] p-3 rounded-xl text-center">
                  <div className="h-60 bg-black/40 rounded-lg flex items-center justify-center mb-3">
                    ▶️
                  </div>
                  <p className="text-sm">Beginner Knee</p>
                  <p className="text-xs text-gray-400">Recovery plan</p>
                </div>

                {/* Video */}
                <div className="bg-[#161617] p-3 rounded-xl text-center">
                  <div className="h-60 bg-black/40 rounded-lg flex items-center justify-center mb-3">
                    ▶️
                  </div>
                  <p className="text-sm">Beginner Knee</p>
                  <p className="text-xs text-gray-400">Recovery plan</p>
                </div>
              </div>
            </>
          )}

      </div>
    </>
  );
}
