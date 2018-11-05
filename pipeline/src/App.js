import React, { Component } from 'react';

import './App.css';

import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/landing/LandingPage';
import LoginPage from './components/login/LoginPage';
import SettingsPage from './components/settings/SettingsPage';
import Dashboard from './components/dashboard/Dashboard';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        {/*<LandingPage />*/}
        {/*<LoginPage />*/}
        {/*<SettingsPage />*/}
        <Dashboard />
        <Footer />
      </div>
    );
  }
}
