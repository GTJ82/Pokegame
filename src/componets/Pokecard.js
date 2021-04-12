import React, { Component } from 'react'

import style from '../styles/pokecard.css';

class Pokecard extends Component {
    render() {
        const { id, name, type, exp } = this.props
        let padToThree = (number) => (number <= 999 ? `00${id}`.slice(-3) : number)

        let poke_api = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
        let img_src = `${poke_api}${padToThree(id)}.png`


        return (
            <div className='container'>
                <div className="name">{name}</div>
                <img src={img_src} alt={name} />
                <div className="type">Type: {type}</div>
                <div className="exp">EXP: {exp}</div> 
            </div>
        )
    }
}

export default Pokecard;
