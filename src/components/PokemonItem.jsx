import React from 'react'

function PokemonItem({pokemon}) {
  return (
    <div className=""> {"▪ "}{pokemon.name}</div>
  )
}

export default PokemonItem