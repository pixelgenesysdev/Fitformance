import Input from "../layouts/input";
import Button from "../layouts/button";
import { faSpaghettiMonsterFlying } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthTitle from "../layouts/AuthTitle";

function OtpAuth() {
    const navigate = useNavigate();

  return (
<>

          <div className="p-5">
            <div className="text-white text-center mb-10">
                <AuthTitle  title="OTP Verification" />
                <p>Enter verification code to recover your password.</p>
            </div>

            {/* Email */}
            <Input 
              label="Verification Code*" 
              type="text" 
              id="email" 
              placeholder="Enter Verification Code"
              fieldicon={faSpaghettiMonsterFlying}
              required={true}
            />
            <p className="text-1xl ml-1 mb-6">
              <Link to="/otpauth" className="text-[#0AB4FF] cursor-pointer hover:underline" style={{color:'#0AB4FF'}}>Resend Code</Link>
            </p>
            {/* Login button */}


            <Button text="Continue" onClick={()=>{navigate('/auth/newpassword')}} />

            {/* Sign up */}
            <p className="text-center text-1xl mt-6">
              <Link to="/auth/login" className="text-[#0AB4FF] cursor-pointer hover:underline" style={{color:'#0AB4FF'}}>back to login</Link>
            </p>
          </div>

</>
  )
}

export default OtpAuth
