import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Stats.css';

export default function Stats(props) {
  return (
    <section>
      <header>
        <h3>Pipe stats</h3>
        <h4>Today's spend: $20 / $25</h4>
        <h4>This week's spend: $140 / $175</h4>
        <h4>This month's spend: $600 / $750</h4>
      </header>
    </section>
  );
}
