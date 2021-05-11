import React from "react";
import "./Navbar.css";

import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";

function Navbar({ toggle }) {
  return (
    <header>
      <nav className="nav-header">
        <NavLink className="link my-name" to="/" exact>
          Ankush
        </NavLink>
        <div onClick={toggle}>
          <FaBars className="bars" />
        </div>
        <div className="menu-items">
          <NavLink
            className="link"
            activeClassName="active-projects"
            to="/projects"
          >
            Projects
          </NavLink>
          <NavLink className="link" activeClassName="active-about" to="/about">
            About me
          </NavLink>
        </div>
        <div className="social-icons push">
          <SocialIcon
            url="https://github.com/ankushLit"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
            className="social-btn"
            target="_blank"
          />

          <SocialIcon
            url="https://www.linkedin.com/in/ankush-karkar-b92298167/"
            style={{ height: 35, width: 35 }}
            className="social-btn"
            target="_blank"
          />

          <SocialIcon
            url="https://www.instagram.com/_gulaabjaamunn/"
            style={{ height: 35, width: 35 }}
            className="social-btn"
            target="_blank"
          />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
