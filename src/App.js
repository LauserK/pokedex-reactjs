import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/proyectos-mejorandola/pokedex/master/public/pokemons.json"
    )
      .then(response => response.json())
      .then(data => this.setState({ pokemons: data }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { pokemons, searchField } = this.state;
    const filteredPokemons = pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="App-title">Pokedex</h1>
        <SearchBox
          placeholder="Search pokemons"
          handleChange={this.handleChange}
        />
        <CardList pokemons={filteredPokemons} />
      </div>
    );
  }
}

export default App;
