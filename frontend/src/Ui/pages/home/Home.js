import React from "react";
import "./Home.css";

import Typical from "react-typical";

import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home" id="home-section">
      <h1>Hello, I'm Ankush</h1>
      <p className="typewriter">
        I'm a{" "}
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            "Mobile App Developer 📱",
            1000,
            "Web Developer 💻",
            1000,
            "Student 📖",
            1000,
            "Life-long learner 😎",
            1000,
          ]}
        />
      </p>

      <NavLink className="rm-fn" to="/about">
        <div className="project-btn">About me -{">"}</div>
      </NavLink>
    </div>
  );
}

export default Home;
