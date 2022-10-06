import React from "react";
import Pokemon from "./Pokemon";
import data from '../data';

class Pokedex extends React.Component {
    render() {
        return (
            <div className="pokedex">
            {data.map((pokemon) => <Pokemon key={pokemon.id} pokemons={pokemon} />)}
            </div>
        )
    }
}

export default Pokedex;