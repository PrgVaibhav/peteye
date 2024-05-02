import { useState } from "react";
import { Login } from "../components/Login";
import { FaFacebookSquare, FaApple } from "react-icons/fa";
import { SignUp } from "../components/SignUp";
import { FcGoogle } from "react-icons/fc";

export const Auth = () => {
  const [showContent, setShowContent] = useState(<Login />);
  const [loginActive, setLoginActive] = useState(true);
  const [signUpActive, setSignUpActive] = useState(false);

  const handleLoginClick = () => {
    setShowContent(<Login />);
    setLoginActive(true);
    setSignUpActive(false);
  };

  const handleSignUpClick = () => {
    setShowContent(<SignUp />);
    setLoginActive(false);
    setSignUpActive(true);
  };

  return (
    <>
      <div className="auth-container">
        <div className="button_grp">
          <button
            className={loginActive ? `btn active` : "btn"}
            onClick={handleLoginClick}
          >
            Log in
          </button>
          <button
            className={signUpActive ? `btn active` : "btn"}
            onClick={handleSignUpClick}
          >
            New User
          </button>
        </div>

        {/* Content */}
        {showContent}

        <div className="auth-container-footer">
          <p className="continue">Continue With</p>
          <div className="icons">
            <p>
              <FaFacebookSquare className="facebook_icon" />
            </p>
            <p>
              <FcGoogle className="google_icon" />
            </p>
            <p>
              <FaApple className="apple_icon" />
            </p>
          </div>
        </div>
      </div>
      <div className="tos">
        <p className="">By clicking on &quot;SignIn now&quot; you agree to</p>
        <div className="foot">
          <p className="tos_p">Terms Of Services</p>|
          <p className="tos_p">Privacy Policy</p>
        </div>
      </div>
    </>
  );
};
