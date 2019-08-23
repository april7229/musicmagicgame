import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar"
import Contact from "./components/contact/Contact";
import Bar from './layout/Bar';
import Index from './layout/Index';
import {Provider} from './context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



class App extends Component {
  
  render(){
  return ( 
    <Provider>
      <Router>
    <React.Fragment> 
  <Navbar />
  <Bar />
  <div>
  
  
  
  <Switch>
  {/* <Route exact path="/Home" component ={Search} /> */}
  <Route exact path="/Contact" component ={Contact} />
  {/* <Route exact path="/Products" component ={Bar} /> */}
  <Route exact path="/Products" component ={Index} />
  
  
  </Switch>
  </div>
  
  </React.Fragment> 
  </Router>
  </Provider>
   
  )
}
}
export default App;