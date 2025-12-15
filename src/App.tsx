import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Authhome from "./auth/Authhome";
import Mainhome from "./pages/home";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* AUTH ROUTES */}
        <Route path="/auth/*" element={<Authhome />} />

        {/* MAIN ROUTES */}
        <Route path="/pages/*" element={<Mainhome />} />

        {/* DEFAULT ROUTE */}
        <Route path="/" element={<Navigate to="/auth/login" />} />

        {/* 404 ROUTE */}
        <Route path="*" element={<Mainhome />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
