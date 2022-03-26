import {
	POKEMON_ERROR_HIDE,
	POKEMON_ERROR_SHOW,
	POKEMON_RESULTS,
	VIEW_LOADED,
	VIEW_LOADING,
} from '../types';

import clienteAxios from '../config/axios';

export const obtenerPokemons = () => async (dispatch) => {
	dispatch(viewLoading());

	try {
		const respuesta = await clienteAxios.get('pokemon?limit=151&offset=0');
		console.log(respuesta.data)

		dispatch(pokemonSetResults(respuesta.data.results));
	} catch (error) {
		dispatch(pokemonSetErrorShow(error.response.data));

		setTimeout(() => {
			dispatch(pokemonSetErrorHide());
		}, 5000);
	} finally {
		dispatch(viewLoaded());
	}
};

const pokemonSetResults = (results) => ({
	type: POKEMON_RESULTS,
	payload: results,
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
