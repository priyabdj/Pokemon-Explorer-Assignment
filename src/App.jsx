import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TypeFilter from './components/TypeFilter';
import PokemonList from './components/PokemonList';
import useFetchPokemon from './hooks/useFetchPokemon';

function App() {
  const { pokemonList, loading, error } = useFetchPokemon();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const filteredPokemon = pokemonList.filter(pokemon => 
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedType ? pokemon.types.some(t => t.type.name === selectedType) : true)
  );

  return (
    <div>
      <Header />
      <div className="controls">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <TypeFilter selectedType={selectedType} setSelectedType={setSelectedType} />
      </div>
      {loading && <p className="status">Loading...</p>}
      {error && <p className="status">Failed to load Pokémon.</p>}
      {!loading && filteredPokemon.length === 0 && <p className="status">No Pokémon Found!</p>}
      <PokemonList pokemonList={filteredPokemon} />
    </div>
  );
}

export default App;