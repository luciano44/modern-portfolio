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
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="social-medias">
        <ul>
          <li>
            <a href="#">
              <img src={git} alt="git" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={linkedin} alt="linkedin" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitter} alt="twitter" />
            </a>
          </li>
        </ul>
        <div className="blue-line"></div>
      </div>
    </header>
  );
}

export default Header;
