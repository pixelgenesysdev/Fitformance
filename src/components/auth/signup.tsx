import Input from "../layouts/input";
import Button from "../layouts/button";
import Checkbox from "../layouts/checkbox";
import { faEnvelope,faUser ,faLock ,faPhone} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PopupBox from "../ui/popup"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthTitle from "../layouts/AuthTitle";
import Termscondition from "../ui/terms&condition";

function signup() {

 const navigate = useNavigate();
 const [open, setOpen] = useState(false);
 const [open2, setOpen2] = useState(false);

  
  return (


<>

          <div className="p-5">
            <AuthTitle title="Create your Account" />
                {/* Email */}
            <Input 
              label="Full Name" 
              type="Name" 
              id="fullname" 
              placeholder="Enter your Full Name"
              fieldicon={faUser}
              required={true}
            />
            <Input 
              label="Email" 
              type="email" 
              id="email" 
              placeholder="Enter your Email Address"
              fieldicon={faEnvelope}
              required={true}
            />
            
            <Input 
              label="Phone Number" 
              type="tel" 
              id="PhoneNumber" 
              placeholder="Enter your Phone Number"
              fieldicon={faPhone}
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
            <Input 
              label="Confirm Password" 
              type="password" 
              id="passwordConfirm" 
              placeholder="Confirm Password"
              fieldicon={faLock}
              required={true}
            />



            {/* Checkbox + Forgot */}
            <div className="flex justify-between items-center text-sm mb-8">
              <Checkbox label="Privacy policy and terms of service" />
            </div>




            {/* Login button */}


            <Button text="Sign Up" onClick={()=>setOpen(true)} />

            {/* Sign up */}
            <p className="text-center text-[#bababa] text-1xl mt-6">
              Already have an account ? {" "}
              <Link  to="/auth/login" className="text-[#0AB4FF] cursor-pointer hover:underline" style={{color:'#0AB4FF'}}>Login now</Link>
            </p>
            <p className="text-center text-[#bababa]  text-1xl mt-3">
             By creating an account you agree to our{" "}
              <a className="text-[#0AB4FF] cursor-pointer hover:underline"  onClick={()=>setOpen2(true)} style={{color:'#0AB4FF'}}>Terms Conditions</a>
            </p>
          </div>

          {open2 ? <Termscondition  onClose={() => setOpen2(false)} isOpen={open2}/> : null}

                      <PopupBox
                      type="success"               // This will show the X icon
                      title="Account Created"
                      message="Your account is under review, you will be able to access your account once it will approve"
                      buttonText="Ok"
                      buttonFunction={() => navigate("../login")}
                      double={false}              // Enables second button
                      secondButtonText="No"
                      secondButtonFunction={() => setOpen(false)}
                      isOpen={open}
                      onClose={() => setOpen(false)}
                    />

</>
  )
}

export default signup
