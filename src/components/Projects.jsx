import React from "react";
import { Fade } from "react-awesome-reveal";
import Card from "./Card";
function Projects() {
  return (
    <section className='myProjects' id='myProjects'>
      <Fade triggerOnce={true}>
        <div className='container__max'>
          <header>
            <h3>Mis Proyectos: </h3>
          </header>
          <div className='myProjects__content'>
            <Card imageName='about-me' title='project 1'>
              Este es un projecto hecho con toda la pasion del mundo xD
            </Card>
            <Card imageName='about-me' title='project 1'>
              Este es un projecto hecho con toda la pasion del mundo xD
            </Card>
            <Card imageName='about-me' title='project 1'>
              Este es un projecto hecho con toda la pasion del mundo xD
            </Card>
            <Card imageName='about-me' title='project 1'>
              Este es un projecto hecho con toda la pasion del mundo xD
            </Card>
            <Card imageName='about-me' title='project 1'>
              Este es un projecto hecho con toda la pasion del mundo xD
            </Card>
            <Card imageName='about-me' title='project 1'>
              Este es un projecto hecho con toda la pasion del mundo xD
            </Card>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default Projects;
