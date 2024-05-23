import React, { useState } from 'react';
import { Table, Input } from 'antd';

const { Search } = Input;

const Runner = () => {
  const [filteredData, setFilteredData] = useState([]);
  const data = [
    { id: 1, name: 'John Doe', age: 30, gender: 'Male' },
    { id: 2, name: 'Jane Smith', age: 25, gender: 'Female' },
    // Add more data here
  ];

  const handleSearch = (query) => {
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.age.toString().includes(query) ||
      item.gender.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Gender', dataIndex: 'gender', key: 'gender' },
  ];

  return (
    <div>
      <h1>Runner Table</h1>
      <Search placeholder="Search by name, age, or gender" onSearch={handleSearch} enterButton />
      <Table dataSource={filteredData} columns={columns} rowKey="id" />
    </div>
  );
};

export default Runner;