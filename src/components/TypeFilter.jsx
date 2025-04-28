import React from 'react';

const types = [
  '', 'fire', 'water', 'grass', 'electric', 'bug', 'normal', 'poison', 'ground', 'fairy', 'fighting', 'psychic', 'rock', 'ghost', 'ice', 'dragon', 'dark', 'steel', 'flying'
];

function TypeFilter({ selectedType, setSelectedType }) {
  return (
    <select
      className="type-filter"
      value={selectedType}
      onChange={(e) => setSelectedType(e.target.value)}
    >
      <option value="">All Types</option>
      {types.map(type => (
        <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
      ))}
    </select>
  );
}

export default TypeFilter;