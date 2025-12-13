import React from "react";
import Toptitle from "../layouts/top_title";
import Buttonbox from "../ui/buttonbox";

export default function ClientDetails() {
  return (
    <>
      <Toptitle title="Client Details" />

      {/* Main Container */}
      <div className="usercard bg-[#161617] my-6 p-7 rounded-lg text-white relative">



        {/* Profile Section */}
        <div className="flex flex-col sm:flex-row items-center gap-8">
          
          {/* Profile Image */}
          <div className="imagbox mb-3 flex items-center justify-between w-full">
            <img
              src={'../src/assets/images/dashboardimages/dashboardimage1.png'}
              className="w-[150px] h-[150px] rounded-full object-cover shadow-md"
              alt="client img"
            />
                    {/* Status (Top Right) */}
                <div className="text-sm">
                    <span className="text-gray-300">Status :</span>{" "}
                    <span className="text-green-400 font-semibold">Active</span>
                </div>
          </div>

          {/* Details */}
         
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-1 gap-y-3 py-10 gap-x-6 mt-6 sm:mt-0 text-sm">

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


        {/* Bottom Button */}
        <div className="mt-10">
          <Buttonbox buttontext="Create Fitness Plan" link="../createplan" />
        </div>

      </div>
    </>
  );
}
