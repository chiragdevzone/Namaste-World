import { useState } from "react";
import * as fixed from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="flex justify-between items-center bg-yellow-200 mb-2  ">
      <div className="p-1 w-[80px]">
        <Link to="/">
          <img src={fixed.LOGO_URL} />
        </Link>
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
            <Link to="/cart">Cart-({cartItems.length})</Link>
          </li>
          <li className="mx-4">
            <Link to="/grocery">Grocery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
