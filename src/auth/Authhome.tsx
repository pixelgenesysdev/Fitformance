import { Route, Routes } from "react-router-dom";
import Authhomesection from "../components/auth/auth";

function Authhome() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Authhomesection />} />
        <Route path="signup" element={<Authhomesection />} />
        <Route path="recoveryemail" element={<Authhomesection />} />
        <Route path="otpauth" element={<Authhomesection />} />
        <Route path="newpassword" element={<Authhomesection />} />
      </Routes>
    </>
  );
}

export default Authhome;
