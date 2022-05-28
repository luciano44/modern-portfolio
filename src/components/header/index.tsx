import React, { useEffect, useRef } from "react";
import "./style.scss";
import logo from "./../../img/logo.svg";
import git from "./../../img/git.svg";
import linkedin from "./../../img/linkedin.svg";
import twitter from "./../../img/twitter.svg";

function Header() {
  const blueLineRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const ulMediasRef = useRef<HTMLUListElement>(null);

  // the CSS rules of each element below written in the .scss file describes their first animation state

  // Start animation
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 250);

    blueLineRef.current!.style.width = "100%";
    logoRef.current!.style.animation = "appear 1s 1s forwards";
    ulMediasRef.current!.style.animation = "jump 1s .5s forwards";
  }, []);

  return (
    <header>
      <div ref={logoRef} className="logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="social-medias">
        <ul ref={ulMediasRef}>
          <li>
            <a
              href="https://github.com/luciano44"
              target="_blank"
              rel="noreferrer"
            >
              <img src={git} alt="git" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/luciano-ar/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/lucianoasri"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} alt="twitter" />
            </a>
          </li>
        </ul>
        <div ref={blueLineRef} className="blue-line"></div>
      </div>
    </header>
  );
}

export default Header;
