import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='navigation'>
      <NavLink end to="/" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>Home</NavLink>
      <NavLink end to="/news" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>News</NavLink>
      <NavLink end to="/about" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>About</NavLink>

    </div>
  );
};

export default Navigation;