import React, { useState } from 'react';
import { Table, Input } from 'antd';

const { Search } = Input;

const Sponsor = () => {
  const [filteredData, setFilteredData] = useState([]);
  const data = [
    { id: 1, name: 'Company A', donationAmount: 1000, marathonId: 1 },
    { id: 2, name: 'Company B', donationAmount: 2000, marathonId: 2 },
    // Add more data here
  ];

  const handleSearch = (query) => {
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.donationAmount.toString().includes(query) ||
      item.marathonId.toString().includes(query)
    );
    setFilteredData(filtered);
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Donation Amount', dataIndex: 'donationAmount', key: 'donationAmount' },
    { title: 'Marathon ID', dataIndex: 'marathonId', key: 'marathonId' },
  ];

  return (
    <div>
      <h1>Sponsor Table</h1>
      <Search placeholder="Search by name, donation amount, or marathon ID" onSearch={handleSearch} enterButton />
      <Table dataSource={filteredData} columns={columns} rowKey="id" />
    </div>
  );
};

export default Sponsor;