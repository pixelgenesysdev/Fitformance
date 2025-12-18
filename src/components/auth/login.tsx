import Input from "../layouts/input";
import Button from "../layouts/button";
import Checkbox from "../layouts/checkbox";
import { faEnvelope,faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthTitle from "../layouts/AuthTitle";

function login() {
  const navigate = useNavigate();
  return (
<>

          <div className="p-5">
            <AuthTitle title="Login to Your Account" />

                {/* Email */}
            <Input 
              label="Email" 
              type="email" 
              id="email" 
              placeholder="Enter your email"
              fieldicon={faEnvelope}
              required={true}
            />

            <Input 
              label="Password" 
              type="password" 
              id="password" 
              placeholder="Enter your password"
              fieldicon={faLock}
              required={true}
            />



            {/* Checkbox + Forgot */}
            <div className="flex justify-between items-center text-sm mb-8">
              <Checkbox label="Remember me" />
              <Link to="/auth/recoveryemail"  className="text-[#0AB4FF] cursor-pointer hover:underline" style={{color:'#0AB4FF'}}>Forgot Password</Link>
            </div>




            {/* Login button */}


            <Button text="Login" onClick={()=>navigate("/pages/home")}/>

            {/* Sign up */}
            <p className="text-center text-white text-1xl mt-6">
              Don’t have an account?{" "}
              <Link to="/auth/signup" className="text-[#0AB4FF] cursor-pointer hover:underline" style={{color:'#0AB4FF'}}>Sign Up Now</Link>
            </p>
          </div>

</>
  )
}

export default login
