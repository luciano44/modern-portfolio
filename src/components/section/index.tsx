import React, { useEffect, useRef } from "react";
import "./style.scss";
import profile from "../../img/icons/profile1.png";

function Section() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    sectionRef.current!.style.animation = "fade 1s 1.25s forwards";
  }, []);

  return (
    <section ref={sectionRef}>
      <div className="profile">
        <img src={profile} alt="Avatar" />
        <div className="name">
          <span>Luciano Ribeiro</span>
          <div className="blue-line"></div>
        </div>
      </div>
      <h1>
        Desenvolvedor <span> Full Stack</span>, crio designs e as implementações
        de Front e Back-End
      </h1>
      <p>
        2 Anos de experiência em desenvolvimento Front-End e 1 ano em Back-end,
        formado em Análise e Desenvolvimento de Sistemas.
      </p>
    </section>
  );
}

export default Section;
