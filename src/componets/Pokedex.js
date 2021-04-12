import React, { Component } from 'react'

import '../styles/pokedex.css';
import Pokecard from './Pokecard';


class Pokedex extends Component {

    render() {
        let title;
        if (this.props.isWinner) {
            title = <h1 className="winner">Winning Hand!</h1>
        } else {
            title = <h1 className="loser">Losing Hand!</h1>
        }
        return (
            <div>
                <div className="pokedex">
                    {title}
                    <p>Total Expierience: {this.props.exp}</p>
                    <div className="Pokedex-card">
                        {this.props.pokemon.map((p) => (
                            <Pokecard
                                id={p.id}
                                name={p.name}
                                type={p.type}
                                exp={p.base_experience}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Pokedex;
