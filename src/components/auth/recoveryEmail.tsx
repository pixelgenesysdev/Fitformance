import Input from "../layouts/input";
import Button from "../layouts/button";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthTitle from "../layouts/AuthTitle";

function RecoveryEmail() {
  const navigate = useNavigate();
  return (
<>

          <div className="p-5">
            <div className="text-white text-center mb-10">
                <AuthTitle title="Password Recovery"/>
                <p>Enter your email address to recieve a verification code.</p>
            </div>

            {/* Email */}
            <Input 
              label="Email Address" 
              type="email" 
              id="email" 
              placeholder="Enter your email address"
              fieldicon={faEnvelope}
              required={true}
            />

            {/* Login button */}


            <Button text="Continue" onClick={()=>{navigate('/auth/otpauth')}} />

            {/* Sign up */}
            <p className="text-center text-1xl mt-6">
              <Link to="/auth/login" className="text-[#0AB4FF] cursor-pointer hover:underline" style={{color:'#0AB4FF'}}>back to login</Link>
            </p>
          </div>

</>
  )
}

export default RecoveryEmail
