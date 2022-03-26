import { POKEMON_ERROR_HIDE, POKEMON_ERROR_SHOW, POKEMON_RESULTS } from "../types";

const initialState = {
  results: [],
  error: null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  switch(action.type) {
    case POKEMON_RESULTS: {
      return {
        ...state,
        results: action.payload,
        error: null
      }
    }
    case POKEMON_ERROR_SHOW: {
      return {
        ...state, 
        results: [],
        error: action.payload
      }
    }
    case POKEMON_ERROR_HIDE: {
      return {
        ...state, 
        error: null
      }
    }
    default: return state;
  }
}