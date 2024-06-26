import React, { useState } from 'react';
import { Table } from 'antd';
import SearchBar from '../components/SearchBar';
import './Page.css';

const Donation = () => {
  const [filteredData, setFilteredData] = useState([]);
  const data = [
    { id: 1, amount: 100, donor: 'John Doe', date: '2023-01-01' },
    { id: 2, amount: 200, donor: 'Jane Smith', date: '2023-02-01' },
    // Add more data here
  ];

  const handleSearch = (query) => {
    const filtered = data.filter(item =>
      item.donor.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Amount', dataIndex: 'amount', key: 'amount' },
    { title: 'Donor', dataIndex: 'donor', key: 'donor' },
    { title: 'Date', dataIndex: 'date', key: 'date' },
  ];

  return (
    <div className="page-container">
      <h1>Donation Table</h1>
      <SearchBar placeholder="Search by donor" onSearch={handleSearch} />
      <Table dataSource={filteredData} columns={columns} rowKey="id" />
    </div>
  );
};

export default Donation;