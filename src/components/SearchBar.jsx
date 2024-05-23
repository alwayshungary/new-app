import React, { useState } from 'react';

const SearchBar = ({ placeholder, data, onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;