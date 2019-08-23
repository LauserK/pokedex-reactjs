import React from "react";
import { Card } from "../card/card";
import "./card-list.css";
export const CardList = props => {
  return (
    <div className="card-list">
      {props.pokemons.map(pokemon => (
        <Card key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
};
