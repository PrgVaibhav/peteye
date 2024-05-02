import { useEffect, useState } from "react";
import { GoMail } from "react-icons/go";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || email.length === 0) {
      return setError((prev) => ({ ...prev, email: "Enter a valid email" }));
    }

    if (!mobileNumber || mobileNumber.length <= 10) {
      return setError((prev) => ({
        ...prev,
        mobileNumber: "Mobile number upto 10 characters",
      }));
    }

    if (!fullName || fullName.length === 0) {
      return setError((prev) => ({
        ...prev,
        fullName: "Enter a valid full name",
      }));
    }
    if (!password || password.length < 8) {
      return setError((prev) => ({
        ...prev,
        password: "Enter password upto 8 characters",
      }));
    }

    if (
      !confirmPassword ||
      confirmPassword !== password ||
      confirmPassword.length === 0
    ) {
      return setError((prev) => ({
        ...prev,
        confirmPassword: "Confirm password should match old password",
      }));
    }

    navigate("/");
  };

  useEffect(() => {
    if (email || email.length > 3) {
      return setError((prev) => ({ ...prev, email: "" }));
    }

    if (mobileNumber || mobileNumber.length === 10) {
      return setError((prev) => ({
        ...prev,
        mobileNumber: "",
      }));
    }

    if (fullName || fullName.length > 3) {
      return setError((prev) => ({
        ...prev,
        fullName: "",
      }));
    }
    if (password || password.length > 8) {
      return setError((prev) => ({
        ...prev,
        password: "",
      }));
    }

    if (confirmPassword || confirmPassword === password) {
      return setError((prev) => ({
        ...prev,
        confirmPassword: "",
      }));
    }
  }, [email, mobileNumber, fullName, password, confirmPassword]);

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email/Username</label>
          <input
            type="text"
            id="email"
            className="input-field"
            name="email"
            placeholder="Enter your email/username"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            autoFocus
          />
          <GoMail className="input-icon" />
          {error && error.email && (
            <p className="error_message">{error.email}</p>
          )}
        </div>
        <div className="input-group">
          <label htmlFor="mobileNumber">Phone Number</label>
          <input
            type="number"
            id="mobileNumber"
            className="input-field"
            name="mobileNumber"
            placeholder="Enter your phone number"
            onChange={(e) => setMobileNumber(e.target.value)}
            value={mobileNumber}
            required
          />
          <FaPhoneAlt className="input-icon" />
          {error && error.mobileNumber && (
            <p className="error_message">{error.mobileNumber}</p>
          )}
        </div>
        <div className="input-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            className="input-field"
            name="fullName"
            placeholder="Enter your Full Name"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            required
          />
          <FaRegUser className="input-icon" />
          {error && error.fullName && (
            <p className="error_message">{error.fullName}</p>
          )}
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            className="input-field"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          {showPassword ? (
            <IoMdEye
              className="input-icon"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          ) : (
            <IoMdEyeOff
              className="input-icon"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          )}
          {error && error.password && (
            <p className="error_message">{error.password}</p>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="password">Confirm Password</label>

          <input
            type={showConfirmPassword ? "text" : "password"}
            name="password"
            id="password"
            className="input-field"
            placeholder="Enter your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            required
          />
          {showConfirmPassword ? (
            <IoMdEye
              className="input-icon"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            />
          ) : (
            <IoMdEyeOff
              className="input-icon"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            />
          )}
          {error && error.confirmPassword && (
            <p className="error_message">{error.confirmPassword}</p>
          )}
        </div>
        <div className="controls">
          <button className="btn login_btn">SignUp</button>
        </div>
      </form>
    </div>
  );
};
