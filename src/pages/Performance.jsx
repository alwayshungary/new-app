import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';

const Performance = ({ searchQuery }) => {
  const [filteredData, setFilteredData] = useState([]);
  const data = [
    { id: 1, runnerId: 1, marathonId: 1, time: '3:45:00' },
    { id: 2, runnerId: 2, marathonId: 2, time: '4:00:00' },
  ];

  const handleSearch = (query) => {
    const filtered = data.filter(item =>
      item.runnerId.toString().includes(query) ||
      item.marathonId.toString().includes(query) ||
      item.time.includes(query)
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <h1>Performance Table</h1>
      <SearchBar placeholder="Search by runner ID, marathon ID, or time" onSearch={handleSearch} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Runner ID</th>
            <th>Marathon ID</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.runnerId}</td>
              <td>{item.marathonId}</td>
              <td>{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Performance;