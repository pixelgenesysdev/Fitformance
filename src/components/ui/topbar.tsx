import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import NotificationsBox from "./notificationsbox";
import { useState } from "react";

export default function Topbar({ toggleSidebar } : { toggleSidebar: () => void }) {

  const [notificationbox, setnotificationbox] = useState(false);
  const navigate = useNavigate();
  
  return (
    <div
      className="
        px-6 py-6 
        bg-[#0C0E16] 
        border-b border-gray-800
        h-[10vh]
        flex items-center justify-between
        gap-4
      "
    >
      <div className="left">
  
        <button
              id="mobmenubutton"
              className="border-0 outline-0  md:hidden"
              onClick={toggleSidebar}
              style={{ backgroundColor: "transparent" , border: "none", outline: "none" ,padding: "0px"}}
            >

            <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </button>
            
      </div>

      <div className=" w-[150px] logo">
          <img
            src="/images/fitformance_logo.png"
            className="h-auto w-full cursor-pointer md:hidden"
            alt="Fitformance"
            onClick={() => navigate("/auth/login")}
          />
        </div>

      {/* RIGHT ICONS */}
      <div className="flex justify-end gap-3 items-center">
        <i className="fa-solid fa-bell text-xl text-white cursor-pointer" ></i>
        <NotificationsBox show={notificationbox} onClose={() => setnotificationbox(false)} />
        <FontAwesomeIcon icon={faBell} className="text-2xl cursor-pointer" onClick={() => {
          setnotificationbox(true);
          console.log("updated:", true);
        }} />
        <div className="bg-purple-600 w-9 h-9 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer"
          onClick={() => navigate("../myprofile")}

        >
          A
        </div>
      </div>
    </div>
  );
}
