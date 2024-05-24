import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import marathonLogo from '../assets/marathon.jpeg';
import './App.css'; // Import the main CSS file

const Navbar = () => {
  return (
    <Menu mode="horizontal" theme="dark" className="navbar-menu">
      <Menu.Item key="logo" className="logo-item" disabled>
        <Link to="/">
          <img src={marathonLogo} className="logo" alt="Marathon Logo" />
        </Link>
      </Menu.Item>
      <Menu.Item key="donation">
        <Link to="/donation">Donation</Link>
      </Menu.Item>
      <Menu.Item key="marathon">
        <Link to="/marathon">Marathon</Link>
      </Menu.Item>
      <Menu.Item key="performance">
        <Link to="/performance">Performance</Link>
      </Menu.Item>
      <Menu.Item key="result">
        <Link to="/result">Result</Link>
      </Menu.Item>
      <Menu.Item key="runner">
        <Link to="/runner">Runner</Link>
      </Menu.Item>
      <Menu.Item key="sponsor">
        <Link to="/sponsor">Sponsor</Link>
      </Menu.Item>
      <Menu.Item key="users">
        <Link to="/users">Users</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;


