import authbg from "../../assets/images/auth/authbg.png";
import { useLocation } from "react-router-dom";
import logo from "../../assets/images/fitformance_logo.png";
import Signup from "./signup";
import Login from "./login";
import OtpAuth from "./OtpAuth";
import NewPassword from "./newpassword";
import RecoveryEmail from "./recoveryEmail";

export default function Authhomesection() {
  const location = useLocation();
  const isSignup = location.pathname === "/auth/signup";
  const isrecoveryemail = location.pathname === "/auth/recoveryemail";
  const isotpauth = location.pathname === "/auth/otpauth";
  const isnewpassword = location.pathname === "/auth/newpassword";

  return (
    <main
      className="h-100% min-h-screen w-screen bg-cover grid items-center justify-items-center"
      style={{ backgroundImage: `url(${authbg})` }}
    >
      {/* Wrapper (logo + card) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-full items-center justify-items-center p-10 w-full">
        {/* LEFT LOGO */}
        <div className="imagecol">
          <img
            src={logo}
            onClick={() => {
              window.location.href = "/pages/home";
            }}
            alt="Fitformance Logo"
            className="w-72 md:w-100 lg:w-full object-contain cursor-pointer"
          />
        </div>

        {/* RIGHT LOGIN CARD */}
        <div
          className="w-full max-w-2xl border-4 border-[#0AB4FF] rounded-3xl pl-10 pr-10 pt-5 pb-5 flex items-center"
          style={{ maxHeight: "90vh", minHeight: "80vh" }}
        >
          <div
            style={{ maxWidth: "90%", width: "100%", margin: "0 auto" }}
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
