import React from "react";
import "./style.scss";
import logo from "./../../img/logo.svg";
import git from "./../../img/git.svg";
import linkedin from "./../../img/linkedin.svg";
import twitter from "./../../img/twitter.svg";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="social-medias">
        <ul>
          <li>
            <img src={git} alt="git" />
          </li>
          <li>
            <img src={linkedin} alt="linkedin" />
          </li>
          <li>
            <img src={twitter} alt="twitter" />
          </li>
        </ul>
        <div className="blue-line"></div>
      </div>
    </header>
  );
}

export default Header;
