import { useState, useEffect } from 'react';

function useFetchPokemon() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        const data = await res.json();
        const detailedPromises = data.results.map(pokemon => fetch(pokemon.url).then(res => res.json()));
        const detailedPokemon = await Promise.all(detailedPromises);
        setPokemonList(detailedPokemon);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  return { pokemonList, loading, error };
}

export default useFetchPokemon;