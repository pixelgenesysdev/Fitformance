import Toptitle from "../layouts/top_title"
import Input from "../layouts/input"
import Button from "../layouts/button"
import { faUser, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import PopupBox from "../ui/popup"


function MyProfile() {

  const [open, setOpen] = useState(false);

  return (
<>
      <Toptitle title="My Profile" />
    <div id="MyProfile" className="p-5 max-w-2xl mx-auto my-8 ">
            <div className="imagbox">
              <img src="/images/dashboardimages/dashboardimage1.png" className="w-full cursor-pointer object-cover mb-5 max-w-[150px] mx-auto h-[150px] rounded-full" alt="session" />
            </div>
            <Input 
              label="First Name:" 
              type="text" 
              id="titletext" 
              placeholder="Enter Name Here"
              fieldicon={faUser}
              required={true}
            />
            <Input 
              label="Last Name:" 
              type="text" 
              id="titletext" 
              placeholder="Enter Last Name Here"
              fieldicon={faUser}
              required={true}
            />
            <Input 
              label="Email Address:" 
              type="email" 
              id="emailmy" 
              placeholder="Enter Email Here"
              fieldicon={faEnvelope}
              required={true}
            />
            <Input 
              label="Phone No*" 
              type="tel" 
              id="Mynymber" 
              placeholder="Enter Phone Number Here"
              fieldicon={faPhone}
              required={true}
            />

            <Button text="Edit" onClick={()=>{setOpen(true)}}/>

            <p className="text-center text-white text-1xl mt-6">
              <Link to="../passwordchange" className="text-[#0AB4FF] cursor-pointer hover:underline" style={{color:'#0AB4FF'}}>Forget Password</Link>
            </p>
        
        

        <PopupBox
          type="success"
          title="Successfully"
          message="Profile has been updated"
          buttonText="OK"
          buttonFunction={() => setOpen(false)}
          isOpen={open}
          onClose={() => setOpen(false)}
          
        />


    </div>

</>
  )
}

export default MyProfile
