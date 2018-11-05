import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Stats from './Stats';
import Pipeline from './Pipeline';
import './Dashboard.css';

export default function Dashboard(props) {
  return (
    <div className="db-content">
      <Stats />
      <Pipeline />
    </div>
  );
}
