import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Header.css';

export function Header(props) {
  return (
    <div className="Header">
      <h1>This is the header.</h1>
      <h2>This is the sub-header.</h2>
    </div>
  );
}

export default Header;
