import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import NotificationsBox from "./notificationsbox";
import { useState } from "react";

export default function Topbar() {

  const [notificationbox, setnotificationbox] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className="
        px-6 py-4 
        bg-[#0C0E16] 
        border-b border-gray-800
        h-[8vh]
        flex items-center justify-end
      "
    >
      {/* RIGHT ICONS */}
      <div className="flex justify-end gap-6 items-center">
        <i className="fa-solid fa-bell text-xl text-white cursor-pointer" ></i>
        <NotificationsBox show={notificationbox} onClose={() => setnotificationbox(false)} />
        <FontAwesomeIcon icon={faBell} className="text-2xl cursor-pointer"         onClick={() => {
          setnotificationbox(true);
          console.log("updated:", true);
        }} />
        <div className="bg-purple-600 w-9 h-9 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer"
        onClick={()=>navigate("../myprofile")}

         >
          A
        </div>
      </div>
    </div>
  );
}
