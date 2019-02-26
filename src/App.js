import React from "react";
import PokemonIndex from "./components/PokemonIndex";
import "./App.css";

class App extends React.Component {
  state = {
    pokemons: []
  };

  componentDidMount() {
    fetch(`http://localhost:3000/pokemon`)
      .then(resp => resp.json())
      .then(pokemonData => this.setState({ pokemons: pokemonData }));
  }

  render() {
    return (
      <div className="App">
        <PokemonIndex pokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
