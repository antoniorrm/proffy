import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/6803917?s=460&u=d379f7b2345bcd0ed40a301a2e6da51d65f4f9c9&v=4"
          alt="avatarGithub"
        />
        <div>
          <strong>Antonio Raimundo</strong>
          <span>Dj</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de Dj avançada.
        <br />
        <br />
        Apoixonado por música e levar a música para diversas pessoas e levar uma
        experiência única. Mais de 100 pessoas já foram a um show dele.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
