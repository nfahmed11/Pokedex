import React, { Component } from "react";
import Pokecard from "./Pokecard.js";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Pokedex-winner Pokedex-title">Winning Hand</h1>;
    } else {
      title = <h1 className="Pokedex-loser Pokedex-title">Losing Hand</h1>;
    }
    return (
      <div className="Pokedex">
        {title}
        <h4 className="Pokedex-Exp">
          Total Experience: {this.props.experience}
        </h4>
        <div className="Pokedex-cards">
          {this.props.pokemon.map((p) => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              base_experience={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
