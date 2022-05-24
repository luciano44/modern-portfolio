import React from "react";
import "./style.scss";
import Project from "../project";

// react-icons
import { FaDownload } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

// technology icons
import js from "../../img/icons/js.png";
import html from "../../img/icons/html.png";
import css from "../../img/icons/css.png";
import react from "../../img/icons/react.png";
import git from "../../img/icons/git.png";
import node from "../../img/icons/node.png";
import mongodb from "../../img/icons/mongodb.png";
import express from "../../img/icons/express.png";
import figma from "../../img/icons/figma.png";
import sass from "../../img/icons/sass.png";

// project logos
import lchat from "../../img/lchat.svg";

function Article() {
  return (
    <article>
      <div className="projects">
        <p className="description">PROJETOS</p>
        <ul>
          <Project
            projectLink="https://luchat.netlify.app"
            logo={lchat}
            title="LCHAT"
            about="Chat com cadastro e perfil de usuários"
            githubLink="https://github.com/luciano44/LChat"
          />
          <Project
            projectLink="https://luchat.netlify.app"
            logo={lchat}
            title="LCHAT"
            about="Chat com cadastro e perfil de usuários"
            githubLink="https://github.com/luciano44/LChat"
          />
          <Project
            projectLink="https://luchat.netlify.app"
            logo={lchat}
            title="LCHAT"
            about="Chat com cadastro e perfil de usuários"
            githubLink="https://github.com/luciano44/LChat"
          />
          <Project
            projectLink="https://luchat.netlify.app"
            logo={lchat}
            title="LCHAT"
            about="Chat com cadastro e perfil de usuários"
            githubLink="https://github.com/luciano44/LChat"
          />
          <Project
            projectLink="https://luchat.netlify.app"
            logo={lchat}
            title="LCHAT"
            about="Chat com cadastro e perfil de usuários"
            githubLink="https://github.com/luciano44/LChat"
          />
          <Project
            projectLink="https://luchat.netlify.app"
            logo={lchat}
            title="LCHAT"
            about="Chat com cadastro e perfil de usuários"
            githubLink="https://github.com/luciano44/LChat"
          />
        </ul>
        <div className="curriculum">
          <ImProfile /> <span>Curriculum</span>{" "}
          <a href="#download">
            <FaDownload />
          </a>
        </div>
      </div>
      <div className="knowledges">
        <p className="description">CONHECIMENTOS</p>
        <ul>
          <li>
            <img src={js} alt="JavaScript" />
            <span>JavaScript</span>
          </li>
          <li>
            <img src={html} alt="HTML" />
            <span>HTML</span>
          </li>
          <li>
            <img src={css} alt="CSS" />
            <span>CSS</span>
          </li>
          <li>
            <img src={react} alt="React" />
            <span>React</span>
          </li>
          <li>
            <img src={git} alt="Git" />
            <span>Git</span>
          </li>
          <li>
            <img src={node} alt="Node" />
            <span>Node</span>
          </li>
          <li>
            <img src={sass} alt="Sass" />
            <span>Sass</span>
          </li>
          <li>
            <img src={mongodb} alt="MongoDB" />
            <span>MongoDB</span>
          </li>
          <li>
            <img src={express} alt="Express" />
            <span>Express</span>
          </li>
          <li>
            <img src={figma} alt="Figma" />
            <span>Figma</span>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default Article;
