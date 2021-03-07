import React from "react";

export default function Card(props) {
  return (
    <div className='card'>
      <img src={require(`../assets/${props.imageName}.jpg`)} alt='' />
      <div className='card__content'>
        <h4>{props.title}</h4>
        <p>{props.children}</p>
        <button>Visitar</button>
      </div>
    </div>
  );
}
