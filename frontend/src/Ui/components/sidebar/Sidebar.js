import React from "react";
import "./Sidebar.css";

import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className={"sidebar " + (isOpen ? "sidebar-open" : "sidebar-close")}>
      <div className="icon" onClick={toggle}>
        <FaTimes className="close" />
      </div>

      <div className="menu-items-sidebar" onClick={toggle}>
        <NavLink
          className="link-sidebar"
          activeClassName="active-projects"
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink
          className="link-sidebar"
          activeClassName="active-about"
          to="/about"
        >
          About me
        </NavLink>
        <div className="social-icons-sidebar">
          <SocialIcon
            url="https://github.com/ankushLit"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
            className="social-btn-sidebar"
            target="_blank"
          />

          <SocialIcon
            url="https://www.linkedin.com/in/ankush-karkar-b92298167/"
            style={{ height: 35, width: 35 }}
            className="social-btn-sidebar"
            target="_blank"
          />

          <SocialIcon
            url="https://www.instagram.com/_gulaabjaamunn/"
            style={{ height: 35, width: 35 }}
            className="social-btn-sidebar"
            target="_blank"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
