import React, { useState } from 'react';
import { Table, Input } from 'antd';

const { Search } = Input;

const Marathon = () => {
  const [filteredData, setFilteredData] = useState([]);
  const data = [
    { id: 1, name: 'Marathon A', date: '2023-03-01', location: 'City A' },
    { id: 2, name: 'Marathon B', date: '2023-04-01', location: 'City B' },
    // Add more data here
  ];

  const handleSearch = (query) => {
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Location', dataIndex: 'location', key: 'location' },
  ];

  return (
    <div>
      <h1>Marathon Table</h1>
      <Search placeholder="Search by name" onSearch={handleSearch} enterButton />
      <Table dataSource={filteredData} columns={columns} rowKey="id" />
    </div>
  );
};

export default Marathon;