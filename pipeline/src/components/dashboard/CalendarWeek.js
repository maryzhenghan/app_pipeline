import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CalendarDay from './CalendarDay';
import './Calendar.css';

export default class CalendarWeek extends Component {
  render() {
    return (
      <div class="calendar-week">
        <section>
          <ul class="weekdays">
            <li>Mo</li>
            <li>Tu</li>
            <li>We</li>
            <li>Th</li>
            <li>Fr</li>
            <li>Sa</li>
            <li>Su</li>
          </ul>
        </section>
        <CalendarDay />
      </div>
    );
  }
}
