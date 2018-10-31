import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './LoginForm.css';

export default class LoginForm extends Component {
  render() {
    return(
      <section>
        <form class="settings-form">
          <fieldset>
            <legend>Login</legend>
              <div>
                <label for="username">Username</label>
                <input type="text" name="username" id="username" />
              </div>
              <div>
                <label for="password">Password</label>
                <input type="password" name="password" id="password" />
              </div>
            <button type="submit">Login</button>
            <button type="submit">Sign up now</button>
          </fieldset>
        </form>
      </section>
    );
  }
}
