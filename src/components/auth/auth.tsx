
import { useLocation } from "react-router-dom";
import Signup from "./signup";
import Login from "./login";
import OtpAuth from "./OtpAuth";
import NewPassword from "./newpassword";
import RecoveryEmail from "./recoveryEmail";
import { useNavigate } from "react-router-dom";

export default function Authhomesection() {
  const location = useLocation();
  const isSignup = location.pathname === "/auth/signup";
  const isrecoveryemail = location.pathname === "/auth/recoveryemail";
  const isotpauth = location.pathname === "/auth/otpauth";
  const isnewpassword = location.pathname === "/auth/newpassword";
  const navigate = useNavigate();


  return (
    <main
      className="h-100% min-h-screen w-screen bg-cover grid items-center justify-items-center"
      style={{ backgroundImage: `url('/images/auth/authbg.png')` }}
      
    >
      {/* Wrapper (logo + card) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-full items-center justify-items-center p-10 w-full" >
        {/* LEFT LOGO */}
        <div className="imagecol">
          <img
            src='/images/fitformance_logo.png'
            onClick={() => {
              navigate("/pages/home");
            }}
            alt="Fitformance Logo"
            className="w-72 md:w-100 lg:w-full object-contain cursor-pointer"
          />
        </div>

        {/* RIGHT LOGIN CARD */}
        <div
          className="w-full lg:max-w-[80%] md:max-w-[100%] border-4 md: border-[#0AB4FF] rounded-3xl lg:px-10 lg:py-8 flex items-center sm:p-5 md:p-10"
          style={{ maxHeight: "auto", minHeight: "80vh" }}
        >
          <div
            style={{ maxWidth: "100%", width: "100%", margin: "0 auto" }}
            className="h-max"
          >
            {/* ⭐ THIS IS THE IMPORTANT PART ⭐ */}
            {isSignup ? (
              <Signup />
            ) : isrecoveryemail ? (
              <RecoveryEmail />
            ) : isotpauth ? (
              <OtpAuth />
            ) : isnewpassword ? (
              <NewPassword />
            ) : (
              <Login />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
