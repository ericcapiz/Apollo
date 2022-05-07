import React, { useState } from "react";
import rocket from "../assets/rocket.svg";
import open from "../assets/hamburger.svg";
import close from "../assets/close.svg";
import s from "../assets/stroke.svg";

import "../App.css";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <div className="mainNav">
        <div className="logo">
          <img src={rocket} alt="rocket" />
          <h1>Apollo</h1>
        </div>
        <nav className="nav">
          <p>Schedule </p>
          <p>About Us</p>
          <p>Contact</p>
        </nav>
        <div className="menuItems" onClick={handleMenu}>
          {menu ? (
            <img alt="close" src={close} />
          ) : (
            <img alt="open" src={open} />
          )}
        </div>
      </div>
      {menu ? (
        <nav className="subNav">
          <div className="items">
            <p>Schedule</p>
            <img className="img" src={s} alt="right-arrow" />
          </div>
          <div className="items">
            <p>About Us</p>
            <img className="img" src={s} alt="right-arrow" />
          </div>
          <div className="items">
            <p>Contact</p>
            <img className="img" src={s} alt="right-arrow" />
          </div>
        </nav>
      ) : (
        ""
      )}
    </div>
  );
};

export default Nav;
