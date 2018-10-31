import React, { Component } from 'react';

import './App.css';

import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/landing/LandingPage';
import LoginPage from './components/login/LoginPage';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        {/*<LandingPage />*/}
        <LoginPage />
        <Footer />
      </div>
    );
  }
}
