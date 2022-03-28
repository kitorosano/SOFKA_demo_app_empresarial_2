import {
	POKEMON_ERROR_HIDE,
	POKEMON_ERROR_SHOW,
	POKEMON_LOAD_NEXT_RESULTS,
	POKEMON_RESULTS,
} from '../types';

const initialState = {
	results: [],
	error: null,
	loadNext: 'https://pokeapi.co/api/v2/pokemon/?limit=20',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
	switch (action.type) {
		case POKEMON_RESULTS: {
			return {
				...state,
				results: [...state.results, action.payload].sort((a,b) => a.id - b.id),
				error: null,
			};
		}
		case POKEMON_LOAD_NEXT_RESULTS: {
			return {
				...state,
				loadNext: action.payload,
			};
		}
		case POKEMON_ERROR_SHOW: {
			return {
				...state,
				error: action.payload,
				loadNext: '',
			};
		}
		case POKEMON_ERROR_HIDE: {
			return {
				...state,
				error: null,
			};
		}
		default:
			return state;
	}
}
