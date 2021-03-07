import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faSass,
  faBootstrap,
  faVuejs,
  faReact,
  faNodeJs,
  faGit,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";
import { Fade } from "react-awesome-reveal";

function Skills() {
  return (
    <section className='mySkills' id='mySkills'>
      <Fade triggerOnce={true}>
        <div className='container__max'>
          <header>
            <h3>Mis Habilidades</h3>
            <p>
              Aqui muestro algunas tecnologias con la que he estado trabajando
              recientemente.
            </p>
          </header>
          <div className='skills__content'>
            <h4>Tecnologías :</h4>

            <div>
              <FontAwesomeIcon icon={faHtml5} color='#FD7E14' />
              <FontAwesomeIcon icon={faCss3Alt} color='#016DB5' />
              <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
              <FontAwesomeIcon icon={faSass} color='#C76494' />
              <FontAwesomeIcon icon={faBootstrap} color='#533B78' />
              <FontAwesomeIcon icon={faVuejs} color='#3FB27F' />
              <FontAwesomeIcon icon={faReact} color='#00D1F7' />
              <FontAwesomeIcon icon={faNodeJs} color='#7CB701' />
              <FontAwesomeIcon icon={faGit} color='#3B2C00' />
              <FontAwesomeIcon icon={faNpm} color='#C53635' />
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default Skills;
