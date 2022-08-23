import React from 'react'

const PokeCard = ({pokemon}) => {
  return (
    <div>

        {pokemon !== null ? (
            <div className='pokemonInfo'>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
            </div>): (<h2>Choose Pokemon</h2>)
        }
    </div>
  )
}

export default PokeCard