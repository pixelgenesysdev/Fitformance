import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../ui/sidebar";
import Topbar from "../ui/topbar";
import DashboardPage from "./dashboardpage";
import Chatpage from "./chat.tsx";
import PostLabpage from "./post_lab.tsx";
import Clientmanagement from "./clientmanagement.tsx";
import RemindersPage from "./reminders.tsx";
import AddReminder from "./addreminder.tsx";
import Viewreminder from "./viewreminder.tsx";
import MyProfile from "./myprofile.tsx";
import Passwordchange from "./passwordchange.tsx";
import Viewdocument from "./viewdocument.tsx";
import Viewprotocol from "./viewprotocol.tsx";
import Plandocuements from "./plandocuements.tsx";
import Createplan from "./createplan.tsx";
import ClientDetails from "./clientdetails.tsx";
import ClientDetails2 from "./clientdetails2.tsx";
import Editplan from "./Editplan.tsx";

export default function Homepage() {
  const location = useLocation();
  const pathname = location.pathname;

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Handle mobile screen sidebar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    // Initial check
    handleResize();

    // Listen to resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#080A12] min-h-screen h-fit overflow-x-hidden text-white w-screen flex justify-end relative">
      <Sidebar
        isOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      />

      <main
        className={`relative transition-margin duration-300 ease-in-out w-[calc(100%-0rem)] ${
          isSidebarOpen ? "md:w-[calc(100%-16rem)]" : "md:w-[calc(100%-0rem)]"
        }`}
      >
        <Topbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div id="contentBoxPage" className="py-10 px-6 h-[90vh] overflow-y-scroll">
          {pathname === "/pages/clientmanagement" ? (
            <Clientmanagement />
          ) : pathname === "/pages/chats" ? (
            <Chatpage />
          ) : pathname === "/pages/postlab" ? (
            <PostLabpage />
          ) : pathname === "/pages/reminders" ? (
            <RemindersPage />
          ) : pathname === "/pages/addreminder" ? (
            <AddReminder />
          ) : pathname === "/pages/viewreminder" ? (
            <Viewreminder />
          ) : pathname === "/pages/myprofile" ? (
            <MyProfile />
          ) : pathname === "/pages/passwordchange" ? (
            <Passwordchange />
          ) : pathname === "/pages/viewdocument" ? (
            <Viewdocument />
          ) : pathname === "/pages/viewprotocol" ? (
            <Viewprotocol />
          ) : pathname === "/pages/clientdetails" ? (
            <ClientDetails />
          ) : pathname === "/pages/clientdetails2" ? (
            <ClientDetails2 />
          ) : pathname === "/pages/plandocuements" ? (
            <Plandocuements />
          ) : pathname === "/pages/createplan" ? (
            <Createplan />
          ) : pathname === "/pages/editplan" ? (
            <Editplan />
            
          ) : (
            <DashboardPage />
          )}
        </div>
      </main>
    </div>
  );
}
