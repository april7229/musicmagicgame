
import React, { Component } from 'react';
import Home from './components/Home/Home';
import {Route,Switch} from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar/Navbar"
import Contact from "./components/contact/Contact";




class App extends Component {
  
  render(){
  return ( 
    <React.Fragment> 
  <Navbar />
  
  <Switch>
  <Route exact path="/Home" component ={Home} />
  <Route exact path="/Contact" component ={Contact} />
  
  </Switch>
  
  </React.Fragment> 
   
  )
}
}
export default App;