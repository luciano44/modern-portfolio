import React, { useState, useRef, useEffect } from "react";
import "./style.scss";
import Project from "../project";

// react-icons
import { FaDownload } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

// technology icons
import next from "../../img/icons/next.png";
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
import mongoose from "../../img/icons/mongoose.png";

// project logos
import nextlevel44 from "../../img/nextlevel44.svg";
import lorem44 from "../../img/lorem44.svg";
import todolistapp from "../../img/todolistapp.svg";
import lchat from "../../img/lchat.svg";
import pagination from "../../img/pagination.svg";
import users from "../../img/users.svg";
import clock from "../../img/clock.svg";
import oldlr from "../../img/oldlr.svg";
import paw from "../../img/paw.svg";
import todo from "../../img/todo.svg";
import smile from "../../img/smile.svg";

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
        "Aplicativo De Chat Em Tempo Real Com Cadastro, Login, Perfil E Listagem De Usuários Cadastrados.",
      githubLink: "https://github.com/luciano44/LChat",
    },
    {
      projectLink: "https://luciano44.github.io/pagination/",
      logo: pagination,
      title: "Paginação",
      about: "Base De Um App Com Paginação Customizável.",
      githubLink: "https://github.com/luciano44/pagination",
    },

    {
      projectLink: "https://github.com/luciano44/todolist-app",
      logo: todolistapp,
      title: "To-Do List",
      about: "App Android Para Criação De Tarefas",
      githubLink: "https://github.com/luciano44/todolist-app",
    },
    {
      projectLink: "https://luciano44.github.io/lorem44/",
      logo: lorem44,
      title: "Lorem44",
      about: `Gere Paragrafos "Lorem Ipsum"`,
      githubLink: "https://github.com/luciano44/lorem44",
    },
    {
      projectLink: "https://luciano44.github.io/to-do-list/",
      logo: todo,
      title: "To-Do App",
      about: "To-Do App Com Lista De Tarefas A Fazer E Tarefas Já Concluidas.",
      githubLink: "https://github.com/luciano44/to-do-list",
    },
    {
      projectLink: "http://nextlevel44.vercel.app/",
      logo: nextlevel44,
      title: "NextLevel44",
      about: "Empresa De Automação Residencial.",
      githubLink: "https://github.com/luciano44/nextlevel44",
    },

    {
      projectLink: "https://luciano44.github.io/userlist/",
      logo: users,
      title: "Listagem de Usuários",
      about: "Lista Usuários De Uma API Pública.",
      githubLink: "https://github.com/luciano44/userlist",
    },
    {
      projectLink: "https://luciano44.github.io/Analog-Clock/",
      logo: clock,
      title: "Relógio Analógico",
      about: "Relógio Analógico Feito Com Vanilla Js",
      githubLink: "https://github.com/luciano44/Analog-Clock",
    },
    {
      projectLink: "https://luciano44.github.io/PET-photos/",
      logo: paw,
      title: "Imagens de Animais",
      about: "Gerador De Imagens Aleatória De Animais.",
      githubLink: "https://github.com/luciano44/PET-photos",
    },
    {
      projectLink: "https://old-react-portfolio.netlify.app",
      logo: oldlr,
      title: "Portfólio Antigo",
      about: "Portfólio Anterior.",
      githubLink: "https://github.com/luciano44/React-Portfolio-build",
    },
    {
      projectLink:
        "https://play.google.com/store/apps/details?id=com.randomtxtgen.geradornomes",
      logo: smile,
      title: "Random Text Generator",
      about:
        "App Android Que Gera Uma Palavra De Letras Geradas Aleatoriamente.",
      githubLink: "/",
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
        <p className="description">TECNOLOGIAS</p>
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
            <img src={next} alt="Next.JS" />
            <span>Next</span>
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
            <img src={mongoose} alt="Mongoose" />
            <span>Mongoose</span>
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
