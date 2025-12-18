import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PopupBox from "./popup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUsers,
  faFlask,
  faComments,
  faBell,
  faRightFromBracket,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar({ isOpen, closeSidebar }: { isOpen: boolean; closeSidebar: () => void }) {

  const [open2, setOpen2] = useState(false);
  const navigate = useNavigate();

  return (
    <>

    {<style>
        {`
         .sidebarclose {
                transform: translateX(-100%);
            }
        `}
      </style>}

      {/* Sidebar */}
      <aside
        className={`
            top-0 left-0 h-screen bg-[#0C0E16] border-r border-[#37B5FF] z-40
            block w-64
            transform transition-transform duration-300 ease-in-out
            ${isOpen ? 'opensidebar' : 'sidebarclose'}
             
          `}
          
          style={{position:'fixed',}}
        > 
        {/* Close icon */}
        <div className="flex justify-end p-4 md:hidden">
          <button
            onClick={closeSidebar}
            className="text-white hover:opacity-90"
            style={{ backgroundColor: "transparent" , border: "none", outline: "none" ,padding: "0px"}}
          >
            <FontAwesomeIcon icon={faClose} className="text-2xl" />
          </button>
        </div>

            {/* LOGO */}
            <div className="p-6 mb-2">
              <img
                src="/images/fitformance_logo.png"
                className="h-auto w-full cursor-pointer"
                alt="Fitformance"
                onClick={() => navigate("/auth/login")}
              />
            </div>

            {/* NAVIGATION */}
            <nav className="pl-4 mt-12 space-y-2 text-white">
              <SidebarLink
                icon={faHouse}
                label="Home"
                link="/pages/home"
                activOn={["/pages/home", "/pages/myprofile", "/pages/passwordchange"]}
              />

              <SidebarLink
                icon={faUsers}
                label="Client Management"
                link="/pages/clientmanagement"
                activOn={["/pages/clientmanagement", "/pages/clientdetails", "/pages/createplan", "/pages/clientdetails2", "/pages/plandocuements"]}
              />

              <SidebarLink
                icon={faFlask}
                label="Post Rehab Lab"
                link="/pages/postlab"
                activOn={["/pages/postlab", "/pages/viewdocument", "/pages/viewprotocol"]}
              />

              <SidebarLink
                icon={faComments}
                label="Chat"
                link="/pages/chats"
                activOn={["/pages/chats", "/pages/chats/messages"]}
              />

              <SidebarLink
                icon={faBell}
                label="Reminders"
                link="/pages/reminders"
                activOn={["/pages/reminders", "/pages/addreminder","/pages/viewreminder"]}
              />
            </nav>

            {/* LOGOUT */}
            <div className="absolute bottom-6 w-full pl-4">
              <div
                className={`flex items-center gap-3 px-3 py-4 cursor-pointer text-white" : "hover:bg-gray-800"
                }`}
                style={{ borderRadius: "50px 0px 0 50px" }}
                onClick={() => setOpen2(true)}
              >
                <FontAwesomeIcon icon={faRightFromBracket} className="text-1xl" />
                <span className="text-sm font-medium">Logout</span>
              </div>
            </div>
      </aside>
                          <PopupBox
                            type="error"               // This will show the X icon
                            title="Are you sure?"
                            message="Do you really want to Logout?"
                            buttonText="Logout"
                            buttonFunction={() => navigate("../../auth/login")}
                            double={true}              // Enables second button
                            secondButtonText="No"
                            secondButtonFunction={() => setOpen2(false)}
                            isOpen={open2}
                            onClose={() => setOpen2(false)}
                          />





    </>
  );
}

/* ---------------------------
   SidebarLink Component
--------------------------- */

type SidebarLinkProps = {
  icon: IconDefinition;
  label: string;
  link: string;
  activOn?: string[]; // multiple pages
};

function SidebarLink({ icon, label, link, activOn = [] }: SidebarLinkProps) {
  const navigate = useNavigate();
  const location = useLocation();

  // Highlight parent if current page matches link OR any page in activOn
  const isActive =
    location.pathname === link ||
    activOn.some((path) => location.pathname === path);

  return (
    <div
      className={`flex items-center gap-3 px-3 py-4 cursor-pointer ${
        isActive ? "bg-[#37B5FF] text-white" : "hover:bg-gray-800"
      }`}
      style={{ borderRadius: "50px 0px 0 50px" }}
      onClick={() => navigate(link)}
    >
      <FontAwesomeIcon icon={icon} className="text-1xl" />
      <span className="text-sm font-medium">{label}</span>
    </div>

    
  );
}
