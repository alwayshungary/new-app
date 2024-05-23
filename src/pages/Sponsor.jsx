import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';

const Sponsor = ({ searchQuery }) => {
  const [filteredData, setFilteredData] = useState([]);
  const data = [
    { id: 1, name: 'Company A', donationAmount: 1000, marathonId: 1 },
    { id: 2, name: 'Company B', donationAmount: 2000, marathonId: 2 },
  ];

  const handleSearch = (query) => {
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.donationAmount.toString().includes(query) ||
      item.marathonId.toString().includes(query)
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <h1>Sponsor Table</h1>
      <SearchBar placeholder="Search by name, donation amount, or marathon ID" onSearch={handleSearch} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Donation Amount</th>
            <th>Marathon ID</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.donationAmount}</td>
              <td>{item.marathonId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sponsor;