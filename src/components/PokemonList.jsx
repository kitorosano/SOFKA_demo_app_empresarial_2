import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerPokemons } from '../actions/pokemonAction'
import PokemonInfo from './PokemonInfo'

function PokemonList() {
  const pokemons = useSelector(state => state.pokemon.results)
  const loadNext = useSelector(state => state.pokemon.loadNext)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(obtenerPokemons(loadNext))
  }, [])

 return (
   <div className="app-contaner">
     <h1>Pokedex</h1>
     <div className="pokemon-container">
       <div className="all-container">
         {pokemons.map( (pokemonStats, index) => 
           <PokemonInfo
             key={index}
             id={pokemonStats.id}
             image={pokemonStats.sprites.other.dream_world.front_default}
             name={pokemonStats.name}
             type={pokemonStats.types[0].type.name}
           />)}
         
       </div>
         <button className="load-more" onClick={() => dispatch(obtenerPokemons(loadNext))}>Load more</button>
     </div>
   </div>
 );
}

export default PokemonList