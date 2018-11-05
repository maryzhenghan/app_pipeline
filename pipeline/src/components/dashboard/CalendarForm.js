import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './CalendarForm.css';

export default class CalendarForm extends Component {
  render() {
    return (
      <div class="calendar-form-container">
        <button>Add an entry</button>
        <section>
          <form class="calendar-form">
            <div>
              <label for="date">Date</label>
              <input type="date" name="date" id="date"/>
            </div>
            <div>
              <label for="amount">Amount ($)</label>
              <input type="number" name="first-name" id="first-name"/>
            </div>
            <div>
              <label for="store">Store</label>
              <input type="text" name="username" id="username" placeholder="Peet's Coffee" />
            </div>
            <div>
              <label for="item">What did you purchase?</label>
              <input type="text" name="item" id="item" placeholder="12oz mocha"/>
            </div>
            <button type="submit">Add to Pipeline</button>
            <button>Cancel</button>
          </form>
        </section>
      </div>
    );
  }
}
