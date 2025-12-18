import Input from "../layouts/input";
import Button from "../layouts/button";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthTitle from "../layouts/AuthTitle";

function NewPassword() {
    const navigate = useNavigate();

  return (
<>

          <div className="p-5">
            <div className="text-white text-center mb-10">
                <AuthTitle title="Set New Password" />
                <p className="text-white text-lg">Please enter your new password below.</p>
            </div>

            {/* new password */}
            <Input 
              label="New Password*" 
              type="password" 
              id="password" 
              placeholder="Enter New Password"
              fieldicon={faLock}
              required={true}
            />

            {/* Confirm  password */}
            <Input 
              label="Confirm Password*" 
              type="password" 
              id="password" 
              placeholder="Confirm Password"
              fieldicon={faLock}
              required={true}
            />

            <Button text="Update" onClick={()=>{navigate('/auth/login')}} />

            {/* Sign up */}
            <p className="text-center text-1xl mt-6">
              <Link to="/auth/login" className="text-[#0AB4FF] cursor-pointer hover:underline" style={{color:'#0AB4FF'}}>back to login</Link>
            </p>
          </div>

</>
  )
}

export default NewPassword
