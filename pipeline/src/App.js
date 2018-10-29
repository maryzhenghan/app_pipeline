import React, { Component } from 'react';

import './App.css';

import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
          <p>Hello world, this is where the body content & components will go.</p>
        <Footer />
      </div>
    );
  }
}
