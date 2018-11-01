import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './SettingsForm.css';

export default class SettingsForm extends Component {
  render() {
    return(
      <section>
        <form class="settings-form">
          <fieldset>
            <legend>Settings</legend>
              <div>
                <label for="first-name">First name</label>
                <input type="text" name="first-name" id="first-name" placeholder="First name" />
              </div>
              <div>
                <label for="last-name">Last name</label>
                <input type="text" name="last-name" id="last-name" placeholder="Last name" />
              </div>
              <div>
                <label for="username">Username: <span>mary@gmail.com</span></label>
              </div>
              <div>
                <label for="disposable-income">Disposable income</label>
                <input type="number" name="disposable-income" id="disposable-income" />
              </div>
            <button type="submit">Save</button>
          </fieldset>
        </form>
      </section>
    );
  }
}
