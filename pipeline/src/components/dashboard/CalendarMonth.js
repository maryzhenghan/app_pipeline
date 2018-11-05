import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Calendar.css';

export default class CalendarMonth extends Component {
  render() {
    return (
      <div class="calendar-month">
        <ul>
          <li class="prev">&#10094;</li>
          <li class="next">&#10095;</li>
          <li>October<br /><span styles="font-size:18px">2018</span></li>
        </ul>
      </div>
    );
  }
}
