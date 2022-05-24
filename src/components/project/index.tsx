import React from "react";
import "./style.scss";
import github from "../../img/git.svg";

type Props = {
  logo: string;
  title: string;
  about: string;
  githubLink: string;
  projectLink: string;
};

const Project = ({ logo, title, about, projectLink, githubLink }: Props) => {
  return (
    <a href={projectLink} target="_blank" rel="noreferrer">
      <li className="project">
        <img src={logo} alt={title} className="logo" />
        <div className="info">
          <div className="title">{title}</div>
          <div className="about">{about}</div>
        </div>
        <a href={githubLink} target="_blank" rel="noreferrer" className="git">
          <img src={github} alt="Github" />
        </a>
      </li>
    </a>
  );
};

export default Project;
