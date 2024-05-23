import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Menu mode="horizontal">
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