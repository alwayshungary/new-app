import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';

const Users = ({ searchQuery }) => {
  const [filteredData, setFilteredData] = useState([]);
  const data = [
    { id: 1, username: 'johndoe', email: 'john@example.com', role: 'Admin' },
    { id: 2, username: 'janesmith', email: 'jane@example.com', role: 'User' },
  ];

  const handleSearch = (query) => {
    const filtered = data.filter(item =>
      item.username.toLowerCase().includes(query.toLowerCase()) ||
      item.email.toLowerCase().includes(query.toLowerCase()) ||
      item.role.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <h1>Users Table</h1>
      <SearchBar placeholder="Search by username, email, or role" onSearch={handleSearch} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;