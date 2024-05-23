import React, { useState } from 'react';
import { Table, Input } from 'antd';

const { Search } = Input;

const Result = () => {
  const [filteredData, setFilteredData] = useState([]);
  const data = [
    { id: 1, performanceId: 1, position: 1, prize: 'Gold Medal' },
    { id: 2, performanceId: 2, position: 2, prize: 'Silver Medal' },
    // Add more data here
  ];

  const handleSearch = (query) => {
    const filtered = data.filter(item =>
      item.performanceId.toString().includes(query) ||
      item.position.toString().includes(query) ||
      item.prize.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Performance ID', dataIndex: 'performanceId', key: 'performanceId' },
    { title: 'Position', dataIndex: 'position', key: 'position' },
    { title: 'Prize', dataIndex: 'prize', key: 'prize' },
  ];

  return (
    <div>
      <h1>Result Table</h1>
      <Search placeholder="Search by performance ID, position, or prize" onSearch={handleSearch} enterButton />
      <Table dataSource={filteredData} columns={columns} rowKey="id" />
    </div>
  );
};

export default Result;