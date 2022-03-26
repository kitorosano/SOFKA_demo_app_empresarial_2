import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducer';
import viewReducer from './viewReducer';

export default combineReducers({
    pokemon: pokemonReducer,
    view: viewReducer
});