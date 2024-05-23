import React, { useState } from 'react';
import { Table, Input } from 'antd';

const { Search } = Input;

const Users = () => {
  const [filteredData, setFilteredData] = useState([]);
  const data = [
    { id: 1, username: 'johndoe', email: 'john@example.com', role: 'Admin' },
    { id: 2, username: 'janesmith', email: 'jane@example.com', role: 'User' },
    // Add more data here
  ];

  const handleSearch = (query) => {
    const filtered = data.filter(item =>
      item.username.toLowerCase().includes(query.toLowerCase()) ||
      item.email.toLowerCase().includes(query.toLowerCase()) ||
      item.role.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Username', dataIndex: 'username', key: 'username' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Role', dataIndex: 'role', key: 'role' },
  ];

  return (
    <div>
      <h1>Users Table</h1>
      <Search placeholder="Search by username, email, or role" onSearch={handleSearch} enterButton />
      <Table dataSource={filteredData} columns={columns} rowKey="id" />
    </div>
  );
};

export default Users;