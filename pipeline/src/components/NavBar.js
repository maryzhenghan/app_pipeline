import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar(props) {
  return (
    <div className="NavBar">
      <nav className="menu">
        <ul className="menu-list">
          <li>Pipeline App</li>
          <li>Features</li>
          <li>Login</li>
          <li>Sign up</li>
        </ul>
      </nav>
    </div>
  );
}
