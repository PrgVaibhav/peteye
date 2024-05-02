import { FaEye } from "react-icons/fa6";

export const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <p className="nav_logo">
          <FaEye />
        </p>
      </div>

      <div className="headli">
        <h1>PetEYE</h1>
      </div>

      <div className="nav_control">
        <p>Go To Home</p>

        <button className="btn nav_btn">Need Help?</button>
      </div>
    </nav>
  );
};
