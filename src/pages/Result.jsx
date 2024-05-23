import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';

const Result = ({ searchQuery }) => {
  const [filteredData, setFilteredData] = useState([]);
  const data = [
    { id: 1, performanceId: 1, position: 1, prize: 'Gold Medal' },
    { id: 2, performanceId: 2, position: 2, prize: 'Silver Medal' },
  ];

  const handleSearch = (query) => {
    const filtered = data.filter(item =>
      item.performanceId.toString().includes(query) ||
      item.position.toString().includes(query) ||
      item.prize.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <h1>Result Table</h1>
      <SearchBar placeholder="Search by performance ID, position, or prize" onSearch={handleSearch} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Performance ID</th>
            <th>Position</th>
            <th>Prize</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.performanceId}</td>
              <td>{item.position}</td>
              <td>{item.prize}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Result;