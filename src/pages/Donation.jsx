import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';

const Donation = () => {
  const [filteredData, setFilteredData] = useState([]);
  const data = [
    { id: 1, amount: 100, donor: 'John Doe', date: '2023-01-01' },
    { id: 2, amount: 200, donor: 'Jane Smith', date: '2023-02-01' },
  ];

  const handleSearch = (query) => {
    const filtered = data.filter(item =>
      item.donor.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <h1>Donation Table</h1>
      <SearchBar placeholder="Search by donor" data={data} onSearch={handleSearch} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Donor</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.amount}</td>
              <td>{item.donor}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Donation;