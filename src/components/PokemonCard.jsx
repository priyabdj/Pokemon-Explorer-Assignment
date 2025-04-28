import React from 'react';

function PokemonCard({ pokemon }) {
  return (
    <div className="pokemon-card">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>#{pokemon.id} {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
      <div className="types">
        {pokemon.types.map(t => (
          <span key={t.slot} className={`type ${t.type.name}`}>{t.type.name}</span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;