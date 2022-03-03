import React, { useState, useEffect } from "react";
import "./Nav.css";
const Nav = () => {
  const [show, handleShow] = useState(false);
  const transationNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transationNavBar);
    return () => {
      window.removeEventListener("scroll", transationNavBar);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className=" nav_content">
        <img
          className="nav_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        />
        <img
          className="nav_avatar"
          src="https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png      
"
        />
      </div>
    </div>
  );
};

export default Nav;
