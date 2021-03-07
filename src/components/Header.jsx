import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Fade, Slide } from "react-awesome-reveal";
function Header() {
  const [showList, setshowList] = useState(true);
  const handleList = () => {
    const list_container = document.querySelector(".navBar__list");

    if (showList) {
      list_container.style.transform = "translate(0)";
    } else {
      list_container.style.transform = "translate(-800px)";
    }
    setshowList(!showList);
  };

  return (
    <header className='header' id='home'>
      <div className='container__max'>
        <nav className='navBar'>
          <div className='navBar__header'>
            <a className='navBar__icon' href='#home'>
              <h4>
                <span>A</span>ngelo <span>C</span>astillo
              </h4>
            </a>
            <button onClick={handleList}>
              {showList ? (
                <FontAwesomeIcon icon={faBars} />
              ) : (
                <FontAwesomeIcon icon={faTimes} />
              )}
            </button>
          </div>
          <ul className='navBar__list'>
            <li className='navBar__list__item'>
              <Slide direction='right'>
                <a href='#aboutMe'>Sobre mí</a>
              </Slide>
            </li>
            <li className='navBar__list__item'>
              <Slide direction='right'>
                <a href='#mySkills'>Mis habilidades</a>
              </Slide>
            </li>
            <li className='navBar__list__item'>
              <Slide direction='right'>
                <a href='#myProjects'>Mis proyectos</a>
              </Slide>
            </li>
          </ul>
        </nav>
        {/* Contenido */}
        <div className='banner__content'>
          <Fade direction='down'>
            <div className='banner__content__portrait'>
              <img src={require("../assets/profile.jpg")} alt='profile' />
            </div>
          </Fade>
          <div className='swipe'>
            <h1>Hola, Soy Angelo Castillo</h1>
          </div>
          <div className='swipe swipe__delay'>
            <h3>Desarrollador Web</h3>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
