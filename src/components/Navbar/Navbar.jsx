import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaDumbbell } from "react-icons/fa";
import "./Navbar.css";
import Logo from '../../assets/icons/logo.png';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav className={colorChange ? "app__navbar colorChange" : "app__navbar"}>
      <div className="app__navbar-logo">
      <a href="#home"> <img src={Logo} alt='logo'/></a>
      </div>
      <ul className="app__navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#exercises">Exercices</a>
        </li>
      </ul>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="white"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <FaDumbbell
              fontSize={27}
              className="overlay_close"
              onClick={() => setToggleMenu(false)}
            />
            <hr></hr>
            <ul className="app__navbar-smallscreen-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#exercises">Exercices</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
