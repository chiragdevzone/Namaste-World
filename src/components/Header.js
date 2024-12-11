import { useContext, useState } from "react";
import * as fixed from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [loginbtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between items-center bg-yellow-200 mb-2  ">
      <div className="p-1 w-[80px]">
        <img src={fixed.LOGO_URL} />
      </div>
      <div>
        <ul className="flex ">
          <li className="mx-4">
            Online Status{onlineStatus === true ? "✅" : "🔴"}
          </li>
          <li className="mx-4">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mx-4">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="mx-4">
            <Link to="/grocery">Grocery</Link>
          </li>

          <Link to={loginbtn === "Login" ? "/login" : "/"}>
            <button
              className="mx-4"
              onClick={() => {
                loginbtn == "Login"
                  ? setLoginBtn("Logout")
                  : setLoginBtn("Login");
              }}
            >
              {loginbtn}
            </button>
          </Link>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
