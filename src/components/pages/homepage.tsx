import Sidebar from "../ui/sidebar"
import Topbar from "../ui/topbar"
import DashboardPage from "./dashboardpage"
import Chatpage from "./chat.tsx";
import PostLabpage from "./post_lab.tsx";
import Clientmanagement from "./clientmanagement.tsx";
import RemindersPage from "./reminders.tsx";
import { useLocation } from "react-router-dom";
import AddReminder from "./addreminder.tsx";
import Viewreminder from "./viewreminder.tsx";
import MyProfile from "./myprofile.tsx";
import Passwordchange from "./passwordchange.tsx";
import Viewdocument from "./viewdocument.tsx";
import Viewprotocol from "./viewprotocol.tsx";
import ClientDetails from "./clientdetails.tsx";
import ClientDetails2 from "./clientdetails2.tsx";
import Plandocuements from "./plandocuements.tsx";
import Createplan from "./createplan.tsx";






export default function Homepage() {
  const location = useLocation();
  const IsClientmanagement = location.pathname === "/pages/clientmanagement";
  const IsChat = location.pathname === "/pages/chats";
  const isPostLab = location.pathname === "/pages/postlab";
  const isReminders = location.pathname === "/pages/reminders";
  const isadd_reminder = location.pathname === "/pages/addreminder";
  const isViewreminder = location.pathname === "/pages/viewreminder";
  const isMyProfile = location.pathname === "/pages/myprofile";
  const isPasswordchange = location.pathname === "/pages/passwordchange";
  const isViewdocument = location.pathname === "/pages/viewdocument";
  const isViewprotocol = location.pathname === "/pages/viewprotocol";
  const isClientDetails = location.pathname === "/pages/clientdetails";
  const isClientDetails2 = location.pathname === "/pages/clientdetails2";
  const isPlandocuements = location.pathname === "/pages/plandocuements";
  const isCreateplan = location.pathname === "/pages/createplan";

  return (
    <div className="bg-[#080A12] min-h-screen h-fit overflow-x-hidden text-white w-screen flex  relative">
      <Sidebar />

      <main className="w-full relative size-14 flex-grow ">
        <Topbar />
        <div id="contentBoxPage" className="py-10 px-6 h-[92vh] overflow-y-scroll">
            {IsClientmanagement ? (<Clientmanagement />) :
             IsChat ? <Chatpage /> :
             isPostLab ? <PostLabpage /> :
             isReminders ? <RemindersPage /> :
             isadd_reminder ? <AddReminder /> :
             isViewreminder ? <Viewreminder /> :
             isMyProfile ? <MyProfile /> :
             isPasswordchange ? <Passwordchange /> :
             isViewdocument ? <Viewdocument /> :
             isViewprotocol ? <Viewprotocol /> :
             isClientDetails ? <ClientDetails /> :
             isClientDetails2 ? <ClientDetails2 /> :
             isPlandocuements ? <Plandocuements /> :
             isCreateplan ? <Createplan /> :
             <DashboardPage />}
        </div>
      </main>
    </div>
  );
}

