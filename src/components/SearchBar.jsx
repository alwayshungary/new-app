import React, { useState } from 'react';
import { Input } from 'antd';

const { Search } = Input;

const SearchBar = ({ placeholder, onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (value) => {
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="search-bar">
      <Search
        placeholder={placeholder}
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        enterButton
      />
    </div>
  );
};

export default SearchBar;