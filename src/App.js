import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar"
import Contact from "./components/contact/Contact";
import Index from './layout/Index';
import {Provider} from './context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Lyrics from './Tracks/Lyrics';


class App extends Component {
  
  render(){
  return ( 
    <Provider>
      <Router>
    <React.Fragment> 
  <Navbar />
  
  
  
  <div>
  
  
  
  <Switch>

  
  <Route exact path="/Contact" component ={Contact} />
  
  <Route exact path="/Products" component ={Index} />
  <Route  path="Products/lyrics/track/id:" component ={Lyrics} />
  
  </Switch>
  </div>
  
  </React.Fragment> 
  </Router>
  </Provider>
   
  )
}
}
export default App;