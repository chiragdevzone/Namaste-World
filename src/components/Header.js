import { useState } from "react";
import * as fixed from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginbtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src={fixed.LOGO_URL} />
      </div>
      <div className="link-container">
        <ul>
          <li>Online Status{onlineStatus === true ? "✅" : "🔴"}</li>
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
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>

          <Link to={loginbtn === "Login" ? "/login" : "/"}>
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
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
