// import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import * as fixed from "../utils/constants";

const Header = () => {
  const [loginbtn, setLoginBtn] = useState("Login");

  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src={fixed.LOGO_URL} />
      </div>
      <div className="link-container">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
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
