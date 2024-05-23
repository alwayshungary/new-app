import React from 'react';

const Users = () => {
  return (
    <div>
      <h1>Users Table</h1>
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
          {/* Add your data rows here */}
        </tbody>
      </table>
    </div>
  );
};

export default Users;