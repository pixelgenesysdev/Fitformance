import { Route, Routes } from "react-router-dom";
import Homepage from "../components/pages/homepage";

export default function Mainhome() {
  return (
    <>
      <Routes>
        <Route path="Home" element={<Homepage />} />
        <Route path="Clientmanagement" element={<Homepage />} />
          <Route path="ClientDetails2" element={<Homepage />} />
          <Route path="ClientDetails" element={<Homepage />} />
          <Route path="Createplan" element={<Homepage />} />
          <Route path="Plandocuements" element={<Homepage />} />
          <Route path="Editplan" element={<Homepage />} />
        <Route path="Postlab" element={<Homepage />} />
          <Route path="viewdocument" element={<Homepage />} />
          <Route path="Viewprotocol" element={<Homepage />} />
        <Route path="Chats" element={<Homepage />} />
        <Route path="Reminders" element={<Homepage />} />
          <Route path="AddReminder" element={<Homepage />} />
          <Route path="viewreminder" element={<Homepage />} />

        <Route path="MyProfile" element={<Homepage />} />
          <Route path="Passwordchange" element={<Homepage />} />
        
      </Routes>
    </>
  )
}
