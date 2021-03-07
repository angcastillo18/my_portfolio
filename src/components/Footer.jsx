import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <div className='section__footer'>
      <div className='container__max'>
        <section className='contact'>
          <header>
            <h3>Estemos en contacto</h3>
          </header>
          <div className='contact__socialMedia'>
            <div className='contact__socialMedia-email'>
              <img
                src={require("../assets/apreton-de-manos.png")}
                alt='hands-shake'
              />
              <p>angcastillo18@gmail.com</p>
            </div>
            <div className='contact__socialMedia-links'>
              <a href='https://www.linkedin.com/in/angelo-castillo-falcon-3715b319a/'>
                <FontAwesomeIcon icon={faLinkedin} color='#000000' />
              </a>
              <a href='https://github.com/angcastillo18'>
                <FontAwesomeIcon icon={faGithub} color='#000000' />
              </a>
              <a href='mailto:angcastillo18@gmail.com'>
                <FontAwesomeIcon icon={faEnvelopeOpenText} color='#000000' />
              </a>
            </div>
          </div>
        </section>
      </div>
      <footer>
        <p>© Copyright - Angelo Castillo</p>
      </footer>
    </div>
  );
}

export default Footer;
