import React, { useState, useRef, useEffect } from "react";
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
import users from "../../img/users.svg";
import clock from "../../img/clock.svg";
import oldlr from "../../img/oldlr.svg";
import paw from "../../img/paw.svg";
import pencil from "../../img/pencil.svg";
import todo from "../../img/todo.svg";

function Article() {
  type Project = {
    projectLink: string;
    logo: string;
    title: string;
    about: string;
    githubLink: string;
  };

  const [projects] = useState<Project[]>([
    {
      projectLink: "https://luchat.netlify.app",
      logo: lchat,
      title: "LCHAT",
      about:
        "Aplicativo de chat em tempo real com cadastro, login, perfil e listagem de usuários cadastrados.",
      githubLink: "https://github.com/luciano44/LChat",
    },
    {
      projectLink: "https://luciano44.github.io/to-do-list/",
      logo: todo,
      title: "To-Do App",
      about: "To-Do App com lista de tarefas a fazer e tarefas já concluidas.",
      githubLink: "https://github.com/luciano44/to-do-list",
    },
    {
      projectLink: "https://luciano44.github.io/userlist/",
      logo: users,
      title: "Listagem de Usuários",
      about: "Lista usuários de uma API pública.",
      githubLink: "https://github.com/luciano44/userlist",
    },
    {
      projectLink: "https://luciano44.github.io/Analog-Clock/",
      logo: clock,
      title: "Relógio Analógico",
      about: "Relógio Analógico feito com Vanilla JS",
      githubLink: "https://github.com/luciano44/Analog-Clock",
    },
    {
      projectLink: "https://luciano44.github.io/PET-photos/",
      logo: paw,
      title: "Imagens de Animais",
      about: "Gerador de imagens aleatória de animais.",
      githubLink: "https://github.com/luciano44/PET-photos",
    },
    {
      projectLink: "https://old-react-portfolio.netlify.app",
      logo: oldlr,
      title: "Portfólio Antigo",
      about: "Portfólio Anterior a este.",
      githubLink: "https://github.com/luciano44/React-Portfolio-build",
    },
    {
      projectLink: "https://luciano44.github.io/drawing-app/",
      logo: pencil,
      title: "App de Desenho",
      about:
        "App de Desenho com opções de cores, tamanho do pincel, refazer ultimo risco e limpar o quadro.",
      githubLink: "https://github.com/luciano44/drawing-app",
    },
  ]);

  const articleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    articleRef.current!.style.animation = "fade 1s 1.5s forwards";
  }, []);

  return (
    <article ref={articleRef}>
      <div className="projects">
        <p className="description">PROJETOS</p>
        <ul>
          {projects.map((p, i) => (
            <Project
              key={i}
              projectLink={p.projectLink}
              logo={p.logo}
              title={p.title}
              about={p.about}
              githubLink={p.githubLink}
            />
          ))}
        </ul>
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
        <a
          href="/Profile.pdf"
          download={true}
          className="curriculum"
          title="Baixar Curriculum"
        >
          <ImProfile /> <span>Curriculum</span>
          <FaDownload />
        </a>
      </div>
    </article>
  );
}

export default Article;
