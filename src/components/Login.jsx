import { useEffect, useState } from "react";
import { GoMail } from "react-icons/go";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || email.length === 0) {
      return setError((prev) => ({ ...prev, email: "Enter a valid email" }));
    }

    if (!password || password.length < 8) {
      return setError((prev) => ({
        ...prev,
        password: "Enter password upto 8 characters",
      }));
    }

    console.log(`Email/Username: ${email}`);
    navigate("/");
  };

  useEffect(() => {
    // Temporary solution for removing the error state
    if (email || email.length < 3) {
      return setError((prev) => ({ ...prev, email: "" }));
    }
    if (password || password.length < 8) {
      return setError((prev) => ({
        ...prev,
        password: "",
      }));
    }
  }, [email, password]);

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

        <div className="controls">
          <button className="btn login_btn">Login</button>
        </div>
      </form>
    </div>
  );
};
