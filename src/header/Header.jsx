import React from "react";
import { IoLogoGameControllerA } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
const Header = () => {
  return (
    <header id={scss.header}>
      <div className="container">
        <div className={scss.header}>
          <IoLogoGameControllerA />
          <nav>
            <p>home</p>
            <p>admin</p>
            <p>product</p>
          </nav>
          <IoIosLogOut />
        </div>
      </div>
    </header>
  );
};

export default Header;
