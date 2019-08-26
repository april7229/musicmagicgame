import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './components/Main/Main'
import Navbar from "./components/navbar/Navbar";
import Index from "./layout/Index";
import Lyrics from "./Tracks/Lyrics";

import "./App.css";

import { ContextController } from "./context";

const App = () => {
  return (
    <ContextController>
      <Router>
        <>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
              <Route exact path="/Main" component={Main} />
            </Switch>
          </div>
        </>
      </Router>
    </ContextController>
  );
};

export default App;