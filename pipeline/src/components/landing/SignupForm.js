import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './SignupForm.css';

export default class SignupForm extends Component {
  render() {
    return (
      <section>
        <header>
          <h3>Build your Pipeline now!</h3>
        </header>
        <form class="signup-form">
          <div>
            <label for="first-name">First name</label>
            <input type="text" name="first-name" id="first-name" placeholder="First name" />
          </div>
          <div>
            <label for="last-name">Last name</label>
            <input type="text" name="last-name" id="last-name" placeholder="Last name" />
          </div>
          <div>
            <label for="username">Email</label>
            <input type="text" name="username" id="username" />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button type="submit">Let's do this!</button>
        </form>
      </section>
    );
  }
}
