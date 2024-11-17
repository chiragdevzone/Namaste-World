import { useState } from "react";
import * as fixed from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const [loginbtn, setLoginBtn] = useState("Login");

  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src={fixed.LOGO_URL} />
      </div>
      <div className="link-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>

          <button
            className="login-btn"
            onClick={() => {
              loginbtn == "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginbtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
