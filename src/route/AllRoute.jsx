import { Route, Routes } from "react-router-dom";
// import { Login } from "../components/Login";
import { SignUp } from "../components/SignUp";
import { Auth } from "../pages/Auth";
import { Navbar } from "../components/Navbar";
import { Home } from "../pages/Home";

export const AllRoute = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
