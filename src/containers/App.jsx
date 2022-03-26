import PokemonList from "../components/PokemonList";

function App() {
	return (
		<div className='appContainer'>
      <PokemonList />

			<p className='absolute bottom-0 left-0'>
				©{new Date().getFullYear()} Esteban Rosano
			</p>
		</div>
	);
}

export default App;
