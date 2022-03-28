import React from 'react'
import ReactDOM from 'react-dom';
import './styles/globals.css';
import App from './App';                                                  
import { BrowserRouter as Router, Routes, Route,  Navigate } from "react-router-dom";
import PokemonList from './components/PokemonList';

//Redux
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App/>}>
            <Route index element={<PokemonList />} />
          </Route>
          <Route element={<Navigate to="/" />} /> 
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
