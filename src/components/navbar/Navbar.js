import React, { Component } from 'react';
import './Navbar.min.css';




 class Navbar extends Component {
  render() {
    return (
       <div>
          <nav className="nav-center">
        <ul>
          <li><a href="./Home">Home</a></li>
          <li><a href="./Products">Find the lyrics</a></li>
          <li><a href="#">About</a></li>
          <li><a href="./Contact">Contact</a></li>
        </ul>

      </nav>
       </div>
    
    );
  }
}


export default Navbar;