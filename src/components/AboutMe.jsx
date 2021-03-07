import React from "react";
import { Fade } from "react-awesome-reveal";
function AboutMe() {
  return (
    <section className='aboutMe' id='aboutMe'>
      <Fade triggerOnce={true}>
        <div className='container__max'>
          <div className='content-left'>
            <h3>Sobre mí</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              magnam placeat ratione recusandae nobis sed possimus. Facilis
              commodi nobis obcaecati dignissimos tempora molestiae? Commodi
              voluptas quisquam quo excepturi suscipit ad! commodi nobis
              obcaecati dignissimos tempora molestiae? Commodi voluptas quisquam
              quo excepturi suscipit ad!
            </p>
          </div>
          <div className='content-right'>
            <img src={require("../assets/about-me.jpg")} alt='computer' />
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default AboutMe;
