import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';

const Marathon = () => {
  const [filteredData, setFilteredData] = useState([]);
  const data = [
    { id: 1, name: 'Marathon A', date: '2023-03-01', location: 'City A' },
    { id: 2, name: 'Marathon B', date: '2023-04-01', location: 'City B' },
  ];

  const handleSearch = (query) => {
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <h1>Marathon Table</h1>
      <SearchBar placeholder="Search by name" data={data} onSearch={handleSearch} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.date}</td>
              <td>{item.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Marathon;