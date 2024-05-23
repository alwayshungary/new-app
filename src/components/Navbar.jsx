import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/donation">Donation</Link></li>
        <li><Link to="/marathon">Marathon</Link></li>
        <li><Link to="/performance">Performance</Link></li>
        <li><Link to="/result">Result</Link></li>
        <li><Link to="/runner">Runner</Link></li>
        <li><Link to="/sponsor">Sponsor</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;