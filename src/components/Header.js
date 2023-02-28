import React from "react";
import "../assest/styles/header.css";
import logo from "../assest/img/icons.gif"


const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerWrapper">
        <div className="logoWrapper">
            <img src={logo} />
        </div>
        <h1>My Budget App</h1>
      </div>
    </div>
  );
};

export default Header;
