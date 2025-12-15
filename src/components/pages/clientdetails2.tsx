import { useState } from "react";
import Toptitle from "../layouts/top_title";
import NewButton from "../ui/NewButton";
import clientimg from "../../assets/images/dashboardimages/dashboardimage2.png";

export default function ClientDetails2() {
  const [activeTab, setActiveTab] = useState("sessions");

  return (
    <>
      <Toptitle title="Client Details" />

      {/* MAIN CARD */}
      <div className="bg-[#161617] text-white rounded-xl p-6 mt-6">

        {/* ================= TOP SECTION ================= */}
        <div className="flex flex-col lg:flex-col justify-between gap-6">



          {/* Profile Section */}
          <div className="flex flex-col sm:flex-row items-center gap-8">
            
            {/* Profile Image */}
            <div className="imagbox mb-3 flex items-center justify-between w-full">
                  <img
                    src={clientimg}
                    className="w-[150px] h-[150px] rounded-full object-cover shadow-md"
                    alt="client img"
                  />

                  <div>
                      <div className="text-sm text-right">
                        <span className="text-gray-300">Status :</span>{" "}
                        <span className="text-green-400 font-semibold">Active</span>
                      </div>
                    {/* Bottom Button */}
                    <div className="mt-4">
                      <NewButton buttontext="View Plan" link="../plandocuements" />
                    </div>

                  </div>
            </div>

            {/* Details */}
          
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-1 gap-y-3 pt-10 gap-x-6 mt-6 sm:mt-0 text-sm">

              <div className="flex">
                <span className="text-gray-300 w-32">Name :</span>
                <span className="font-medium">Jaxon</span>
              </div>

              <div className="flex">
                <span className="text-gray-300 w-32">Email :</span>
                <span className="font-medium">Jaxon981@gmail.com</span>
              </div>

              <div className="flex">
                <span className="text-gray-300 w-32">Phone :</span>
                <span className="font-medium">0239423423</span>
              </div>

              <div className="flex">
                <span className="text-gray-300 w-32">Age :</span>
                <span className="font-medium">26</span>
              </div>

              <div className="flex">
                <span className="text-gray-300 w-32">Condition :</span>
                <span className="font-medium">Knee, Shoulder</span>
              </div>

              <div className="flex">
                <span className="text-gray-300 w-32">Referral Provider :</span>
                <span className="font-medium">John</span>
              </div>

          </div>
          {/* Notes Section */}
          <div className="mt-1">
            <span className="text-gray-300 block mb-2">Notes :</span>
            <p className="text-sm text-gray-100 leading-relaxed max-w-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
              Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales
              pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.
            </p>
          </div>  



        </div>

        {/* ISSUE DETAILS */}
        <p className="mt-6 max-w-3xl text-sm text-gray-300 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
          et viverra justo commodo.
        </p>

        {/* PROGRESS */}
        <div className="mt-5 max-w-[400px]">
          <div className="flex justify-between text-1 text-gray-400 mb-1">
            <span>Progress</span>
            <span>80/100</span>
          </div>
          <div className="w-full h-2 bg-[#2a2a2d] rounded-full overflow-hidden">
            <div className="h-full bg-[#37B5FF] w-[80%]" />
          </div>
        </div>

        {/* ================= TABS ================= */}
        <div className="flex gap-8 mt-8 text-sm border-b border-[#2a2a2d] pb-3">
          {["sessions", "documents", "notes"].map(tab => (
            <h4
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 capitalize ${
                activeTab === tab
                  ? "text-[#0AB4FF active] border-b-2 border-[#0AB4FF] cursor-pointer"
                  : "cursor-pointer hover:text-[#0AB4FF] hover:border-b-2 hover:border-[#0AB4FF]"
              }`}
            >
              {tab === "sessions" ? "Session logs" : tab}
            </h4>
          ))}
        </div>

        {/* ================= TAB CONTENT ================= */}
        
      </div>
      <div className="mt-10">

          {/* ===== Sessions ===== */}
          {activeTab === "sessions" && (
            <>
            <h3 className="text-2xl mb-3 font-semibold">Sessions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                
                <div className="bg-[#161617] p-4 rounded-lg">
                  <h3 className="font-semibold text-2xl mb-2">Pendulum Swings</h3>
                  <p className="text-1xl text-gray-400">
                    Lorem ipsum dolor sit amet consectetur.
                    Lorem ipsum dolor sit amet consectetur.
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <div className="flex justify-between mt-4 text-xs">
                    <span className="text-gray-400">Duration: 25 mins</span>
                    <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full">
                      normal
                    </span>
                  </div>
                </div>

                <div className="bg-[#161617] p-4 rounded-lg">
                  <h3 className="font-semibold text-2xl mb-2">Pendulum Swings</h3>
                  <p className="text-1xl text-gray-400">
                    Lorem ipsum dolor sit amet consectetur.
                    Lorem ipsum dolor sit amet consectetur.
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <div className="flex justify-between mt-4 text-xs">
                    <span className="text-gray-400">Duration: 25 mins</span>
                    <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full">
                      normal
                    </span>
                  </div>
                </div>

                <div className="bg-[#161617] p-4 rounded-lg">
                  <h3 className="font-semibold text-2xl mb-2">Pendulum Swings</h3>
                  <p className="text-1xl text-gray-400">
                    Lorem ipsum dolor sit amet consectetur.
                    Lorem ipsum dolor sit amet consectetur.
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <div className="flex justify-between mt-4 text-xs">
                    <span className="text-gray-400">Duration: 25 mins</span>
                    <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full">
                      High
                    </span>
                  </div>
                </div>

            </div>
            </>
          )}

          {/* ===== Documents ===== */}
          {activeTab === "documents" && (

            <>
            <h3 className="text-2xl mb-3 font-semibold">All Documents</h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">

              {/* Video */}
              <div className="bg-[#161617] p-3 rounded-xl text-center">
                <div className="h-28 bg-black/40 rounded-lg flex items-center justify-center mb-3">
                  ▶️
                </div>
                <p className="text-sm">Beginner Knee</p>
                <p className="text-xs text-gray-400">Recovery plan</p>
              </div>

              {/* PDF */}
              <div className="bg-white p-4 rounded-xl text-center relative">
                <span className="absolute top-2 right-2 text-yellow-400">👑</span>
                <div className="h-24 flex items-center justify-center text-4xl text-red-500">
                  📄
                </div>
                <p className="text-sm text-black">Beginner Knee</p>
                <p className="text-xs text-gray-500">Recovery plan</p>
              </div>

              {/* Word */}
              <div className="bg-white p-4 rounded-xl text-center">
                <div className="h-24 flex items-center justify-center text-4xl text-blue-600">
                  📘
                </div>
                <p className="text-sm text-black">Beginner Knee</p>
                <p className="text-xs text-gray-500">Recovery plan</p>
              </div>

              {/* Video */}
              <div className="bg-[#161617] p-3 rounded-xl text-center">
                <div className="h-28 bg-black/40 rounded-lg flex items-center justify-center mb-3">
                  ▶️
                </div>
                <p className="text-sm">Beginner Knee</p>
                <p className="text-xs text-gray-400">Recovery plan</p>
              </div>
            </div>
            </>
          )}

          {/* ===== Notes ===== */}
          {activeTab === "notes" && (
            <>
            <h3 className="text-2xl mb-3 font-semibold">All Notes</h3>
            <div className="max-w-3xl text-sm text-gray-300 leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
                Proin sodales pulvinar tempor. Cum sociis natoque penatibus et
                magnis dis parturient montes.
              </p>
            </div>
            </>
          )}

      </div>
    </>
  );
}
