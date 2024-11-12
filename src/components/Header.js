// import { LOGO_URL } from "../utils/constants";
import * as fixed from "../utils/constants";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
