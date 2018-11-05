import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Calendar from './Calendar';
import CalendarForm from './CalendarForm';
import './Pipeline.css';

export default function Pipeline(props) {
  return (
    <div className="pipeline-content">
      <section>
        <header>
          <h3>Mary's Pipeline</h3>
        </header>
        <Calendar />
        <CalendarForm />
      </section>
    </div>
  );
}
