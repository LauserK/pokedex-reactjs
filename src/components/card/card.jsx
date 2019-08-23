import React from "react";
import "./card.css";
export const Card = props => (
  <div className="card-container">
    <img
      alt={props.pokemon.name}
      src={`http://sebathomson.cl/projects/pokedex-angularjs-platzi/assets/img/pokemons/${props.pokemon.name.toLowerCase()}.jpg`}
      width="180px"
      height="180px"
    />
    <h1>{props.pokemon.name.toUpperCase()}</h1>
  </div>
);
