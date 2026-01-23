import Input from "../layouts/input"
import { useState } from "react";
import Button from "../layouts/button"
import { faWineBottle } from "@fortawesome/free-solid-svg-icons";
import Top_title_backicon from "../layouts/top_title_backicon";
import { useNavigate } from "react-router-dom";
import PopupBox from "../ui/popup"


function Passwordchange() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
  
  return (
<>

        <div className="flex justify-between items-center">
            
              <Top_title_backicon title="Change Password" />
        </div>

          <div id="formadd" className="mt-10">
            <Input 
              label="Current Password*" 
              type="password" 
              id="passforget" 
              placeholder="Enter Current Password"
              fieldicon={faWineBottle}
              required={true}
            />
            <Input 
              label="New Password*" 
              type="password" 
              id="passforget" 
              placeholder="Enter New Password*"
              fieldicon={faWineBottle}
              required={true}
            />
            <Input 
              label="Confirm Password*" 
              type="password" 
              id="passforget" 
              placeholder="Enter Confirm Password"
              fieldicon={faWineBottle}
              required={true}
            />

            <Button text="Update" onClick={() => setOpen(true)} />

                    <PopupBox
                      type="success"
                      title="Successfully"
                      message="Password has been updated"
                      buttonText="OK"
                      buttonFunction={() => {navigate("../myprofile")}}
                      isOpen={open}
                      onClose={() => setOpen(false)}
                    />


          </div>

</>
  )
}

export default Passwordchange
