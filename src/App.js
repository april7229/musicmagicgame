
import React, { Component } from 'react';
import Home from './components/Home/Home';

import './App.css';
import Navbar from "./components/navbar/Navbar"
import Contact from "./components/contact/Contact";
class App extends Component {
  render() {
    return (
      <React.Fragment> 
        <Navbar />
        <Contact />
        <Home />
       
       
        </React.Fragment>
    );
  }
}

export default App;