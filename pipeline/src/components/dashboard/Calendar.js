import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CalendarMonth from './CalendarMonth';
import CalendarWeek from './CalendarWeek';
import './Calendar.css';

export default class Calendar extends Component {
  render() {
    return (
      <div class="calendar">
        <CalendarMonth />
        <CalendarWeek />
      </div>
    );
  }
}
