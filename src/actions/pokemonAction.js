import {
	POKEMON_ERROR_HIDE,
	POKEMON_ERROR_SHOW,
	POKEMON_LOAD_NEXT_RESULTS,
	POKEMON_RESULTS,
	VIEW_LOADED,
	VIEW_LOADING,
} from '../types';

import clienteAxios from '../config/axios';

export const obtenerPokemons = (load) => async (dispatch) => {
	dispatch(viewLoading());

	try {
		const respuesta = await clienteAxios.get(load);
    
    await dispatch(pokemonSetNextResults(respuesta.data.next))

    respuesta.data.results.forEach( async pokemon => {
      const respuesta2 = await clienteAxios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      await dispatch(pokemonSetResults(respuesta2.data))
    })
	} catch (error) {
		dispatch(pokemonSetErrorShow(error.response.data));

		setTimeout(() => {
			dispatch(pokemonSetErrorHide());
		}, 5000);
	} finally {
    dispatch(viewLoaded());
  }
};
;

const pokemonSetResults = (results) => ({
	type: POKEMON_RESULTS,
	payload: results,
});
const pokemonSetNextResults = (next) => ({
	type: POKEMON_LOAD_NEXT_RESULTS,
	payload: next,
});

const pokemonSetErrorShow = (message) => ({
	type: POKEMON_ERROR_SHOW,
	payload: message,
});
const pokemonSetErrorHide = () => ({
	type: POKEMON_ERROR_HIDE,
});

const viewLoading = () => ({
	type: VIEW_LOADING,
});
const viewLoaded = () => ({
	type: VIEW_LOADED,
});
