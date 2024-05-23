// src/pages/Donation.jsx
import React from 'react';

const Donation = () => {
  return (
    <div>
      <h1>Donation Table</h1>
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
          {/* Add your data rows here */}
        </tbody>
      </table>
    </div>
  );
};

export default Donation;