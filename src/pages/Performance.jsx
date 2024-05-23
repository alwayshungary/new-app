import React, { useState } from 'react';
import { Table, Input } from 'antd';

const { Search } = Input;

const Performance = () => {
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

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Runner ID', dataIndex: 'runnerId', key: 'runnerId' },
    { title: 'Marathon ID', dataIndex: 'marathonId', key: 'marathonId' },
    { title: 'Time', dataIndex: 'time', key: 'time' },
  ];

  return (
    <div>
      <h1>Performance Table</h1>
      <Search placeholder="Search by runner ID, marathon ID, or time" onSearch={handleSearch} enterButton />
      <Table dataSource={filteredData} columns={columns} rowKey="id" />
    </div>
  );
};

export default Performance;