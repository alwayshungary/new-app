import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';

const Runner = ({ searchQuery }) => {
  const [filteredData, setFilteredData] = useState([]);
  const data = [
    { id: 1, name: 'John Doe', age: 30, gender: 'Male' },
    { id: 2, name: 'Jane Smith', age: 25, gender: 'Female' },
  ];

  const handleSearch = (query) => {
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.age.toString().includes(query) ||
      item.gender.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <h1>Runner Table</h1>
      <SearchBar placeholder="Search by name, age, or gender" onSearch={handleSearch} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Runner;