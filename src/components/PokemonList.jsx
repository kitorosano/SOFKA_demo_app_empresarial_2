import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { obtenerPokemons } from '../actions/pokemonAction';
import PokemonItem from './PokemonItem';

function PokemonList() {
	const results = useSelector((state) => state.pokemon.results);
	const error = useSelector((state) => state.pokemon.error);
	const loading = useSelector((state) => state.view.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(obtenerPokemons());
  }, []);

  return (
    <div className='flex flex-1 m-5 border-2 border-dashed border-gray-300 rounded-lg '>
      {!loading && error && <div className='errorAlert'>{error}</div>}
      
      <ul className="">
        {!loading && results && results.map(pokemon => 
          <PokemonItem key={pokemon.url} pokemon={pokemon} />
        )}
      </ul>
    </div>
  )
}

export default PokemonList