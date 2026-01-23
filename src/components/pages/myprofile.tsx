import Toptitle from "../layouts/top_title";
import Input from "../layouts/input";
import Button from "../layouts/button";
import { faUser, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import PopupBox from "../ui/popup";

function MyProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [open, setOpen] = useState(false);

  // ✅ FORM STATE
  const [formData, setFormData] = useState({
    FullName: "John Doe",
    email: "johndoe@example.com",
    phone: "1234567890",
  });

  return (
    <>
      <Toptitle title="My Profile" />

      <div id="MyProfile" className="p-5 max-w-2xl mx-auto my-8">
        <div className="imagbox">
          <img
            src="/images/dashboardimages/dashboardimage1.png"
            className="w-full cursor-pointer object-cover mb-5 max-w-[150px] mx-auto h-[150px] rounded-full"
            alt="profile"
          />
        </div>

        <Input
          label="Full Name:"
          type="text"
          id="FullName"
          placeholder="Enter Name Here"
          fieldicon={faUser}
          value={formData.FullName}
          disabled={!isEditing}
          onChange={(e) =>
            setFormData({ ...formData, FullName: e.target.value })
          }
        />

        

        <Input
          label="Email Address:"
          type="email"
          id="email"
          placeholder="Enter Email Here"
          fieldicon={faEnvelope}
          value={formData.email}
        />

        <Input
          label="Phone No:"
          type="tel"
          id="phone"
          placeholder="Enter Phone Number Here"
          fieldicon={faPhone}
          value={formData.phone}
          disabled={!isEditing}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
        />

        <Button
          text={isEditing ? "Save" : "Edit"}
          onClick={() => {
            if (isEditing) {
              setOpen(true); // ✅ Save pe popup
            }
            setIsEditing(!isEditing);
          }}
        />

        <p className="text-center text-white text-1xl mt-6">
          <Link
            to="../passwordchange"
            className="text-[#0AB4FF] hover:underline" 
            style={{color:'#0AB4FF'}}
          >
            Change Password
          </Link>
        </p>

        <PopupBox
          type="success"
          title="Success"
          message="Profile has been updated"
          buttonText="OK"
          isOpen={open}
          buttonFunction={() => setOpen(false)}
          onClose={() => setOpen(false)}
        />
      </div>
    </>
  );
}

export default MyProfile;
