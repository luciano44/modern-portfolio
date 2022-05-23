import React from "react";
import "./style.scss";

function Section() {
  return (
    <section>
      <div className="profile">
        <img
          src="https://64.media.tumblr.com/5df53fc42703b5b712ba00da78ef2377/f06686c9a98e095b-5f/s540x810/1f4a2feb76111ca2b15434aef6aeb6ea32e82d10.pnj"
          alt="Avatar"
        />
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
